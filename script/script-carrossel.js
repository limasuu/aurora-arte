var num= 1;                    
setInterval(function(){

    document.getElementById('radio'+num).checked= true; 
                                            
    num++;
    if(num > 5)
        num= 1;

}, 5000);

function attContagemSlide(botao){
    num= botao.id[3];
}