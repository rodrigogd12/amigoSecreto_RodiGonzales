

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar nombres
let amigos = [];

// funcion para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

//validar que el campo no este vacio
if(nombreAmigo === ""){
    alert("El campo no puede estar vacio, ingrese un nombre");
    return;
}

//que no se repitan nombres
if(amigos.includes(nombreAmigo)){
    alert(`Nombre repetido ${nombreAmigo} agregue otro nombre`);
    return;
}

//Agregar nombre
amigos.push(nombreAmigo);

//Borrar lista de amigos
inputAmigo.value = "";

//Actualizar lista
actualizarLista();

}

//Funcion amigos en interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

//limpiar contenido actual de la lista
listaAmigos.innerHTML = "";

//recorrer lista con un for
for(let i = 0; i < amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
}
}

//Funcion para seleccionar amigo de manera aleatoria
function sortearAmigo(){
//Validar sddi hay amigos 
    if(amigos.length === 0){
        alert('No hay amigos, Agrega un amigo al menosd');
        return;
}

//Genera el amigo aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length);

//obtener el amigo aleatorio
const amigoSorteado = amigos[indiceAleatorio];

//Mosdtrar resultado
const resultado = document.getElementById('resultado');
resultado.innerHTML = `El amigo que salio es: <strong>${amigoSorteado}</strong>`

}