async function inicializarLoja() {
    try {
        const response = await fetch('/produtos');
        const produtos = await response.json();
        
        var containerProdutos = document.getElementById('produtos');
        
        produtos.forEach((produto) => {
            containerProdutos.innerHTML += `
                <div class="produto-single">
                    <img src="${produto.img}" />
                    <p>${produto.nome}</p>
                    <a key="${produto._id}" href="#" class="add-to-cart">Adicionar ao carrinho!</a>
                </div>
            `;
        });

        // Adicionar evento de clique aos links "Adicionar ao carrinho"
        var links = document.getElementsByClassName('add-to-cart');
        Array.from(links).forEach((link) => {
            link.addEventListener("click", async function(event) {
                event.preventDefault();
                const produtoId = this.getAttribute('key');
                
                // Enviar solicitação para adicionar o produto ao carrinho
                const response = await fetch('/produtos/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ produtoId: produtoId })
                });
                const item = await response.json();
                
                // Atualizar o carrinho na interface do usuário
                atualizarCarrinho(item);
            });
        });
    } catch (error) {
        console.error('Erro ao inicializar a loja:', error);
    }
}

// Atualizar o carrinho na interface do usuário
async function atualizarCarrinho(produto) {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML += `
        <p>${produto.nome} | Quantidade: ${produto.quantidade}</p>
    `;
}

window.onload = inicializarLoja;