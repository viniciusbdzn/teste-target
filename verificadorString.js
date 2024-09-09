function verificarLetraA(str) {
    let caractereA = 'a';
    let ocorrenciasLetraA = str.toLowerCase().split(caractereA.toLowerCase()).length - 1;
    
    return `A letra "a" ocorre ${ocorrenciasLetraA} vez(es).`
}

console.log(verificarLetraA("alo adama amadwl oaqwqq"));
console.log(verificarLetraA("aA asdauqwAjA kquA ooqsasA"));