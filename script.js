const falas = [

    "Olá! Eu sou a Flora 🌼",

    "Os drones ajudam a economizar água no campo! 💧",

    "A tecnologia torna a agricultura mais eficiente. 🚜",

    "Árvores protegem o solo e os rios. 🌳",

    "O agro sustentável cuida do presente e do futuro. 🌱",

    "Juntos podemos construir um mundo melhor! 💚"

];

let indice = 0;

const flora =
document.getElementById("roboMascote");

const balao =
document.getElementById("txtBalao");

const dica =
document.querySelector(".dica-flora");

/* Mensagem inicial */

window.onload = () => {

    balao.innerText =
    "👆 Clique em mim para conversar!";
};

/* Conversa da Flora */

flora.addEventListener("click", () => {

    /* Esconde a dica depois do primeiro clique */

    if(dica){

        dica.style.display = "none";
    }

    indice++;

    if(indice >= falas.length){

        indice = 0;
    }

    balao.innerText =
    falas[indice];

});

/* Pequena animação extra */

setInterval(() => {

    flora.style.transform =
    "translateY(-25px)";

    setTimeout(() => {

        flora.style.transform =
        "translateY(0px)";

    }, 1000);

}, 4000);
