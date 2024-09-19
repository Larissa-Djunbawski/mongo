import express from "express"
import conectaNaDatabase  from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.erro("erro de conexão",erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})
const app = express();//executando e importando a função express
routes(app)
//app.use(express.json())
// app.get("/",(req,res)=>{
//     res.status(200).send("Curso de Node.js") //O express pega as respostas e requisições
// })
    // app.get("/livros", async (req,res)=> {
    //     const listaLivros = await livro.find({})
    //     res.status(200).json(listaLivros) //a resposta será interpretada como json, formato de dados padrão de apis
    // })



app.delete("/livros/:id",(req,res) => {
    const index = buscaLivros(req.params.id)
    livros.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

export default app;

//mongodb+srv://admin:admin123@aluracurso.bewqa.mongodb.net/?retryWrites=true&w=majority&appName=AluraCurso