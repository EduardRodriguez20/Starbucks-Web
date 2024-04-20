const title = document.getElementById('title');
const description = document.getElementById('description');

function changeProducts(img) {
    let id = img.getAttribute('id');
    let contains = document.getElementsByClassName("contain");
    for (let i = 0; i < contains.length; i++) {
        contains[i].classList.add("hidden");
    }
    let products = document.getElementsByClassName(id);
    for (let i = 0; i < products.length; i++) {
        products[i].classList.remove("hidden");
    }
}