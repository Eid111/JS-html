const cards = [
    {
        name: "Perfected Strategies for you",
        disc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        img: "resources/assets/Images/formal.jpeg",
        logo: "resources/assets/Images/Adidas.png" ,
    },
    {
        name: "Perfected Strategies for you",
        disc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        img: "resources/assets/Images/formal.jpeg",
        logo: "resources/assets/Images/Adidas.png" ,
    },
    {
        name: "Perfected Strategies for you",
        disc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        img: "resources/assets/Images/formal.jpeg",
        logo: "resources/assets/Images/Adidas.png" ,
    }
];

// Loop to create each card dynamically
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    // Create the card's inner HTML
    cardElement.innerHTML = `
        <img class="product-image" src="${card.img}" alt="${card.name}">
        <div class="logo">
            <img src="${card.logo}" alt="Logo">
        </div>
        <div class="content">
            <h2>${card.name}</h2>
            <p>${card.disc}</p>
        </div>
    `;

    // Append the card to the container in the HTML
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.appendChild(cardElement);
}
