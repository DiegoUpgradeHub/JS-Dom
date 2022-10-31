//Iteración #2: Modificando el DOM

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement('div');
div1.innerText = 'Punto 1';
document.body.appendChild(div1);
console.log('Punto 1: ', div1);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div');
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Punto 2';
div2.appendChild(newParagraph);
document.body.appendChild(div2);
console.log('Punto 2: ', div2);



//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement('div');
for (let i = 1; i < 7; i++) {
    div3.innerHTML += '<p>' + 'Punto 3. Párrafo nº'+ i +'</p>';
}
document.body.appendChild(div3);

console.log('Punto 3: ', div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const div4 = document.createElement('div');
const newParagraph2 = document.createElement('p');
const newText = document.createTextNode('Punto 4. Soy dinámico!');

newParagraph2.appendChild(newText);
div4.appendChild(newParagraph2);
document.body.appendChild(div4);

console.log('Punto 4: ', div4);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector('h2.fn-insert-here');
h2$$.innerHTML = 'Punto 5. Wubba Lubba dub dub';
console.log('Punto 5: ', h2$$);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
let apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const appsList = document.createElement('ul');
for (i = 0; i < apps.length; i++) {
    appsList.innerHTML += '<li>' + 'Punto 6. ' + apps[i] + '</li>';
}
document.body.appendChild(appsList);
console.log('Punto 6: ', appsList);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
/*
const removeNodes = document.querySelector('.fn-remove-me');
removeNodes.remove();
const removeNodes2 = document.querySelector('.fn-remove-me');
removeNodes2.remove();
const removeNodes3 = document.querySelector('.fn-remove-me');
removeNodes3.remove();
const removeNodes4 = document.querySelector('.fn-remove-me');
removeNodes4.remove();
*/

const removeNodes = document.querySelectorAll('.fn-remove-me');
for (i = 0; i < removeNodes.length; i++) {
    removeNodes[i].remove();
}


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const newParagraph3 = document.createElement('p');
selectDivs = document.querySelectorAll('div');
newParagraph3.innerHTML = 'Voy en medio!';
document.body.insertBefore(newParagraph3, selectDivs[1]);


//.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allDiv = document.querySelectorAll('div.fn-insert-here');

for (i = 0; i < allDiv.length; i++) {
    const newParagraph4 = document.createElement('p');
    newParagraph4.innerText = 'Voy dentro!';
    allDiv[i].appendChild(newParagraph4);
}



