const container = document.getElementById('container');

async function criarCards() {
        const produtos = await fetch ('https://fakestoreapi.com/products');
        const dados = await produtos.json();

        for (let i = 0; i < dados.length; i++) {
            const { image, description, title, price, category, rating } = dados[i];

            // CONTAINER DOS CARDS
            const cards = document.createElement('div');
            cards.classList.add('cards');

            // CONTAINER DOS TEXTOS DENTRO DOS CARDS
            const cardsText = document.createElement('div');
            cardsText.classList.add('cards-text');

            const imagem = document.createElement('img');
            imagem.classList.add('imagem');
            imagem.src = image;
            cards.appendChild(imagem);

            const titulo = document.createElement('h2');
            titulo.classList.add('card-title');
            titulo.innerText = title;
            cardsText.appendChild(titulo);

            const descriçao = document.createElement('p');
            descriçao.classList.add('card-desc');
            descriçao.innerText = description;
            cardsText.appendChild(descriçao);

            const preço = document.createElement('p');
            preço.classList.add('card-text-item');
            preço.innerText = `Preço: R$ ${price}`;
            cardsText.appendChild(preço);

            const categoria = document.createElement('p');
            categoria.classList.add('card-text-item');
            categoria.innerText = `Categoria: ${category}`;
            cardsText.appendChild(categoria);

            const nota = document.createElement('p');
            nota.classList.add('card-text-item');
            nota.innerText = `Nota: ${rating.rate}`;
            cardsText.appendChild(nota);

            cards.appendChild(cardsText);
            container.appendChild(cards);
        }
    }

const botao = document.getElementById('btn-produtos').addEventListener('click', criarCards);