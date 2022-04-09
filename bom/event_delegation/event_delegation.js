let menu = document.getElementById('menu');
let table = document.getElementById('bagua-table');
let form = document.getElementById('form');
let toggleId = document.querySelector('button[data-toggle-id="subscribe-mail"]')
let grid = document.getElementById('grid');
let tree = document.getElementById('tree');
let tooltip = document.getElementById('tooltip');

let selectedTD;

table.addEventListener('click', function (e) {
	// let target = e.target;

	// while(target != this) {
	// 	if(target.tagName == 'TD') {
	// 		highlight(target);
	// 		return;
	// 	}

	// 	target = target.parentElement;
	// }

	let td = e.target.closest('td');
	if (!td) return;
	if (!table.contains(td)) return;
	highlight(td);
})

form.addEventListener('click', function (e) {
	let counter = e.target.dataset.counter;

	if (counter != undefined) {
		e.target.value++;
	}
})

toggleId.addEventListener('click', function (e) {
	let toggleForm = e.target.dataset.toggleId;
	let formMail = document.getElementById(toggleForm)

	formMail.hidden = !formMail.hidden;
})

grid.addEventListener('click', function (e) {
	if (e.target.tagName != 'TH') return;

	let th = e.target;
	sortGrid(th.cellIndex, th.dataset.type);
})

let lis = tree.querySelectorAll('li');
for (let li of lis) {
	let span = document.createElement('span');
	li.prepend(span);
	span.prepend(span.nextSibling);
}

tree.addEventListener('click', function (e) {
	if (e.target.tagName != 'SPAN') return;

	let toggleUL = e.target.parentElement.querySelector('ul');
	if (!toggleUL) return;
	toggleUL.hidden = !toggleUL.hidden;
})

let tooltipElm;

tooltip.addEventListener('mouseover', function (e) {
	let target = e.target;

	let tooltipHtml = target.dataset.tooltip;
	if (!tooltipHtml) return;

	tooltipElm = document.createElement('div');
	tooltipElm.className = 'tooltip';
	tooltipElm.innerHTML = tooltipHtml;
	document.body.append(tooltipElm);

	let coords = target.getBoundingClientRect();
	let left = coords.left + (target.offsetWidth - tooltipElm.offsetWidth) / 2;
	let top = coords.top - tooltipElm.offsetHeight - 5;
	console.log(top)
	if (left < 0) left = 0;
	if (top < 0) top = coords.top + tooltipElm.offsetHeight + 5;
	tooltipElm.style.left = left + 'px';
	tooltipElm.style.top = top + 'px';
	console.log(tooltipElm.style.top)
})


tooltip.addEventListener('mouseout', function (e) {
	if (tooltipElm) {
		tooltipElm.remove();
		tooltipElm = null;
	}
})

class Menu {
	#element;
	constructor(element) {
		this.#element = element;
	}

	save() {
		console.log('save');
	}

	load() {
		console.log('load');
	}

	search() {
		console.log('search');
	}

	onClick() {
		this.#element.addEventListener('click', function (e) {
			let action = e.target.dataset.action;
			if (action)
				this[action]();
		}.bind(this))
	}
}

let menuEvents = new Menu(menu)
menuEvents.onClick();


function highlight(node) {
	if (selectedTD) {
		selectedTD.classList.remove('highlight');
	}
	selectedTD = node;
	selectedTD.classList.add('highlight');
}

function sortGrid(cellIndex, type) {
	let tbody = grid.querySelector('tbody');
	let rowArrays = Array.from(tbody.rows);

	let compare;

	switch (type) {
		case 'number':
			compare = function (rowA, rowB) {
				return rowA.cells[cellIndex].innerHTML - rowB.cells[cellIndex].innerHTML;
			}
			break;
		case 'string':
			compare = function (rowA, rowB) {
				return rowA.cells[cellIndex].innerHTML > rowB.cells[cellIndex].innerHTML ? 1 : -1;
			}
			break;
	}

	rowArrays.sort(compare);

	tbody.append(...rowArrays);
}

