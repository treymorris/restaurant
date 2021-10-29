function createMenuPage() {

    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const mainPage = document.createElement('div');
    mainPage.classList.add('mainPage');
    container.appendChild(mainPage);

    const menuPageBox1 = document.createElement('div');
    menuPageBox1.classList.add('mainPageBox1');
    mainPage.appendChild(menuPageBox1);
    menuPageBox1.textContent = 'Menu';

    const menuPageBox2 = document.createElement('div');
    menuPageBox2.classList.add('smallBox');
    mainPage.appendChild(menuPageBox2);
    menuPageBox2.textContent = 'Appetizers';

    const menuPageBox3 = document.createElement('div');
    menuPageBox3.classList.add('bigBox', 'smallBox');
    mainPage.appendChild(menuPageBox3);
    menuPageBox3.textContent = 'Oysters ala fornio';

    const menuPageBox4 = document.createElement('div');
    menuPageBox4.classList.add('smallBox');
    mainPage.appendChild(menuPageBox4);
    menuPageBox4.textContent = 'Salads';

    const menuPageBox5 = document.createElement('div');
    menuPageBox5.classList.add('bigBox', 'smallBox');
    mainPage.appendChild(menuPageBox5);
    menuPageBox5.textContent = 'Insalata Caprese';

    const menuPageBox6 = document.createElement('div');
    menuPageBox6.classList.add('smallBox');
    mainPage.appendChild(menuPageBox6);
    menuPageBox6.textContent = 'Entrees';

    const menuPageBox7 = document.createElement('div');
    menuPageBox7.classList.add('bigBox', 'smallBox');
    mainPage.appendChild(menuPageBox7);
    menuPageBox7.textContent = 'Osso Bucco';

    const menuPageBox8 = document.createElement('div');
    menuPageBox8.classList.add('smallBox');
    mainPage.appendChild(menuPageBox8);
    menuPageBox8.textContent = 'Desserts';

    const menuPageBox9 = document.createElement('div');
    menuPageBox9.classList.add('bigBox', 'smallBox');
    mainPage.appendChild(menuPageBox9);
    menuPageBox9.textContent = 'Tira Misu';

    const menuPageBox10 = document.createElement('div');
    menuPageBox10.classList.add('smallBox');
    mainPage.appendChild(menuPageBox10);
    menuPageBox10.textContent = 'Beverages';

    const menuPageBox11 = document.createElement('div');
    menuPageBox11.classList.add('bigBox', 'smallBox');
    mainPage.appendChild(menuPageBox11);
    menuPageBox11.textContent = 'Wine';

}

export {
    createMenuPage
}