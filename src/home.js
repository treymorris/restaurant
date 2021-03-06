function createHomePage() {

    const homePage = document.createElement('div');
    homePage.classList.add('home');

    const image = document.createElement('img');
    image.src = 'https://images.freeimages.com/images/large-previews/015/pasta-1327648.jpg';
    image.alt = '';

    
    homePage.appendChild(createParagraph('Sophisticated, yet casual.'));
    homePage.appendChild(createParagraph('Ristorante Rustica serves fresh, homemade Italian food.'));
    homePage.appendChild(image);
    homePage.appendChild(createParagraph('Whether you are celebrating a special occasion or just want to grab a quick bite to eat, Ristorante Rustica will satisfy your senses on every level.'));
    
    return homePage;
}

function createParagraph(text) {
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

function loadHomePage() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHomePage());
}

export { loadHomePage };