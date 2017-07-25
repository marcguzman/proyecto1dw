
function fncSumar(){
    caja=document.forms["sumar"].elements;
    var numero1 = Number(caja["numero1"].value);
    var numero2 = Number(caja["numero2"].value);
    resultado=numero1+numero2;
    if(!isNaN(resultado)){
        caja["resultado"].value=numero1+numero2;
    }
}
