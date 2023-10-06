new Accordion('.accordion-container');


const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тег название слайда {{index}}',
  }

});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('open')
  })
})

const workItem = document.querySelectorAll('.work__item');
const workContent = document.querySelectorAll('.work__content')


for (let item of workItem) {

  item.addEventListener('click', function () {

    for (let element of workContent) {
      element.classList.add('work__hidden')
    }

    const content = document.querySelector('#' + item.dataset.tab);
    content.classList.remove('work__hidden')
  })
}

document.querySelector(".form-btn__open").addEventListener("click", function () {
  document.querySelector(".form__header").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".form__header");
  form.classList.remove("form__active");
  form.querySelector("input").value = "";
  document.querySelector(".form-btn__open").classList.remove("active")
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form__header");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})
