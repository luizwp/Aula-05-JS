let pergunta1 = prompt ('Telefonou para a vítima?')
let pergunta2 = prompt ('Esteve no local do crime?')
let pergunta3 = prompt ('Mora perto da vítima?')
let pergunta4 = prompt ('Devia para a vítima?')
let pergunta5 = prompt ('já trabalhou com a vítima?')

if (prompt <= 2){
    console.log('suspeito')
}
else if (prompt >= 3 || prompt < 4){
    console.log('Cúmplice')

}
else {
    console.log('Assasino')
}
