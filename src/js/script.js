document.addEventListener("DOMContentLoaded", readyDocument);

/**
 * Основное тело кода
 */
function readyDocument() {
	// получаю все пункты меню
	const menu_items = document.querySelectorAll('.menu__item');

	for (let item of menu_items) {
		// вешаем событие клика на каждый пункт меню
		item.addEventListener('click', function (event) {
			// проверяем, был ли клик на заголовок меню
			const is_header = (event.target.closest('.menu__item-header'));
			// проверяем, был ли клик на крестик
			const is_cross = (event.target.closest('.menu__item-cross'));

			// если крестик, закрываем пункт меню
			if (is_cross) {
				let menu_item = is_cross.closest('.menu__item');
				menu_item.classList.remove('menu__item_open');
			}

			// если заголовок меню, проверяем, активен ли пункт меню
			if (is_header) {
				let menu_item = is_header.closest('.menu__item');

				if(menu_item.classList.contains('menu__item_open')){
					// если пункт меню был открыт, закрываем его
					menu_item.classList.remove('menu__item_open');
				} else {
					// если пункт меню закрыт,
					// закрываем все соседние пункты меню,
					// затем открываем нажатий
					for (let item of menu_items) {
						item.classList.remove('menu__item_open');
					}
					menu_item.classList.add('menu__item_open');
				}
			}
		});
	}
}