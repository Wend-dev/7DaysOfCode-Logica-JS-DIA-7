function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Não é possível dividir por zero.';
    } else {
        return a / b;
    }
}

function calculadora() {
    let continuar = true;

    while (continuar) {
        let operacao = prompt("Escolha uma operação: \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão \n5. Sair");

        if (operacao === '5') {
            alert("Até a próxima!");
            continuar = false;
        } else {
            let num1 = parseFloat(prompt("Digite o primeiro número:"));
            let num2 = parseFloat(prompt("Digite o segundo número:"));

            let resultado;

            switch (operacao) {
                case '1':
                    resultado = somar(num1, num2);
                    break;
                case '2':
                    resultado = subtrair(num1, num2);
                    break;
                case '3':
                    resultado = multiplicar(num1, num2);
                    break;
                case '4':
                    resultado = dividir(num1, num2);
                    break;
                default:
                    alert("Opção inválida. Tente novamente.");
                    continue;
            }

            alert("Resultado: " + resultado);
        }
    }
}

calculadora();
