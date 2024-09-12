console.log("Project onWave initialized");

const slides = document.querySelectorAll('.banner-card')
const bullets = document.querySelector('.banner-bullets')
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


let prev = slides.length - 1;
let active = 0;
let next = 1;

for (let i = 0; i < slides.length; i++) {
    const element = document.createElement('div'); 
    element.classList.add("banner-bullet");
    bullets.appendChild(element); 
}

bullets.children[active].classList.add('active')

function startSlide() {
    prev = generate(prev);
    active = generate(active);
    next = generate(next);

    slides.forEach(slide => slide.classList.remove('prev', 'active', 'next'));
    
    slides[prev].classList.add('prev');
    slides[active].classList.add('active');
    slides[next].classList.add('next');

    for (let item of bullets.children) {
        item.classList.remove('active');
    }

    bullets.children[active].classList.add('active');
}

function generate(num){
    num++;
    if(num > slides.length -1) num = 0;
    return num
}


setInterval(startSlide, 3000);


// jQuery

// $('body').on('touchstart', function(e) {
//     e.passive = true;
//   });
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

