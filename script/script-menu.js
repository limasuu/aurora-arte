const iconeCompactoBotao= document.querySelector("#icone-menu-compacto");
iconeCompactoBotao.addEventListener('click', () => {
    
    var nav= document.querySelector("nav");
    nav.classList.toggle("lista-menu-compacto");

    const body= document.querySelector("body");
    body.classList.toggle("desabilita-scroll");

    iconeCompactoBotao.classList.toggle("fa-bars");
    iconeCompactoBotao.classList.toggle("fa-x");
});