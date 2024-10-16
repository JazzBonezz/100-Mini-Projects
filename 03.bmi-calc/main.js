const height = document.getElementById('height')
const age = document.getElementById('age')
const weight = document.getElementById('weight')
const submit = document.getElementById('submit')
const result = document.getElementById('result')

submit.addEventListener('click', () => {
    const bmi = parseInt(weight.value) / ((parseInt(height.value)/100) ** 2)
    result.value = bmi.toFixed(2);



    if (bmi < 18) {
        console.log('Недостаток веса');
    } else if (bmi >= 18 && bmi <= 24.9) {
        console.log('Нормальный вес');
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log('Избыточный вес');
    } else if (bmi >= 30) {
        console.log('Ожирение');
    }
})
