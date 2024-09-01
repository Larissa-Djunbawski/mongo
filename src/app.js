import express from "express"

const app = express();//executando e importando a função express
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O senhor dos aneis"

    },
    {
       id : 2,
       titulo: "O hobbit"
    }
]


app.get("/",(req,res)=>{
    res.status(200).send("Curso de Node.js") //O express pega as respostas e requisições
})


app.get("/livros",(req,res)=> {
    res.status(200).json(livros) //a resposta será interpretada como json, formato de dados padrão de apis
})

app.post ("/livros",(req,res)=> {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
})

export default app;