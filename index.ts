export {};
// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
	document.getElementsByTagName('LI');
let i;
for (i = 0; i < myNodelist.length; i++) {
	const span: HTMLElement = document.createElement('SPAN');
	const txt: Text = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close: HTMLCollectionOf<Element> =
	document.getElementsByClassName('close');
i;
for (i = 0; i < close.length; i++) {
	let closeButtons: Element = close[i];
	closeButtons.addEventListener('click', function () {
		const li = closeButtons.parentElement;
		if (!!li) {
			li.style.display = 'none';
		}
	});
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
	list.addEventListener(
		'click',
		function (ev) {
			let target: HTMLElement = <HTMLElement>ev.target;
			if (target.tagName === 'LI') {
				target.classList.toggle('checked');
			}
		},
		false
	);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
	const li: HTMLLIElement = document.createElement('li');
	const input: HTMLInputElement = <HTMLInputElement>(
		document.getElementById('myInput')
	);
	if (!input) return;
	let inputValue = input.value;
	const textNode: Text = document.createTextNode(inputValue);
	li.appendChild(textNode);
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		const ul: HTMLElement | null = document.getElementById('myUL');
		if (ul) {
			ul.appendChild(li);
		}
	}
	inputValue = '';

	const span: HTMLElement = document.createElement('SPAN');
	const txt: Text = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	span.addEventListener('click', function () {
		const li: HTMLElement | null = span.parentElement;
		if (!!li) {
			li.style.display = 'none';
		}
	});
}

const addBtn: HTMLElement | null = document.querySelector('.addBtn');

addBtn?.addEventListener('click', () => {
	newElement();
});
