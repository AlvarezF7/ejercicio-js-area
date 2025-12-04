

let diametro = Number(prompt("Ingrese un diámetro (cm): "));
let radio = diametro/2;

let area = Math.PI*Math.pow(radio,2);
 
//mensaje en consola
console.log(area);

window.alert(` Para un diametro de ${diametro}, el área es: ${area.toFixed(2)} cm² `);

const resultado = document.getElementById("result");
resultado.innerHTML =`Para un diametro de ${diametro}, el área es : ${area.toFixed(2)} cm²`;

