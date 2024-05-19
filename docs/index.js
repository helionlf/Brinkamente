const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const screensNavigationRouter = require('./src/routes/screensNavigationRouter');
// const productRouter = require('./src/routes/productRouter');
// const userRouter = require('./src/routes/userRouter');

app.use(express.static(path.join(__dirname, 'src', 'public')));

// Conexão com o MongoDB usando Mongoose
mongoose.connect('mongodb+srv://heliofilhofhnlf:rWZwuLLZFjSSe8rI@cluster0.araadea.mongodb.net/brinkarmente', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexão estabelecida com o MongoDB.'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


  app.use('/', screensNavigationRouter);
  // app.use('/', loginRegisterRouter);
  // app.use('/', contactRouter);
  // app.use('/', productRouter);
  // app.use('/', userRouter);

// Definindo o esquema do produto
// const produtoSchema = new mongoose.Schema({
//   nome: String,
//   img: String,
//   quantidade: Number
// }, { collection: 'produtos' });


// // Criando o modelo Produto a partir do esquema
// const Produto = mongoose.model('Produto', produtoSchema);

// // Rota para obter todos os produtos
// app.get('/produtos', async (req, res) => {
//   try {
//     console.log("Recebida solicitação para /produtos");
//     const produtos = await Produto.find();
//     console.log("Produtos encontrados:", produtos);
//     res.json(produtos);
//   } catch (error) {
//     console.error("Erro ao buscar produtos:", error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Rota para obter um produto a parti do seu id;
// app.post('/produtos/add', async (req, res) => {
//   try {
//       console.log("Recebida solicitação para /produtos/add");
      
//       const produtoId = req.body.produtoId;
//       const produto = await Produto.findById(produtoId);
      
//       if (produto) {
//           console.log("Produto encontrado:", produto.nome, "adicionado ao carrinho!");
//           res.status(200).json(produto);
//       } else {
//           console.log("Produto não encontrado");
//           res.status(404).json({ message: "Produto não encontrado" });
//       }
//   } catch (error) {
//       console.error("Erro ao buscar produto:", error);
//       res.status(500).json({ message: error.message });
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
