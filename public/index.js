function storeNameAndRedirect() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;
    window.location.href = `playpage.html?name=${name}`;
}

function displayQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            const containerEl = document.querySelector('#quote');

            // Clear previous quote and author
            containerEl.innerHTML = '';

            const quoteEl = document.createElement('p');
            quoteEl.classList.add('quote');
            const authorEl = document.createElement('p');
            authorEl.classList.add('author');

            quoteEl.textContent = data.content;
            authorEl.textContent = `- ${data.author}`;

            containerEl.appendChild(quoteEl);
            containerEl.appendChild(authorEl);
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
        });
}