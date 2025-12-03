

 let diametro=prompt("Ingrese un diámetro de la circunferencia")
 radio=diametro/2;

area=Math.PI*Math.pow(radio,2);
//mensaje en consola
console.log(area);
window.alert(`El valor del área para la circunferencia de diametro: ${diametro} es igual a ${area}`);

resultado=document.getElementById("result");
resultado.innerHTML=`El valor del área para la circunferencia de diámetro ${diametro} es igual a ${area}`;