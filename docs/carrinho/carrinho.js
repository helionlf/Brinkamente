// Função para inicializar a loja buscando os produtos no servidor
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
        // var links = document.getElementsByTagName('a');
        // Array.from(links).forEach((link) => {
        //     link.addEventListener("click", async function(event) {
        //         event.preventDefault();
        //         const produtoId = this.getAttribute('key');
                
        //         // Enviar solicitação para adicionar o produto ao carrinho
        //         const response = await fetch('/api/produtos/add', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({ produtoId })
        //         });
                
        //         // Atualizar o carrinho na interface do usuário
        //         atualizarCarrinho();
        //     });
        // });
    } catch (error) {
        console.error('Erro ao inicializar a loja:', error);
    }
}

// Função para atualizar o carrinho na interface do usuário
// async function atualizarCarrinho() {
//     try {
//         const response = await fetch('/api/produtos');
//         const carrinho = await response.json();
        
//         var containerCarrinho = document.getElementById('carrinho');
//         containerCarrinho.innerHTML = "";
        
//         carrinho.forEach((item) => {
//             containerCarrinho.innerHTML += `
//                 <p>${item.nome} | Quantidade: ${item.quantidade}</p>
//             `;
//         });
//     } catch (error) {
//         console.error('Erro ao atualizar o carrinho:', error);
//     }
// }

// Inicializar a loja ao carregar a página
window.onload = inicializarLoja;
