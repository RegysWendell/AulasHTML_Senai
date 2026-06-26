function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;
    
    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));

function calculoImposto(){
    let precoProduto
    let imposto1 = 0.2
    let imposto2 = 0.9
    
    valorInicial = (valorInicial * 0.2) + valorInicial
    

    if (precoProduto<50){
        precoImposto1 = precoProduto + (precoProduto * 0.2)
    }
    else {
        precoImposto1 = ((precoProduto + (precoProduto * 0.2)+())
       let resultado =  ((precoProduto*imposto1)+precoProduto*(imposto2))
    
    }

    let resultado =

    /**
     * estrutura if
     * 
     * if (condição) {
     *  execução verdadeira
     * } else {
     *  execução falsa
     * }
     */
    


}
   


}

/*
    Hitórico de função utilizada
    Função: soma

    Histórico de números digitados
    Ex -> Primeiro numero: 10, SegundoNumero: 10

    Histórico de resultados obtidos:
    Ex -> 20

    apresentado num console.log
    _____________________________________________________________________________

    Nova função de calculo de imposto de importação

    se o produto custar menos que $50 (cinquenta dolares)
    Você vai ter que pagar o valor produto, mais 20%

    se o produto custar mais do que$ 50
    Você vai ter que pagar o valor do produto +20%, depois mais 90% sobre o produto

    Seja salvo num novo objeto, dentro do local storage, seu histórico de compras

    Ex: histórico de calculos matemáticos, e histórico de conversões


    /*