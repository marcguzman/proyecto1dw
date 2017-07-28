
function fncSumar(){
    caja=document.forms["sumar"].elements;
    var numero1 = Number(caja["numero1"].value);
    var numero2 = Number(caja["numero2"].value);
    resultado=numero1+numero2;
    if(!isNaN(resultado)){
        caja["resultado"].value=numero1+numero2;
    }
}


function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
var mensaje = confirm("¿Te gusta el curso de Desarrollo Web?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Que bueno que te gusta!!!");
}
//Detectamos si el usuario denegó el mensaje
else {
alert(":( ");
}
}

function myFunction() {    
    var str = document.getElementById("texto").value;
    var res = str.split("");
    document.getElementById("demo").innerHTML = res;
}