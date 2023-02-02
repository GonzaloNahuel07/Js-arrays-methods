//Estos métodos no mutan al array original, sino que nos devuelven uno nuevo
// --> MAP: iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento.  Esto lo hace sin mutar el arreglo original
// TIP
// Una función callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map

const frutas = ["manzana", "banana", "kiwi"];

const nuevoArray = frutas.map((item) => {
    return item;
})

console.log(nuevoArray);

//Ahora veremos un código reducido

const numeros = [1, 2, 3];
const nuevoArrayNumeros = numeros.map((item) => item);

console.log(nuevoArrayNumeros);


//¿Pero no es lo mismo esto?
const frutas2 = ["🍌", "🍏", "🍓"];
// por referencia (revisar videos anteriores)
const arrayReferencia = frutas2; 
frutas2.push("🍉");
console.log(arrayReferencia);


// construye un nuevo array con los resultados
// esto lo hace sin mutar el arreglo original
const nuevoArray2 = frutas2.map((item) => item);
frutas2.push("🍉");
console.log(nuevoArray);

// Devolver solo el name en un nuevo array
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name);
console.log(names);


// Devolver nuevo array con numeros * 2
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPorDos = numeros2.map((item) => item * 2);
console.log(numerosPorDos);

//--> FILTER: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const usuarios = [
    {uid: 1, name: "Jhon", age: 34},
    {uid: 2, name: "Amy", age: 20},
    {uid: 3, name: "camperCat", age: 10},
];

const mayor = usuarios.filter((usuarios) => usuarios.age > 30);
console.log(mayor);


//Eliminar un usuario por uid
const userFiltrado = usuarios.filter((usuarios) => usuarios.uid !== 2);
console.log(userFiltrado);


//--> FIND: devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

//Buscar usuario por uid:
const amy = usuarios.find((usuarios) => usuarios.uid === 2);
console.log(amy);

//Utilizando destructuring
const {age} = usuarios.find((usuarios) => usuarios.uid === 2);
console.log(age);


//--> SOME: comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada
const existe = usuarios.some((usuarios) => usuarios.uid === 2);
console.log(existe);


//--> FINDINDEX: devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1
const existe2 = usuarios.findIndex((usuarios) => usuarios.uid === 4);
console.log(existe);


//--> SLICE: devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin NO incluido). El array original no se modificará
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const nuevoArr = arr.slice(1, 3);
console.log(nuevoArr);


//--> CONCAT: se usa para unir dos o más arryas. Este método no cambia los arrays existentes, sino que devuelve un nuevo array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);
console.log(array3);


//--> SPREAD SYNTAX: permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son separados
const array4 = [...array1, ...array2];
console.log(array4);


//--> REDUCE: ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
const contNumeros = [1, 2, 3, 4, 5]; 
const sumaTodos = contNumeros.reduce((acc, valorActual) => acc + valorActual);
console.log(sumaTodos);


//Aplanar matrices anidadas #01:
const matriz = [
    [0, 1], // 0
    [2, 3], // 1
    [4, 5], // 3
];

const soloNumeros = matriz.reduce(
    (acc, current) => acc.concat(current)
)

console.log(matriz);
console.log(soloNumeros);

// Aplanar matrices anidadas #02:
const flatSingle = [].concat(...matriz);
console.log(flatSingle);


// Aplanar matrices anidadas #03:
const flatSingle2 = matriz.flat();
console.log(flatSingle2);


const arrayMatriz = [1, 2, [3, 4, [5, 6]]];

const arrayPlano = arrayMatriz.flat(2);
console.log(arrayPlano);


//--> SPLIT: divide un objeto de tipo string en un array, mediante un separador
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);


//--> JOIN: une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
const nuevamenteString = arrayMeses.join(",");
console.log(nuevamenteString);


//SEPARDOR: es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido en una cadena si es necesario. Si este omite, los elementos del arreglo son separados con una coma (",").