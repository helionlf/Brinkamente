const itens = [
    {
        id: 0,
        nome: 'brinquedo 01',
        img: 'imagens-produtos/imagem-02.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'brinquedo 02',
        img: 'imagens-produtos/imagem-02.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'brinquedo 03',
        img: 'imagens-produtos/imagem-02.jpg',
        quantidade: 0
    },
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((valor)=>{
        containerProdutos.innerHTML += `
            <div class="produto-single">
                <img src="${valor.img}" />
                <p>${valor.nome}</p>
                <a key="${valor.id}" href="#">Adicionar ao carrinho!</a>
            </div>
        `;
    })
}

inicializarLoja();


atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((valor)=>{
        if(valor.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <p>${valor.nome} | Quantidade: ${valor.quantidade}</p>
            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}







