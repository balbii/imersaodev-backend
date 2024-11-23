import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// O resultado da conexão é armazenado na variável 'conexao'.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts de uma coleção específica no banco de dados.
export async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-db' da conexão.
    const db = conexao.db("imersao-db");
    // Obtém a coleção 'posts' do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna um array com os resultados.
    return colecao.find().toArray();
};