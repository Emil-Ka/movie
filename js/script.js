/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const form = document.querySelector("form.add"),
      input = form.querySelector(".adding__input"),
      item = document.querySelectorAll(".promo__interactive-item"),
      movieList = document.querySelector(".promo__interactive-list"),
      btn = form.querySelector("button");


document.addEventListener("DOMContentLoaded", () => {
   const sortArr = (arr) => {
      arr.sort();
   };

   const addFilm = (event) => {
      event.preventDefault();
      let newFilm = input.value;
      
      if (newFilm.length > 21) {
         newFilm = `${newFilm.substr(0, 22)}...`;
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      addMovieList();
      form.reset();
   };

   const addMovieList = () => {
      movieList.innerHTML = "";

      movieDB.movies.forEach(item => {
         movieList.innerHTML += `
         <li class="promo__interactive-item">${item}
            <div class="delete"></div>
         </li>
         `;
      });
   };

   form.addEventListener("submit", addFilm);
});