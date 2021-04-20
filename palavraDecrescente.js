/*ex 1 :dada a uma lista de palvras verifique se a palavra se a palavra 
esta decrecente
passo 1 = criar uma function palavraDecrescente varrer essa lista letra a letra
passo 2 = criar uma condicional que analiza letra pro letra da palavra 
passo 3 = dar um for na lista e passalo como patametro pra function 
passo 4 = mostrar resolucao de forma dinamica 
*/

let lista1 = ['nome', 'cba', 'cep', 'zoda'];

function palavraDecrescente(lista){
    let flagDecrescente = 0; // 1 = Palavra decrescente 
    for(let i = 0; i < Object.keys(lista).length; i++) // percorre lista
    {   
        flagDecrescente = 1;
        for(let j = 0; j < Object.keys(lista[i]).length - 1; j++){ // Roda enquanto for menor que o tamanho da palavra -1
           //console.log(lista[i][j]+ "  - " + lista[i][j+1])
            if(lista[i][j] < lista[i][j+1]){ // se letra da posição j da palavra for maior que letra da posição j + 1, palavra é crescente
                console.log('palavra ' + lista[i] + ' é crescente');
                flagDecrescente = 0; // Palavra crescente
                break;
            }   
        }
        if(flagDecrescente == 1){ // se palavra permanecer decrescente após verificação
            console.log('Palavra ' + lista[i] + ' é decrescente');
        }
    }
    
}
palavraDecrescente(lista1);

