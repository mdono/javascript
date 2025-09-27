//let numeros=[];
let numeros=[16,20,31,12,3,4.5,-10];
            //0,1,  2, 3,4,  5,  6

document.write('Elementos: ', numeros);
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
document.write('Ultimo elemento: ', numeros[6]);
document.write('<br>');

numeros[0]=15;
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
document.write('<br> ***************');
document.write('<br>');

let frutas=['manzanas','peras','naranjas','mangos','tunas'];
document.write('Frutas: ', frutas);
document.write('<br>');

//funciones de los arreglos
document.write('Cantidad de números: ', numeros.length);
document.write('<br>');
document.write('Cantidad de frutas: ', frutas.length);
document.write('<br>');

//ver el último elemento
document.write('Ultimo elemento 1: ', numeros[6]);
document.write('<br>');
document.write('Ultimo elemento 2: ', numeros[numeros.length-1]);
document.write('<br>');

//arreglos de tipo texto
document.write('En string: ', numeros.toString());
document.write('<br>');

//unir tipos de arreglos
let letras=['a','b','c'];
let numeros2=[1,2,3];
document.write('Números letras: ', letras.concat(numeros2));
document.write('<br>');

//borrar último elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar último elemento
numeros.push(-10);
document.write(numeros);
document.write('<br>');

//eleminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//agregar primer elemento
numeros.unshift(15);
document.write(numeros);
document.write('<br>');

//eliminar elementos a partir de un punto
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');

//copiar un arreglo
let cantidades=[100,200,400,600,800];
let copia=cantidades.slice(1,4);
document.write('Arreglo copiado: ', copia);
document.write('<br>');

//ordenar el arreglo
let objetos=['carro','botella','planeta','zorro'];
document.write(objetos);
document.write('<br>');
document.write(objetos.sort());
document.write('<br>');

//invertir el arreglo
document.write(objetos.reverse());
document.write('<br>');