"use strict";
const switcher = document.querySelector(".btn");
switcher.addEventListener("click",function () {

document.body.classList.toggle("light-theme");
document.body.classList.toggle("dark-theme");

const currentClass = document.body.className;
if(currentClass == "light-theme")
{
    switcher.textContent = "Dark";
}
if(currentClass == "dark-theme")
{
    switcher.textContent = "Light";
}

});




