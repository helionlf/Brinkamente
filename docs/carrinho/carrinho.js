const itens = [
    {
        id: 0,
        nome: 'brinquedo 01',
        img: 'caminho da imagem',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'brinquedo 02',
        img: 'caminho da imagem',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'brinquedo 03',
        img: 'caminho da imagem',
        quantidade: 0
    },
]


inicializarLoja = () => {
    var containerProdutos = document.getElementsByClassName('produtos');
    itens.map((valor)=>{
        containerProdutos.innerHTML += `
            <div class="produto-single">
                <p>`+valor.nome+`</p>
                <a href="#" onclick="adicionarAoCarrinho(`+valor.id+`)">Adicionar ao carrinho</a>
            </div>
        `;
    })
}

inicializarLoja();
