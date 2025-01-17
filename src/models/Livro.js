import mongoose from "mongoose"

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}
}, {
    versionKey: false
}) //passa as propriedades que terão

const livro = mongoose.model("livros", livroSchema);

export default livro