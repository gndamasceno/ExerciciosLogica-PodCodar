let numbers = {nomes:['pedro', 'rian'],
            entrada:[[2, 5], [4, 6], [6, 8]]};

function parOuImpar(){
    
    for(let i = 0; i < numbers.entrada.length; i++){
        let result, valor1, valor2;
        valor1 = numbers.entrada[i][0];
        console.log(valor1);
        valor2 = numbers.entrada[i][1];
        console.log(valor2);
        result = valor1 + valor2;
        console.log(result);
        
        if((result % 2) === 0){
            console.log(`Parabéns ${numbers.nomes[0]}, você ganhou!`);
        }
        else{
            console.log(`Parabéns ${numbers.nomes[1]}, você ganhou!`);
        }
    }
}
            
//Porque não funciona
/*
function parOuImpar(){
    
    for(entradas in numbers.entrada){
        let result = entradas[0] + entradas[1];
        if((result % 2) === 0){
            console.log(`Parabéns ${numbers.nomes[0]}, você ganhou!`);
        }
        else{
            console.log(`Parabéns ${numbers.nomes[1]}, você ganhou!`);
        }
    }
}
*/

parOuImpar();
