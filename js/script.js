const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar items insurance

const parameters = new URLSearchParams(location.search);

function ativarProduto(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
  console.log(element);
}

parameters.forEach(ativarProduto);

// FAQ

const faq = document.querySelectorAll(".faq button");

function ativarQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("ativa");
  const ativa = answer.classList.contains("ativa");
  question.setAttribute("aria-expanded", ativa);
}

function eventosFaq(question) {
  question.addEventListener("click", ativarQuestion);
}
faq.forEach(eventosFaq);

// GALERIA BICICLETAS

const galery = document.querySelectorAll(".bike-int-img img");
const galeryContainer = document.querySelector(".bike-int-img");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galeryContainer.prepend(img);
  }
}

function eventsGalery(img) {
  img.addEventListener("click", changeImage);
}

galery.forEach(eventsGalery);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}

