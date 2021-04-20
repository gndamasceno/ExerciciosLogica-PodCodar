function fatorialFuncional (n){
    if(n == 0 ){
        return 1;
    }
    return n*fatorialFuncional(n-1);
}
function fatorialIterativo(n){
    let resp = 1;
    if(n == 0 || n == 1 ){
        return 1;
    }
    for(let i = 1; i <= n; i++){
        resp *= i; 
    }
    return resp;
}
console.log(fatorialIterativo(4));
console.log(fatorialFuncional(4));
console.log(fatorialIterativo(5));
console.log(fatorialFuncional(5));