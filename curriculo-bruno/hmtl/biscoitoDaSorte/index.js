const screen1 = document.querySelector(".card-1");
const screen2 = document.querySelector(".card-2");
const closedCookie = document.querySelector(".card-1 img");

let phrases = [
    "Você é mais forte do que imagina",
    "Se você pode sonhar, pode realizar",
    "Sorte é estar pronto quando a oportunidade vem!",
    "Acredite você tem forças para chegar onde quiser, basta querer!",
    "Não tenha medo de sonhar, tenha medo de não acreditar em você!",
    "A motivação não acontece por acaso. Como tudo na vida você tem que batalhar para alcançar.",
    "A única coisa impossível é aquilo que você não tenta",
    "Agradeça pelo hoje sem nunca desistir do amanhã",
    "Não limite os seus desafios. Desafie os seus limites",
    "A determinação é a chave do sucesso"
]
let randomMessage = Math.round(Math.random() * phrases.length);

screen2.querySelector("button").addEventListener("click", bntReset);
closedCookie.addEventListener("click", openCookie);

function toggleScreens() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
function newMessage() {
    screen2.querySelector("p").innerText = phrases[randomMessage]
}
function openCookie() {
    toggleScreens();
    newMessage();
}

function bntReset() {
    toggleScreens();
     randomMessage = Math.round(Math.random() * phrases.length);

}