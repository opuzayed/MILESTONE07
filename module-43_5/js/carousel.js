const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg'
];
let imgIndex = 0;
let image = document.getElementById('img-carousel');
setInterval(() => {
    
    if(imgIndex === images.length)
    imgIndex = 0;
    let imgLink = images[imgIndex];
    //console.log(imgLink);
    image.setAttribute('src',imgLink);
    imgIndex++;
},1000);
