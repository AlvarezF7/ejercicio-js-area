

 let diametro = Number(prompt("Ingrese un diámetro (cm): "));
 radio = diametro/2;

 const area = Math.PI*Math.pow(radio,2);
//mensaje en consola
console.log(area);

window.alert(` Para un diametro de ${diametro}, el área es: ${area.toFixed(2)} cm² `);
document.getElementById("result").textContent =
    (`Para un diametro de ${diametro}, el área es : ${area.toFixed(2)} cm²`);

