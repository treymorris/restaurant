const content = document.getElementById('content');
 
const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');
content.appendChild(tabsContainer);

const tab1 = document.createElement('div');
tab1.classList.add('tabs');
tabsContainer.appendChild(tab1);
tab1.textContent = 'Home';

const tab2 = document.createElement('div');
tab2.classList.add('tabs');
tabsContainer.appendChild(tab2);
tab2.textContent = 'Menu'

const tab3 = document.createElement('div');
tab3.classList.add('tabs');
tabsContainer.appendChild(tab3);
tab3.textContent = 'Contact'

const container = document.createElement('div');
container.classList.add('container');
content.appendChild(container);

const mainPage = document.createElement('div');
mainPage.classList.add('main-page');
container.appendChild(mainPage);

const mainPageBox1 = document.createElement('div');
mainPageBox1.classList.add('main-page-box1');
mainPage.appendChild(mainPageBox1);
mainPageBox1.textContent = 'Ristorante Rustica';

const mainPageBox2 = document.createElement('div');
mainPageBox2.classList.add('main-page-box2');
mainPage.appendChild(mainPageBox2);
mainPageBox2.textContent = 'Sophisticated yet casual. Ristorante Rustica serves fresh, homemade Italian food. Whether you are celebrating a special occasion or just want to grab a quick bite to eat, Ristorante Rustica will satisfy your senses on every level.';

const mainPageBox3 = document.createElement('div');
mainPageBox3.classList.add('main-page-box3');
mainPage.appendChild(mainPageBox3);
mainPageBox3.textContent = 'Hours of Operation';

const mainPageBox4 = document.createElement('div');
mainPageBox4.classList.add('main-page-box4');
mainPage.appendChild(mainPageBox4);
mainPageBox4.textContent = 'Location';

const hoursBox = document.createElement('ul');
hoursBox.classList.add('hours-box');
mainPageBox3.appendChild(hoursBox);

const li1 = document.createElement('li');
li1.classList.add('li');
hoursBox.appendChild(li1);
li1.textContent = 'Monday: 1pm - 10pm';

const li2 = document.createElement('li');
li2.classList.add('li');
hoursBox.appendChild(li2);
li2.textContent = 'Tuesday: 1pm - 10pm';

const li3 = document.createElement('li');
li3.classList.add('li');
hoursBox.appendChild(li3);
li3.textContent = 'Wednesday: 1pm - 10pm';

const li4 = document.createElement('li');
li4.classList.add('li');
hoursBox.appendChild(li4);
li4.textContent = 'Thurday: 1pm - 10pm';

const li5 = document.createElement('li');
li5.classList.add('li');
hoursBox.appendChild(li5);
li5.textContent = 'Friday: 1pm - 10pm';

const li6 = document.createElement('li');
li6.classList.add('li');
hoursBox.appendChild(li6);
li6.textContent = 'Saturday: 1pm - 10pm';

const li7 = document.createElement('li');
li7.classList.add('li');
hoursBox.appendChild(li7);
li7.textContent = 'Sunday: 1pm - 10pm';

const footer = document.createElement('div');
footer.classList.add('footer');
content.appendChild(footer);

