let nombre, edad;
nombre=prompt('Ingrese su nombre');
edad=prompt('Ingrese su edad');
//parser -- cast
//edad=parseInt(edad);//parser integer

//if(condición){verdadero}else{falso}

if (edad>=18) {
    document.write('Bienvenido! ', nombre);
} else {
    //document.write(nombre, ' eres menor de edad.');
    if (edad<18) {
        document.write(nombre, ' eres menor de edad.');
    } else {
        document.write('No has ingresado datos');
    }
}

/*
if (edad>=18) {
    document.write('Bienvenido! ', nombre);
} else if (edad<18) {
    document.write(nombre, ' eres menor de edad.');
} else {
    document.write('No has ingresado datos');
}
*/

//SET =, COMPARACION ==, IDENTICO ===
//1==='1'
//Ampersand &
//pipe ?
/*
let estatura=nombre;
let color=edad;

if (estatura=='alto' && color=='verde') {
    document.write('todo correcto');
} else {
    document.write('incorrecto');
}*/