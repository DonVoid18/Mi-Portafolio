const container_web_loader = document.querySelector(".container_web_loader")
const main_principal = document.querySelector(".app_container");
window.addEventListener("load",function(){
    setTimeout(() => {
        container_web_loader.classList.add("animate__backOutUp");
        main_principal.setAttribute("style","display:block")
    }, 1000);
});