const header = document.querySelector(".container_header");
let scrollPos = 0;
window.addEventListener('scroll', function(){
    if((document.body.getBoundingClientRect()).top > scrollPos){
        header.classList.remove("desactivar");
        header.setAttribute("style","box-shadow: 0 5px 30px -15px rgba(2,12,27,0.7);");
    }else{
        header.classList.add("desactivar");
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
    if(scrollPos === 0){
        header.removeAttribute("style");
    }
});