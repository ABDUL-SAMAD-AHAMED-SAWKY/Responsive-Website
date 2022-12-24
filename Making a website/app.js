let button = document.querySelector("#menu");
let list = document.querySelector('.list');
button.addEventListener("click", event => {
    list.classList.toggle('show')
})
