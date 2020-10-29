
var btn=document.getElementById("calcular");
btn.addEventListener('click',(mostrarResultado));

function mostrarResultado() {
var bolet1= document.getElementById("pase_dia").value;
var bolet2=document.getElementById("pase_completo").value;
var bolet3=document.getElementById("pase_dosdias").value;
 var pases=`<p>${bolet1} Boletos Para el Viernes</p>
 <p>${bolet2} Boletos Para Todos los Dias</p>
 <p>${bolet3} Boletos Para Viernes y Sábado</p>`;
 document.getElementById("lista-productos").innerHTML=pases
 document.getElementById("suma-total").innerHTML= (bolet1 * 30)+(bolet2 * 50)+(bolet3 * 45);
}
