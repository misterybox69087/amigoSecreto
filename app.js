
let amigos = [];

function agregarAmigos(){
    let palabra= document.getElementById('amigo').value;
    if (palabra==''){
        alert("Por favor, inserte un nombre.");
        
    }else{
        amigos.push(palabra)
        console.log("Valor ingresado:", palabra);
        console.log("Lista de amigos:", amigos);
        mostrarAmigo(palabra)
        limpiarCaja()
       
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

function mostrarAmigo(palabra){
    let mostrar=document.getElementById('listaAmigos')
    mostrar.innerHTML+=`<li>${palabra}<li>`
}

function sortearAmigo(){
    

    if (amigos.length==''){
        alert("Por favor, ingrese nombres antes de sortear.")

    }else{
        let sorteo= document.getElementById('resultado');

        let ganador=amigos[Math.floor(Math.random()*amigos.length)]
        console.log(ganador)
        sorteo.innerHTML=(`El amigo secreto sorteado es : ${ganador}`)
    }
}