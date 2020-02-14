var opcoes = ['Windows Server', 'Unix', 'Linux', 'Netware', 'Mac OS', 'Outro'];
var sistemas = [0] * 6;



while (true){
	while (true){
        var voto = prompt('escolha seu sistema preferido: ');
        
        if (voto > 6 || voto < 0){
        	alert('opção inválida');
            }
        else{
        	{ break; }
            }
    }
    if (voto == 0){
    	{ break; }
    }
    sistemas[voto - 1] = sistemas[voto - 1] + 1;
}

document.write('Sistema Operacional' + '\xa0\xa0' + 'Votos' + '%' + '<br>' + '----------------------------------')


let cont = 0;
let melhor = 0;
let melhorSis = '';
let perc = 0;

for (s in sistemas){
    if (s > melhor){
    	melhor = s;
        melhorSis = opcoes[cont];
        perc = (s * 100) / getArraySum(sistemas);
    }
    cont++;       
}

document.write("Total: " + cont);