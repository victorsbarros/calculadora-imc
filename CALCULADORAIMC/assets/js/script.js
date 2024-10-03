const form = document.getElementById('form');

/* Impede que a página seja recarregada quando clicamos em calcular/enviamos os dados! */
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    /* Declaração das variáveis de peso e altura */
    const weight = document.getElementById('weight').value; 
    const height = document.getElementById('height').value;

    /* Declaração da variável do valor final + cálculo do IMC */
    const bmi = (weight / (height * height)).toFixed(2); /* O '.toFixed(2) define que será apresentado 2 casas após a virgula no resultado do cálculo */

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden') /* Esse comando remove o atributo 'hidden' da descrição pós cálculo*/

    /* Condicionais para demonstrar texto conforme resultado do calculo */
    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'

    } else if ( bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');

    } else if ( bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'

    } else if ( bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'

    } else if ( bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'

    } else {
        description = 'Cuidado! Você está com obesidade mórbida!'

    }

    value.textContent = bmi.replace('.',','); /* Substitui a , por . no demonstrativo do resultado */
    document.getElementById('description').textContent = description; 
});


