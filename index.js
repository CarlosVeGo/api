const button = document.querySelector(".api");
const input = document.querySelector("input");
const show = document.querySelector(".show");
let urlHtml;
let nombre;

button.addEventListener("click",()=>{
    
    const busqueda = input.value;
    const urlJs = "https://rickandmortyapi.com/api/character/"+busqueda

    fetch(urlJs).then((data)=>data.json().then((res)=>{

        urlHtml = res.image;
        nombre = res.name;
        show.innerHTML=`
        <span>${nombre}</span>
        <img src="${urlHtml}" alt="imagen de ${nombre}">
        `
    }))
    
})