import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita a interpretação de dados JSON nas requisições HTTP.
    app.use(express.json());
    // Define uma rota GET para a URL '/posts'.
    // Quando uma requisição GET for feita para essa rota, a função assíncrona será executada.
    app.get("/posts", listarPosts);
};

export default routes;