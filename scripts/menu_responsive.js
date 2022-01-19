// constantes
const boton_menu = document.querySelector(".button_menu_responsive");
const navegation_menu = document.querySelector(".navegation_header");
const menu_responsive = document.querySelector(".menu_web");
const container_main = document.querySelector(".container_main");
const header = document.querySelector(".container_header");

// variables
let state_button = true;
let scrollPos = 0;

// eventos
boton_menu.addEventListener("click",function(){
    if(state_button){
        state_button = false;
        container_main.classList.add("blur");
        navegation_menu.classList.add("navegation_header_responsive");
        menu_responsive.classList.add("menu_web_responsive");
        document.body.setAttribute("style","overflow: hidden;");
        
    }else{
        state_button = true;
        container_main.classList.remove("blur");
        navegation_menu.classList.remove("navegation_header_responsive");
        menu_responsive.classList.remove("menu_web_responsive");
        document.body.removeAttribute("style");
    }
    
});


window.addEventListener('scroll', function(){
    if((document.body.getBoundingClientRect()).top > scrollPos){
        header.classList.remove("desactivar");
        header.setAttribute("style","box-shadow: 0 5px 30px -15px rgba(2,12,27,0.7);");
    }else{
        if(state_button){
            header.classList.add("desactivar");
        }
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
    if(scrollPos === 0){
        header.removeAttribute("style");
    }
});