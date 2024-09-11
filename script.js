console.log("Project onWave initialized");

const slides = document.querySelectorAll('.banner-card');
const bullets = document.querySelectorAll('.banner-bullet');
let currentIndex = 0;

// gpt version
// Function to display the slide based on index
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('prev', 'active', 'next');
//         bullets[i].classList.remove('active');

//         if (i === index) {
//             slide.classList.add('active');
//             bullets[i].classList.add('active');
//         } else if (i < index) {
//             slide.classList.add('prev');
//         } else {
//             slide.classList.add('next');
//         }
//     });
// }

// // Function to show the next slide
// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// // Function to show the previous slide
// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

// // Initialize the slider with the first slide
// showSlide(currentIndex);

// // Event listeners for bullets
// bullets.forEach((bullet, index) => {
//     bullet.addEventListener('click', () => {
//         currentIndex = index; // Set the currentIndex to the clicked bullet
//         showSlide(currentIndex); // Show the corresponding slide
//     });
// });

// setInterval(nextSlide, 3000);


// my version

let prev = 0;
let active = 1;
let next = 2;

function startSlide() {
    prev = generate(prev);
    active = generate(active);
    next = generate(next);
    slides.forEach(slide=>slide.classList.remove('prev', 'active', 'next'))
    slides[prev].classList.add('prev');
    slides[active].classList.add('active');
    slides[next].classList.add('next');
    console.log(prev, active, next);
}

function generate(num){
    num++;
    if(num > slides.length -1) num = 0;
    return num
}



setInterval(startSlide, 2000);
