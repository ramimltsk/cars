const btn1 = document.querySelector(".btn1")

const btn2 = document.querySelector(".btn2")

const mainimage = document.querySelector(".mainimage")

const images = document.querySelectorAll(".imagemain")

const body = document.querySelector("body")





const images2 = ["image1.jpeg", "img2.webp", "img3.webp", "img4.jpg", "img5.webp"]

console.log(images2[0])

let index = 0


btn1.addEventListener("click", () => {

    index = (index - 1 + images2.length) % images2.length;
    body.style.backgroundImage = `url(${images2[index]})`



})

console.log(`first image name is ${images2[0]}`)

let index2 = 0

btn2.addEventListener("click", () => {

    index2 = Math.floor(Math.random() * 5);
    body.style.backgroundImage = `url(${images2[index2]})`



})


// btn1.addEventListener("click", () => {
//     const currentStyle = getComputedStyle(body);
//     const currentBg = currentStyle.backgroundImage;

//     if (currentBg.includes("image1.jpeg")) {
//         body.style.backgroundImage = "url('img2.webp')";
//     } else if (currentBg.includes('img2.webp')) {
//         body.style.backgroundImage = "url('img3.webp')";
//     }
// });


const randomNum = Math.floor(2.5)


console.log(randomNum)