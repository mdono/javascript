let genero, edad;
genero=prompt('Ingresar el género');
edad=prompt('Ingresar la edad');

//vacío: null -- "" -- ''
//if(condicional){verdadero}else{falso}
//if(condicional){verdadero}else if(expresion){v}else{f}//si anidado

if (genero=="" && edad=="" || genero==null & edad==null 
    || genero=='null' & edad=='null') {
    document.write('campos de edad y género vacíos');
    //if (expresion){}else{}
} else if (edad<18) {
    document.write('es menor de edad, no puede ingresar');
} else if (edad>=18 & genero=="" | genero==null | genero=='null') {
    document.write('es mayor de edad, pero carece de género');
} else if (edad>=18 & genero=='m') {
    document.write('puede ingresar, costo Q.100.00');
} else if (edad>=18 & genero=='f') {
    document.write('puede ingresar, costo Q.75.00 más bebida');
} else if (edad>=18 & genero!='f' | genero!='m') {
    document.write('es mayor de edad, pero con género incorrecto');
} else if (isNaN(edad)) {
    document.write('el dato de edad debe de ser numérico');
} else {
    document.write('continuar');
}

/*
if (genero=="m") {
    document.write(genero);
    document.write('<br>');
    document.write(edad);
} else {
    document.write('adiós');
    document.write('<br>');
    //document.write('genial');
}*/

//document.write(genero);
document.write('<br>');