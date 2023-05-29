// Бургер меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
	iconMenu.addEventListener('click', () =>{
		iconMenu.classList.toggle('active')
		iconMenu.style.position = 'fixed'
		menuBody.classList.toggle('active')
		document.body.classList.toggle('lock')

		if (iconMenu.style.position == 'fixed') {
			iconMenu.style.position = 'relative'
		}
	})
}

// Закрытие Бургер меню при нажатии на ссылки в шапке
const listMenu = document.querySelectorAll('.menu__link');
listMenu.forEach((item, index) => {
	item.addEventListener('click', () =>{
		if(iconMenu.classList.contains('active')){
			iconMenu.classList.remove('active')
			iconMenu.style.position = 'relative'
			menuBody.classList.remove('active')
			document.body.classList.remove('lock')			
		}
	})
})

const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		// удалим у кнопки класс btn-up_hide
		this.el.style.opacity = '1'
	},
	hide() {
		// добавим к кнопке класс btn-up_hide
		this.el.style.opacity = '0'
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 400 ? this.show() : this.hide();
		});
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').onclick = () => {
			// переместим в начало страницы
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();