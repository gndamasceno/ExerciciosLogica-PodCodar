// ex 3: dada a uma lista de palavras verifique se alguma so tem consoante 


let lista1 = ['lista', 'vogais', 'jlks', 'gfdt'];
function verificaConsoante(lista){

    for(let i = 0; i < Object.keys(lista).length; i++){
            if(lista[i].includes('a') || lista[i].includes('e') || lista[i].includes('i')
            || lista[i].includes('u') || lista[i].includes('o')){
               continue;
            }
            else{
                console.log('Palavra '+ lista[i] + ' Não tem vogais');
            }
        
    }
}
verificaConsoante(lista1);