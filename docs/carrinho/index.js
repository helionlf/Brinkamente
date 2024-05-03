const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors'); // Importe o pacote cors

const app = express();

// Configurações do CORS
app.use(cors());

// Configurando o body-parser para lidar com solicitações JSON
app.use(bodyParser.json());

// Configurar o servidor web local
app.use(express.static(__dirname + '/')); // Serve arquivos estáticos na pasta 'public'

// Rota principal para servir o arquivo HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/carrinho.html');
});

// Conexão com o MongoDB usando Mongoose
mongoose.connect('mongodb+srv://heliofilhofhnlf:rWZwuLLZFjSSe8rI@cluster0.araadea.mongodb.net/brinkarmente', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexão estabelecida com o MongoDB.'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definindo o esquema do produto
const produtoSchema = new mongoose.Schema({
  nome: String,
  img: String,
  quantidade: Number
}, { collection: 'produtos' });


// Criando o modelo Produto a partir do esquema
const Produto = mongoose.model('Produto', produtoSchema);

// Rota para obter todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    console.log("Recebida solicitação para /produtos");
    const produtos = await Produto.find();
    console.log("Produtos encontrados:", produtos);
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ message: error.message });
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
