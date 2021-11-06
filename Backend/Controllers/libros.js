import libros from "../models/libros.js";

const registerLibros = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  const existingLibros = await libros.findOne({ name: req.body.name });
  if (existingLibros) return res.status(400).send("The Book already exist");

  const librosSchema = new libros({
    name: req.body.name,
    description: req.body.description,
    dbstatus: true,
  });

  const result = await librosSchema.save();

  if (!result) return res.status(400).send("Failed to registrer Book");

  res.status(200).send({ result });
};

export default { registerLibros };