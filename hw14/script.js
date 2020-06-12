let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let num = document.querySelectorAll(".num");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function plusPlus(event) {
    event.stopPropagation()
    num[i].innerHTML = ++num[i].innerHTML;
  })
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function minusMinus(event) {
    event.stopPropagation()
    num[i].innerHTML = --num[i].innerHTML;
  })
}


let wrappers = document.querySelector(".wrappers");
function changeColor(event) {
  let el = event.target.closest(".wrapper");
  if (!el.classList.contains("green") && !el.classList.contains("yellow") && !el.classList.contains("pink")) {
    el.classList.add("green");
  } else if (el.classList.contains("green")) {
    el.classList.remove("green");
    el.classList.add("yellow");
  } else if (el.classList.contains("yellow")) {
    el.classList.remove("yellow");
    el.classList.add("pink");
  } else if (el.classList.contains("pink")) {
    el.classList.remove("pink");
    el.classList.add("green");
  }
}

let ul = document.querySelector(".ul");

function changeColorBg(event) {
  let el = document.querySelector(".ul .bg");
  if (el) { el.classList.remove("bg") };
  event.target.classList.add("bg")
}


wrappers.addEventListener("click", changeColor)
ul.addEventListener('click', changeColorBg)