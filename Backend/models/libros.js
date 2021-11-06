import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    dbstatus: Boolean,
    registerDate: {type:Date, default: Date.now},
})

const libros = mongoose.model("libros",roleSchema);

export default libros;
