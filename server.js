import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma linda paisagem",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Um delicioso prato",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Um animal fofo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Uma cidade vibrante",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Um objeto de arte",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando");
});
// parametros do get(rota, (requisição, resposta))
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});