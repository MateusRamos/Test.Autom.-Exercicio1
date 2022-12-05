import Vaium from "./vaium";

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

})
