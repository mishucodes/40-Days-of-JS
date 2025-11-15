let div = document.getElementById("shadowDiv");
let shadowDiv = div.attachShadow({mode: 'open'}); //check the html in chrome...
shadowDiv.innerHTML =
    `<style>p{background-color: maroon}</style>
    <p>I'm kind of like an independent component with my own CSS</p>`;
console.log(shadowDiv); //shadow-root