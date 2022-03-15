console.log("hello from assets/main.js");
console.log('/images/' + data[0].avatar);

document.getElementById('main-title').innerHTML = data[0].title;
document.getElementById('sub-title').innerHTML = data[0].name;
document.getElementById('main-picture').src = '/assets/images/' + data[0].avatar;


