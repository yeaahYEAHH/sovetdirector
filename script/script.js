// Бургер меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
	iconMenu.addEventListener('click', () =>{
		iconMenu.classList.toggle('active')
		iconMenu.style.position = 'fixed'
		menuBody.classList.toggle('active')
		document.body.classList.toggle('lock')
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