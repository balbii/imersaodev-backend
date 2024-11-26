import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsModel.js";

// Função assíncrona para listar todos os posts.
export async function listarPosts(req, res) {
  // Chama a função do modelo para obter todos os posts do banco de dados.
  const resultado = await getTodosPosts();
  // Envia uma resposta HTTP com status 200 e os dados dos posts em formato JSON.
  res.status(200).json(resultado);
}

// Função assíncrona para criar um novo post.
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post a partir do corpo da requisição.
  const novoPost = req.body;
  try {
    // Chama a função do modelo para criar o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);
    // Envia uma resposta HTTP com status 200 e os dados do post criado.
    res.status(200).json(postCriado);
  } catch (erro) {
    // Imprime o erro no console e envia uma resposta de erro ao cliente.
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

// Função assíncrona para fazer upload de uma imagem e criar um novo post.
export async function uploadImagem(req, res) {
  // Cria um objeto com os dados do novo post, incluindo o nome da imagem.
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };
  try {
    // Chama a função do modelo para criar o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);
    // Cria um novo nome para o arquivo da imagem, utilizando o ID do post criado.
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Renomeia o arquivo da imagem para o novo nome.
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia uma resposta HTTP com status 200 e os dados do post criado.
    res.status(200).json(postCriado);
  } catch (erro) {
    // Imprime o erro no console e envia uma resposta de erro ao cliente.
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}