//redondeando al siguiente valor entero desde .5
var precio = Math.round(399.40);
document.write('precio redondeado: ', precio);
document.write('<br>');

//obtiene el valor superior entero
var precio = Math.ceil(390.40);
document.write('precio redondeado: ', precio);
document.write('<br>');

//obtiene el valor inferior entero
var precio = Math.floor(390.40);
document.write('precio redondeado: ', precio);
document.write('<br>');

//calcula el seno del ángulo dado
var seno = Math.sin(45);
document.write('Seno de 45: ', seno);
document.write('<br>');

//calcula el exponencial de un numero
var expo = Math.exp(2);
document.write('Exponencial de 2: ', expo);
document.write('<br>');

//calcular el logaritmo de un numero
var logaritmo = Math.log(10);
document.write('Logaritmo de 10: ', logaritmo);
document.write('<br>');

//valor absoluto de un número
var absoluto = Math.abs(-10);
document.write('V absoluto de -10: ', absoluto);
document.write('<br>');

//calcular el valor máximo de una secuencia
var maximo = Math.max(10,20,500,1,8,31);
document.write('El mayor valor: ', maximo);
document.write('<br>');

//calcular el valor mínimo de una secuencia
var minimo = Math.min(10,20,500,1,8,31);
document.write('El menor valor: ', minimo);
document.write('<br>');

//presenta un valor aletorio
var aleatorio = Math.random();
document.write('El valor aleatorio: ', aleatorio);
document.write('<br>');

//presenta un valor aletorio con rango
var aleatorio = Math.floor(Math.random() * 22) +1;
document.write('El valor aleatorio: ', aleatorio);
document.write('<br>');

//calcular el exponente de un número
var exponente = Math.pow(4, 2);
document.write('Valor de 4 a la 2: ', exponente);
document.write('<br>');