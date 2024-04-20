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
    let button = document.getElementById("navButton");
    if (button.getAttribute("src") === "img/menu.png") {
        button.setAttribute("src", "img/close.png");
    }else{
        button.setAttribute("src", "img/menu.png");
    }
    let aside = document.getElementById("products");
    let nav = document.querySelector("nav");
    aside.classList.toggle("relative");
    nav.classList.toggle("nav");
});