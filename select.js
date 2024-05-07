let inputArea =document.getElementById("input");
let dropIcon =document.getElementById("dropImg");
let container =document.getElementById("container");
let options = document.querySelectorAll(".options p");

options.forEach((opt) => {
    opt.addEventListener(('click') , () => {
        inputArea.value = opt.innerHTML;
    })
});

dropIcon.addEventListener(('click') , () => {
    container.classList.toggle("visib");
    dropIcon.classList.toggle("rotat");
});

