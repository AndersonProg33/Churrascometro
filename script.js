let inputAdulto = document.getElementById("adulto");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let Resultado = document.getElementById("resultado");

function calcular(){
    let adulto = inputAdulto.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalcarne = carnePP(duracao) * adulto + (carnePP(duracao)/2 * criancas);
    let totalcerveja = cervejaPP(duracao) * adulto;
    let totalbebidas = bebidasPP(duracao) * adulto + (bebidasPP(duracao) /2 * criancas);

    Resultado.innerHTML = `<p>${totalcarne} g de carnes</p>`
    Resultado.innerHTML += `<p>${totalcerveja} ml de cerveja</p>`
    Resultado.innerHTML += `<p>${totalbebidas} ml de bebidas</p>`

}
function carnePP(duracao){
    if(duracao >=6){
        return 400;
    }
    else{
        return 200;
    }
}
function cervejaPP(duracao){
    if(duracao >=6){
        return 2000;
    }
    else{
        return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao >=6){
        return 1500;
    }
    else{
        return 100; 
    }
} 
