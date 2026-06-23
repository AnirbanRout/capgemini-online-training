const url = 'https://dummyjson.com/products';

async function getProducts() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        const container = document.getElementById('container');
        container.innerHTML = '';

        const cards = document.createElement('div');
        cards.classList.add('cards');

        data.products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = product.thumbnail;
            image.alt = product.title;
            image.loading = 'lazy';

            const title = document.createElement('h2');
            title.textContent = product.title;

            const rating = document.createElement('p');
            rating.textContent = `⭐ Rating: ${product.rating}`;

            const price = document.createElement('p');
            price.textContent = `💲 Price: $${product.price}`;

            card.append(image, title, rating, price);
            cards.appendChild(card);
        });

        container.appendChild(cards);

    } catch (error) {
        console.error(error);

        document.getElementById('container').innerHTML = `
            <div class="error">
                <h2>Failed to load products</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}

getProducts();