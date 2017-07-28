
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



function Fibo (){
var Arreglo,text;
	Arreglo = []
	
final = document.getElementById("texto").value	
var i=0;
	var a1=0,a2=0;
	var fb=0;
	for (i=0;i<final;i++) { 
		if (i==1)
			{a1=1
			a2=0
			fb=a1+a2}
		else
			{fb = a2 + a1;	
			 a2=a1
			 a1=fb;
			 }
		
		Arreglo.push(fb);
	//	document.writeln(fb);
		
	}
    
	text = "<ul>";
	for (i = 0; i < Arreglo.length; i++) {
    text += "<li>" + Arreglo[i] + "</li>";
	}
	text += "</ul>";
document.getElementById("TX").innerHTML = text;
	
}
