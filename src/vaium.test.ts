import Vaium from "./vaium";

/*
VAI UM

As crianças aprendem a adicionar multi-dígitos da direita para a esquerda, um dígito por vez. Muitas acham o "vai um", operação aonde o 1 é carregado para a 
posição seguinte, um desafio significativo. Seu trabalho é dado dois números inteiros positivos, contar o número de operações de "vai um" para adição. 
Entrada: dois valores inteiros positivos. 
Retorno: quantidade de "vai um" da soma. 
Exemplos: 
Entrada: 123 456 Retorno: 0 "vai um"; 
Entrada: 555 555 Retorno: 3 "vai um"; 
Entrada: 123 594 Retorno: 1 "vai um"; 

Adaptado a partir do problema "Carry" do livro Programming Challenges - The Programming Contest Training Manual_Steven S. Skiena, Miguel A. Revilla (Springer 2003)*/

describe('funcionalidade soma', () => {

    test('soma 2 numeros', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.soma('2+2');
        //expectation
        expect (resultado).toBe(4);
    })

    test('vai um, com 1 casa decimal', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.vaiumSimples('7+3');
        //exprectation
        expect (resultado).toBe('01 vai um');
    })

    test('testando a funçãa substr', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.testeSubstr('1948+1652');
        //exprectation
        expect (resultado).toBe('194');
    })


    test('vai um, com 2 casas decimais simples', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.vaiumDuploSimples('17+93')
        //expectation
        expect (resultado).toBe(2);
    })

    test('teste para saber se pegou o strlength', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.testeLength('1562+1985');
        //expectation
        expect (resultado).toBe(4);
    })

    test('vai um, com 2 casas decimais composto', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.vaiumDuploComposto('16+84');
        //expectation
        expect (resultado).toBe(2);
    })

    test('vai um, com n casas decimais nos 2 termos', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.vaiumSemiFinal('157+943');
        //expectation
        expect (resultado).toBe(3);
    })

    test('vai um, com n e m casas decimais', () => {
        //setup
        const sut = new Vaium();
        //action
        const resultado = sut.vaiumFinal('99999+1');
        //expectation
        expect (resultado).toBe(5);
    })

})
