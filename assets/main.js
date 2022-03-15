console.log("hello from assets/main.js");

// document.getElementById('main-title').innerHTML = data[0].title;
// document.getElementById('sub-title').innerHTML = data[0].name;
// document.getElementById('main-picture').src = '/assets/images/' + data[0].avatar;

// je target l'element avec l'id burger menu dans layouts/header.php et ecoute l'event click
document.getElementById('burger-menu').addEventListener('click', (event) => {
    console.log('click', event);
    // au click je cible l'element avec l'id nav-mobile-list et je le rend visible grace au toggle 'close' qui correspond a une class css
    document.getElementById('nav-mobile-list').classList.toggle('close');
});

// meme logique que pour le burger menu avec le dark mode
document.getElementById('theme').addEventListener('click', (event) => {
    console.log('click', event);
    document.getElementById('main').classList.toggle('dark');
});

