console.log("hello from assets/main.js");


// document.getElementById('main-title').innerHTML = data[0].title;
// document.getElementById('sub-title').innerHTML = data[0].name;
// document.getElementById('main-picture').src = '/assets/images/' + data[0].avatar;

document.getElementById('burger-menu').addEventListener('click', (event) => {
    console.log('click', event);
    document.getElementById('nav-mobile-list').classList.toggle('close');
});

document.getElementById('theme').addEventListener('click', (event) => {
    console.log('click', event);
    document.getElementById('main').classList.toggle('dark');
});

