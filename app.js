
// Almacenar nombres
let amigos = [];

// Agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

// Campo no este vacio
if(nombreAmigo === ""){
    alert("El campo no puede estar vacio, ingrese un nombre");
    return;
}

// No se repitan nombres
if(amigos.includes(nombreAmigo)){
    alert(`Nombre repetido ${nombreAmigo} agregue otro nombre`);
    return;
}

// Agregar el nombre
amigos.push(nombreAmigo);

// Borrar lista de los amigos
inputAmigo.value = "";

// Actualizar lista de amigos
actualizarLista();

}

// Amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

// limpiar contenido de la lista de amigos
listaAmigos.innerHTML = "";

// Un for para recorrer lista de amigos
for(let i = 0; i < amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
}
}

// Seleccionar amigo de manera aleatoria
function sortearAmigo(){
// Validar si hay amigos 
    if(amigos.length === 0){
        alert('No hay amigos, Agrega un amigo al menosd');
        return;
}

// Generar amigo aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length);

// obtener el amigo aleatorio
const amigoSorteado = amigos[indiceAleatorio];

// Mosdtrar resultado
const resultado = document.getElementById('resultado');
resultado.innerHTML = `El amigo que salio es: <strong>${amigoSorteado}</strong>`

}
