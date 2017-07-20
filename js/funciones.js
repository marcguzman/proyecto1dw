(Function (){
 
 var actualizarhora= function (){
    reloj = new date(),
        horas = reloj.getHours(),
        minutos = reloj.getMinutes(),
        segundos = reloj.getSeconds();

var phoras = document.getElementById('horas'),
        pminutos = document.getElementById('minutos'),
        psegundos = document.getElementById('segundos');
    
    phoras.textContent=horas;
    pminutos.textContent=minutos;
    psegundos.textContent=segundos;
    
    phoras.textContent=horas;
    pminutos.textContent=minutos;
    psegundos.textContent=segundos;   
};
actualizarhora();
var intervalo=setInterval(actualizarhora,1000)

 }())