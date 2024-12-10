/*Navigation*/

const menuIcon = document.querySelector('.menu-icon');
const container = document.querySelector('.container');


menuIcon.addEventListener('click', () => {
  container.classList.toggle('navigate');
});
/*Navigation*/


/*Testimonial*/

const slider =document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const arrowleft = document.querySelector('.controls i:nth-child(1)');
const arrowright = document.querySelector('.controls i:nth-child(2)');

const dotsWrapper = document.querySelector('.dots')
const dots = document.querySelectorAll('.dots span')

let slideIndex = 0;

const setIndex = () => {
   document.querySelector(".dots .active").classList.remove("active");
   slider.style.transform = `translateX(${slideIndex * -20}%)`;
}

dots.forEach((dot, index) => { 
  dot.addEventListener('click', () => { 
    slideIndex = index;
    dot.classList.add('active');
    setIndex();
  })
})

arrowleft.addEventListener('click', () => { 
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0
  setIndex();  
  dotsWrapper.children[slideIndex].classList.add('active')
})
arrowright.addEventListener('click', () => { 
  slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
  setIndex()
  dotsWrapper.children[slideIndex].classList.add("active");
  
})
/*Testimonial*/