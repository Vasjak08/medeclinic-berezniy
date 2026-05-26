// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, bodyLockStatus, bodyLockToggle, FLS } from "@js/common/functions.js"

import './menu.scss'

export function menuInit() {
	document.addEventListener("click", function (e) {
		if (bodyLockStatus && e.target.closest('[data-fls-menu]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute("data-fls-menu-open")
			
		}
	})
}
document.querySelectorAll('.menu__link').forEach(link => {
	link.addEventListener('click', () => {
	  document.querySelector('[data-fls-menu]')?.click();
	});
 });
document.querySelector('[data-fls-menu]') ?
	window.addEventListener('load', menuInit) : null