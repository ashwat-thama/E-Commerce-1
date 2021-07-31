let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let item = document.querySelectorAll('.item');


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

function linkAction (){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

item.forEach(n => n.addEventListener('click' , linkAction));

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.small-img').forEach(image_index => {
  image_index.addEventListener('click', () => {
    var src = image_index.getAttribute('src');
    document.querySelector('.big-img').src = src;
  });
});


document.querySelectorAll('.small-img1').forEach(image_index => {
  image_index.addEventListener('click', () => {
    var src = image_index.getAttribute('src');
    document.querySelector('.big-img1').src = src;
  });
});

document.querySelectorAll('.small-img2').forEach(image_index => {
  image_index.addEventListener('click', () => {
    var src = image_index.getAttribute('src');
    document.querySelector('.big-img2').src = src;
  });
});