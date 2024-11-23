import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) 
{
    // Chama a função 'getTodosPosts' para obter todos os posts do banco de dados.
    const resultado = await getTodosPosts;
    // Envia uma resposta HTTP com status 200 (sucesso) e os dados dos posts no formato JSON.
    res.status(200).json(resultado);
}