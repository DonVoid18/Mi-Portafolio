const container_web_loader = document.querySelector(".container_web_loader")
const main_principal = document.querySelector(".app_container");
window.addEventListener("load",function(){
    console.log("Se cargó la página");
    setTimeout(() => {
        container_web_loader.classList.add("animate__backOutUp");
        main_principal.setAttribute("style","display:block")
    }, 2000);
});