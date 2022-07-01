// const heading = document.getElementById('heading');
// console.log(heading)

// const heading =document.getElementsByTagName('h1');
// console.log(heading)

// const heading = document.getElementsByClassName('heading');
// console.log(heading);

// const heading = document.querySelector('#heading');
// console.log(heading);

//traverse dom
// const heading =document.querySelector('.heading');
// const parent =heading.parentNode;
// console.log(heading); 

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);

// const subheading = document.querySelector('h3');
// console.log(subheading.previousElementSibling);

//manipulation

//  const heading =document.querySelector('.heading');
//  heading.innerHTML='Web dev is awesome';
//  heading.style.color='red';
//  heading.style.fontSize='100px';
//  heading.classList.add('title');
// heading.classList.remove('heading');

// //create elements
// const heading=document.createElement('h1');
// heading.innerHTML='javascript is awesome';
// heading.classList.add('title');
// const parent= document.querySelector('.parent');
// parent.appendChild(heading);


// const subheading=document.createElement('h1');
// subheading.innerHTML='wed is awesome';
// heading.insertAdjacentElement('beforebegin', subheading);
// console.log(heading);


//dom Events

// const button=document.querySelector('#btn');
// const heading=document.querySelector('#heading');

// button.addEventListener('click', function(event){
//     heading.style.color='purple';
//     heading.style.fontSize='60px';
//     console.log('button clicked', event);
// });

// const bulbSwitch=document.querySelector('#bulbSwitch');
// const bulb=document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', function(){
//     console.log(bulb.src);
//     if(bulb.src.match('off')){
//         bulb.src='./onbulb.png';
//         bulbSwitch.innerHTML='Turn off';
//     } else {
//         bulb.src='./offbulb.png';
//         bulbSwitch.innerHTML='Turn on';
//     }

// });

// const root = document.querySelector('#root');
// const button = document.querySelector('button');

// function createitem(){
//     const card=document.createElement('div');
//     card.classist.add('card');

//     const photo=document.createElement('img');
//     photo.src=item.thumbnailUrl;
//     const title= document.createElement('h4');
//     title.innerHTML=item.title;
//     card.appendChild(photo);
//     card.appendChild(title);
//     root.appendChild(card);
// }


// function dispalyImages(items) {
//     photos.forEach(function(item){
//     createitem(photos);
// })


// }
// button.addEventListener("click", function(){

//     fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//         .then(res => res.json())
//         .then((items) => {
//             dispalyImages();
//         })

// })
// function dispalyImages(items) {
//     console.log(items);
// }

//ecmascript

// var productName='laptop'

// var age= 18;
// if(age>=18){
//     var driving=true;
// }

// console.log(driving);

// function regsiter(){
//     var useranme='kausain';
//     var password='secret';
// }

// console.log(username);


// var product ='laptop';
// var product ='mobile';

// console.log(product)

element=document.getElementById('header').innerText;

console.log(element);