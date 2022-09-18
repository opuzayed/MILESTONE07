const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg'
];
let imgIndex = 0;
setInterval(() => {
    let imgLink = images[imgIndex];
    console.log(imgLink);
imgIndex++;
},1000)