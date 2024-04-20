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

document.getElementById("navButton").addEventListener("click", () => {
    let aside = document.getElementById("products");
    let nav = document.getElementsByTagName("nav");
    nav[0].classList.toggle("nav");
    aside.classList.toggle("relative");
});