const iconeCompactoBotao= document.querySelector("#icone-menu-compacto");

function abrirMenuCompacto(evento){
    if(evento.type === 'touchstart')
        evento.preventDefault();

    var nav= document.querySelector("nav");
    nav.classList.toggle("lista-menu-compacto");
    
    const body= document.querySelector("body");
    body.classList.toggle("desabilita-scroll");
    
    iconeCompactoBotao.classList.toggle("fa-bars");
    iconeCompactoBotao.classList.toggle("fa-x");
}

iconeCompactoBotao.addEventListener('click', abrirMenuCompacto);
iconeCompactoBotao.addEventListener('touchstart', abrirMenuCompacto);