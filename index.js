// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');
i;
for (i = 0; i < close.length; i++) {
    let closeButtons = close[i];
    closeButtons.addEventListener('click', function () {
        const li = closeButtons.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement('li');
    const input = (document.getElementById('myInput'));
    if (!input)
        return;
    let inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        const ul = document.getElementById('myUL');
        if (ul) {
            ul.appendChild(li);
        }
    }
    inputValue = '';
    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener('click', function () {
        const li = span.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
}
const addBtn = document.querySelector('.addBtn');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', () => {
    newElement();
});
export {};
