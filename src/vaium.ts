class Vaium {

    soma(expressao:string) {

        var parcelas = expressao.split('+');
        let numero1 = parseFloat(parcelas[0]);
        let numero2 = parseFloat(parcelas[1]);

        return (numero1 + numero2);
    }

    vaiumSimples(expressao:string) {

        var parcelas = expressao.split('+');
        let numero1 = parseFloat(parcelas[0]);
        let numero2 = parseFloat(parcelas[1]);

        if((numero1 + numero2) >= 10)
        {
            return '01 vai um';
        }
        else
        {
            return '00 vai um';
        }

    }

    
    testeSubstr(expressao:string) {

        var parcelas = expressao.split('+');

        return parcelas[0].substr(0,3);

    }
    
    vaiumDuploSimples(expressao:string) {

        var parcelas = expressao.split('+');

        let vaiUm = 0;

        for(var cont = 0; cont<2; cont++)
        {

            let numero1 = parseInt(parcelas[0].substr(cont,1));
            let numero2 = parseInt(parcelas[1].substr(cont,1));

            if((numero1 + numero2) >= 10)
            {
                vaiUm = vaiUm + 1;
            }
        }

        return vaiUm;

    }

    testeLength(expressao:string) {

        var parcelas = expressao.split('+');

        return parcelas[0].length;

    }

    

} 
export default Vaium;