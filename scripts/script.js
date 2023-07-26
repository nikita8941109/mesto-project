// Дорогой ревьюер, не серчай на меня, что так много комментариев в коде. Я плохо понимаю js и хочу более подробно всё описывать для самого себя. Благодарю за понимание! Если нужно - могу всё удалить, я оставлю для себя файл с комментариями.

/* ПЕРЕМЕННЫЕ И КОНСТАНТЫ которые мы ищем на html. Использую querySelector, а не querySelectorAll потому, что нам нужно найти один элемент на странице. А константы здесь потому, что они не меняются позже.*/
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close-button')
const editButton = document.querySelector('.profile__editor-button')
const likeButtons = document.querySelectorAll('.elements__heart')

/* 1. Работа модальных окон Используя константу closeButton и связывая её с обработчиком событий, создаём "клик" и функцию. Но зачем здесь функция... Это я взял из теории. А дальше просто, используя попап удаляем класс с открытием и закрытием его. */
closeButton.addEventListener('click', function () {
	popup.classList.remove('popup_opened')
})

editButton.addEventListener('click', function () {
	popup.classList.add('popup_opened')
})

// 2. Лайк. Для начала.
// 1) Создаём цикл с известным числом повторений for 2) Создаём переменную счётчик. увеличивает значение переменной i на единицу после каждого цикла
// 3) объявим внутри цикл ( Экспереминатльное )
 
for (let i = 0; i <= likeButton.length; i++) {
	let currentButton = likeButton[i];
	currentButton.addEventListener('click', function() {
	  currentButton.classList.toggle('elements__heart_active');
	});
  } 
 
 