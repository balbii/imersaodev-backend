import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos utilizando o multer.
// O multer é uma biblioteca que auxilia no upload de arquivos para o servidor.
const storage = multer.diskStorage({
  // Define o diretório de destino para os arquivos.
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo a ser salvo.
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Cria uma instância do multer com a configuração de armazenamento definida.
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // Habilita o parsing de JSON para as requisições.
  app.use(express.json());

  // Rota para listar todos os posts.
  app.get("/posts", listarPosts);

  // Rota para criar um novo post.
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de uma imagem.
  // O `upload.single('imagem')` configura o multer para lidar com um único arquivo com o nome 'imagem' no corpo da requisição.
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;