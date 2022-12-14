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

    vaiumDuploComposto(expressao:string) {

        var parcelas = expressao.split('+');

        let vaiUm = 0;
        let resto = 0;

        for(var cont = 2; cont>0; cont--)
        {

            let numero1 = parseInt(parcelas[0].substr(cont-1,1));
            let numero2 = parseInt(parcelas[1].substr(cont-1,1));

            if((numero1 + numero2 + resto) >= 10)
            {
                vaiUm = vaiUm + 1;
                resto = Math.floor((numero1 + numero2)/10);
            }

        }

        return vaiUm;

    }

    vaiumSemiFinal(expressao:string) {      /*'164+836'*/

        var parcelas = expressao.split('+');

        let vaiUm = 0;
        let resto = 0;
        let cont = 0;

        if(parcelas[0].length > parcelas[1].length)
        {
            cont = parcelas[0].length;
        }
        else
        {
            cont = parcelas[1].length;
        }

        for(cont; cont>0; cont--)
        {

            let numero1 = parseInt(parcelas[0].substr(cont-1,1));
            let numero2 = parseInt(parcelas[1].substr(cont-1,1));

            if((numero1 + numero2 + resto) >= 10)
            {
                vaiUm = vaiUm + 1;
                resto = Math.floor((numero1 + numero2 + resto)/10);
            }

        }

        return vaiUm;

    }

    vaiumFinal(expressao:string) {
        
        var parcelas = expressao.split('+');

        let vaiUm = 0;
        let resto = 0;
        let cont = 0;

        if(parcelas[0].length > parcelas[1].length)
        {
            cont = parcelas[0].length;

            parcelas[1] = String(parcelas[1]).padStart(cont, '0');
        }
        else
        {
            cont = parcelas[1].length;

            parcelas[0] = String(parcelas[0]).padStart(cont, '0');
        }

        for(cont; cont>0; cont--)
        {

            let numero1 = parseInt(parcelas[0].substr(cont-1,1));
            let numero2 = parseInt(parcelas[1].substr(cont-1,1));

            if((numero1 + numero2 + resto) >= 10)
            {
                vaiUm = vaiUm + 1;
                resto = Math.floor((numero1 + numero2 + resto)/10);
            }

        }

        return vaiUm;

    }

} 
export default Vaium;