function soma(){
let primeiroNumero = document.getElementById("primeiro-numero").ariaValueMax;
let segundoNumero = document.getElementById("primeiro-numero").ariaValueMax;

let resultado = Number(primeiroNumero) + Number(segundoNumero);

document.getElementById("resultaado").innerText = resultado

}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2)
    console.log("Resultado: " + resultado);
    console.log("---------------------------------");
}



    

/*
    Hitórico de função utilizada
    Função: soma

    Histórico de números digitados
    Ex -> Primeiro numero: 10, SegundoNumero: 10

    Histórico de resultados obtidos:
    Ex -> 20

    apresentado num console.log
    /*