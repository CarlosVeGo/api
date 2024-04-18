//input, butón, ingresar un número, devolver la imagen que está asociada ese número.

fetch("https://rickandmortyapi.com/api/character/2").then((data)=>data.json().then((res)=>{
    console.log(res)
    console.log(res.image)
    console.log(res.name)
}))

//Forma de realiza una petición (toda petición return a promise), .then (para controlar las promesas)
// axios no es nativo
//axios("https://rickandmortyapi.com/api/character/2").then((pelox)=>console.log(pelox))
