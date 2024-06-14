const botoes= document.querySelectorAll(".botao");
const conteudo= document.querySelectorAll(".aba-conteudo");
const contador= document.querySelectorAll(".contador");
const tempoObjetivo1= new Date(2024,11,17,10,50,0);
const tempoObjetivo2= new Date(2024,11,20,11,50,0);
const tempoObjetivo3= new Date(2024,10,20,11,00,0);
const tempoObjetivo4= new Date(2024,9,17,10,50,0);

for(let i = 0 ; i <botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j <botoes.length ; j++){
botoes[j].classList.remove("ativo")
conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
 contador[0].textContent="Olá"
    }

}