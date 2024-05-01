var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

// app.use(bodyParser.json())
// app.use(express.static('assets'))
// app.use('/assets/estilos', express.static(__dirname + '/assets/estilos'));
// app.use('/assets/imagens', express.static(__dirname + '/assets/imagens'));
// app.use('/assets/paginas', express.static(__dirname + '/assets/paginas'));
// app.use('/assets/scripts', express.static(__dirname + '/assets/scripts'));

app.use(bodyParser.urlencoded({
      extended: true
}))

_promise = mongoose.connect("mongodb://localhost:27017/brinkarmente");
var db = mongoose.connection;

db.on("error", () => console.log("Erro em conectar ao banco de dados"))
//db.once("open", () => console.log("Susseco em conectar ao banco de dados"))
db.once("open", () => {
      db.collection('produtos').find({}).toArray()
      .then((result) => {
      console.log("Documentos encontrados na coleção 'produtos':", result);
      })
      .catch((error) => {
      console.error("Erro ao buscar documentos:", error);
      });
})

// Modelos de dados e rotas para manipular o carrinho
const itemSchema = new mongoose.Schema({
      nome: String,
      img: String,
      quantidade: Number
});

const Item = mongoose.model("Item", itemSchema);

// Rota para adicionar um item ao carrinho
app.post("/api/produtos/add", async (req, res) => {
      const { nome, img, quantidade } = req.body;
      
      try {
      const newItem = new Item({ nome, img, quantidade });
      await newItem.save();
      res.status(201).json(newItem);
      } catch (err) {
      res.status(400).json({ message: err.message });
      }
});

// Rota para obter todos os itens do carrinho
app.get("/api/produtos", async (req, res) => {
      try {
          const products = await Product.find();
          res.json(products);
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
  });

// Rota para remover um item do carrinho
app.delete("/api/produtos/:id", async (req, res) => {
      const { id } = req.params;
      
      try {
      await Item.findByIdAndDelete(id);
      res.json({ message: "Item removido do carrinho com sucesso" });
      } catch (err) {
      res.status(500).json({ message: err.message });
      }
});

app.get("/", (req, res) => {
      res.set({
            "ALLow-access-ALLow-Origin": "*"
      })
      return res.redirect("loginpage.html");
}).listen(3000)


console.log("Ouvindo porta 3000...")