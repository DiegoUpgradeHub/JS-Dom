//**Iteración #1: Interacción con el DOM**
//Dado el siguiente HTML: ** que está en el otro documento **
/*
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/

console.log('Punto 1.1: ', document.querySelector('.showme'));
console.log('Punto 1.2: ', document.querySelector('h1, #pillado'));
console.log('Punto 1.3: ', document.querySelectorAll('p'));
console.log('Punto 1.4: ', document.querySelectorAll('.pokemon'));
console.log('Punto 1.5: ', document.querySelectorAll('[data-function*="testMe"]'));
//console.log('Punto 1.6: ', document.querySelector('[data-function*="testMe"]'));
//Punto 6 es necesario almacenarlo en una variable antes con el fin de poder acceder dentro del array.
showThirdCharacter = document.querySelectorAll('[data-function*="testMe"]');
console.log('Punto 1.6: ', showThirdCharacter[2]);

//No es de buena práctica consologear directamente el querySelector. Es mejor almacenar en variable y luego consologear.



