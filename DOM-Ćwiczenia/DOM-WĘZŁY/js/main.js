let list = document.getElementById("list");

// console.log(list);
// console.log(list.childNodes);

// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);

let firstElementChild = list.firstElementChild;
let lastElementChild = list.lastElementChild;

console.log(firstElementChild.parentNode);
console.log(firstElementChild.parentElement);

console.log(firstElementChild.nextSibling); // sibling rodzeństwo :)

console.log(firstElementChild.nextElementSibling); // kolejne rodzeństwo

console.log(lastElementChild.previousSibling);

console.log(lastElementChild.previousElementSibling);

// console.log(list.childElementCount);

// console.log(list); // lista

// console.log(list.childNodes); // dzieci węzły listy
// console.log(list.children); // dzieci elementy listy
// console.log(list.childElementCount); // liczba elementów dzieci

// console.log(list.firstChild); // pierwszy węzeł dziecka
// console.log(list.firstElementChild); // pierwszy element dziecka
// console.log(list.lastChild); // ostatni węzeł dziecka
// console.log(list.lastElementChild); // ostatni element dziecka

// let firstEl = list.firstElementChild;
// let lastEl = list.lastElementChild;

// console.log(firstEl.parentNode); // węzeł rodzica
// console.log(firstEl.parentElement); // element rodzica

// console.log(firstEl.nextSibling); // następny sąsiadujący węzeł
// console.log(firstEl.nextElementSibling); // następny sąsiadujący element

// console.log(lastEl.previousSibling); // poprzedni sąsiadujący węzeł
// console.log(lastEl.previousElementSibling); // poprzedni sąsiadujący element

// console.log(firstElementChild.hasChildNodes()); // czy ma węzły dzieci?
// console.log(firstElementChild.children.length > 0 ? true : false); // czy ma elementy dzieci?
// console.log(firstElementChild.closest("#list")); // najbliższy element wśród przodków pasujący do podanego selektora CSS
