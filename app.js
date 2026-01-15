'use srtict';
const switcher = document.querySelector(".btn");
switcher.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');

    document.body.classList.toggle('dark-theme');   

    const className = document.body.className;
    if(className == "light-theme")
    {
        this.textcontent = "Dark";
    }
    else
    {
        this.textcontent = "Light";
    }
    console.log("настоящее название класса: " + className);
});
