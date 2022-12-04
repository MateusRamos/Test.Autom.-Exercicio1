class Calculadora {
    divisao(expressao:string) {
        return(1)
    }

    soma(expressao:string) {
        var parcelas = expressao.split('+');
        let num1 = parseFloat(parcelas[0]);
        let num2 = parseFloat(parcelas[1]);
        return (num1 + num2);
    }
} 
export default Calculadora;