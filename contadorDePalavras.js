/* Dado um texto vou contar quantas vezes cada palavra aparece
1 ler cada nome da lista
2 identificar as palavras iguais
3 contar quantas vezes a palavra se repete 
4 exibir a execuçao dos passos anteriores 
peguei uma palavra eu adiciono no dicionario 
ex:
dada a entrada '['mamao', 'abacate', 'uva', 'adol', 'abacate', 'uva', 'abacate']'
saida : mamao 1
abacate 3
uva 2 
adol 1
*/
// Revisar com o guilherme, a entrada do exércicio deveria ser diferente
// Exemplo de entrada: 'mamao abacate uva adol abacate uva abacate'
let textoExemplo = 'mamao abacate uva adol abacate uva abacate adol'
function contadorDePalavras(texto)
{
    palavrasDivididas = texto.split(" ");
    let dicionario = {};
    for(let i=0; i < palavrasDivididas.length; i++){
        if(dicionario[palavrasDivididas[i]] == undefined){ //Se não tiver nenhuma key com a palavra atribuida
            dicionario[palavrasDivididas[i]] = 1; //Adiciona a key: palavra, atribuida ao valor de ocorrências da palavra, no caso, 1  
        }
        else{
            dicionario[palavrasDivididas[i]] ++;//Se a palavra já tiver sido contada, soma ocorrência
        }

    }
    return dicionario;
}

console.log(contadorDePalavras(textoExemplo))