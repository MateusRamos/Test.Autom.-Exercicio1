import Calculadora from "./calculadora";

describe('funcionalidade soma', () => {
    test('somar dois números', () => {
        //setup
        const calculadora = new Calculadora();
        //action
        const resultado = calculadora.soma('1+1');
        //expectation
        expect (resultado).toBe(2);
    })

    test('somar dois números', () => {
        //setup
        const sut = new Calculadora();
        //action
        const resultado = sut.soma('2+1');
        //expectation
        expect (resultado).toBe(3);
    })

    test('somar dois números', () => {
        //setup
        const sut = new Calculadora();
        //action
        const resultado = sut.soma('2+2');
        //expectation
        expect (resultado).toBe(4);
    })

})

describe ('funcionalidade divisao', ()=> {
    test('dividir dois numeros', () =>{
       //setup
       const sut = new Calculadora();
       //action
       const resultado = sut.divisao('2/2');
       //expectation
       expect (resultado).toBe(1); 
    })
})