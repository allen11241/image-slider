import { ImageModule } from "./image-module";

const CIRCLE = 'circle';
const IMAGE = 'image';

function createFrame() {
  const frame = document.createElement('div');
  frame.classList.add('frame');
  frame.setAttribute('id', 'frame');
  for(let i = 0; i < ImageModule.getArrayCount(); i++) {
    const image = document.createElement('img');
    image.setAttribute('id', IMAGE + i);
    image.classList.add('frame-image');
    image.src = ImageModule.getImageAtIndex(i);
    if(i === 0){
      image.classList.add('image-selected');
    }
    frame.appendChild(image);
  }
  return frame;
}

function createContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.appendChild(createFrame());
  container.appendChild(createSlider());
  return container;
}

function createSlider() {
  const slider = document.createElement('div');
  slider.classList.add('slider');
  slider.setAttribute('id', 'slider');
  slider.appendChild(createPreviousButton());
  slider.appendChild(createCircles());
  slider.appendChild(createNextButton());
  return slider;
}

function createCircles() {
  const circleContainer = document.createElement('div');
  circleContainer.setAttribute('id', 'circle-container');
  window.onload = () => {
  for(let i = 0; i < ImageModule.getArrayCount(); i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.setAttribute('id', CIRCLE + i.toString());
    if(i === 0) {
      circle.classList.add('circle-selected');
    }
    circle.addEventListener('click', function (){
      deselectAllCircles();
      circle.classList.add('circle-selected');
      const selectedImage = document.getElementById(IMAGE + i);
      addSelectedClass(selectedImage);
    })
    circleContainer.appendChild(circle);
    }
  }   
  return circleContainer;
}

function deselectAllCircles() {
  const circles = document.getElementsByClassName('circle');
  for (let i = 0; i < circles.length; i++) {
    circles[i].classList.remove('circle-selected');
  }
}

function createPreviousButton() {
  const btnPrevious = document.createElement('img');
  btnPrevious.classList.add('slider-button');
  btnPrevious.setAttribute('id', 'btn-previous');
  btnPrevious.src = './img/nav_previous.svg';
  btnPrevious.addEventListener('click', (function () {

  const nextImage = document.getElementById(IMAGE + ImageModule.getPreviousImage());
  circleHandler(ImageModule.getCurrentPosition());
  addSelectedClass(nextImage);
  }))
  return btnPrevious;
}

function createNextButton() {
  const btnNext = document.createElement('img');
  btnNext.classList.add('slider-button');
  btnNext.setAttribute('id', 'btn-next');
  btnNext.src = './img/nav_next.svg';
  btnNext.addEventListener('click', (function () {
    const nextImage = document.getElementById(IMAGE + ImageModule.getNextImage());
    circleHandler(ImageModule.getCurrentPosition());
    addSelectedClass(nextImage);
    }))
  return btnNext;
}

function initSlideshow() {
  const content = document.getElementById('content')
  content.appendChild(createContainer());
  startImageTimer();
}

function startImageTimer() {
  setInterval(function() {
    let currentPosition = ImageModule.getCurrentPosition();
    circleHandler(currentPosition);
    const selectedImage = document.getElementById(IMAGE + currentPosition);
    ImageModule.addPosition();
    addSelectedClass(selectedImage)
  }, 5000);
}

function addSelectedClass(selectedImage) {
  for(let i = 0; i < ImageModule.getArrayCount(); i++) {
    let image = document.getElementById(IMAGE + i);
    if(image.classList.contains('image-selected')) {
      image.classList.remove('image-selected');
    }
  }
  selectedImage.classList.add('image-selected')
}

function circleHandler(currentPosition) {
  const selectedCircle = document.getElementById(CIRCLE + currentPosition);
  const circles = document.getElementsByClassName('circle');
  for (let i = 0; i < circles.length; i++) {
      circles[i].classList.remove('circle-selected');
  }
  selectedCircle.classList.add('circle-selected');
}

export default  initSlideshow;