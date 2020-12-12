var numero = 0

while (numero < 3) {
    console.log(`Olá, aluno ${numero}`)
    numero = numero + 1 //numero++
}

var numero = 100

while (numero >= 5) {
    console.log(`10 x ${numero} = ${10 * numero}`)
    numero = numero - 5 //numero++
}

for (var num = 0; num <= 10; num++) {
    console.log(`10 x ${num} = ${10 * num}`)
}

for (var i = 0; i <= 10; i++) {
    var num
    res = num++
    console.log(`${i} x ${num} = ${i * num}`)
}

// for(var num = 0; num <= 100; num++){
//     if(num % 2 == 0){
//         console.log(`${num} É par`)
//     }
// }

for (var num = 100; num <= 200; num++) {
    if (num % 2 != 0) {
        console.log(`${num} É ímpar`)
    }
}

var res = 5
for (var c = 5; c > 1; c--) {
    res = res * (c - 1)
}

console.log(`Resultado: ${res}`)