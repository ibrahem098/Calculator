let calc = '';

function updateCalculation() {
    document.querySelector('input').value = calc;
}

function calculat(act) {
    calc = calc + act;
    updateCalculation();
}

function calculatEqual() {
    calc = eval(calc)
    updateCalculation()
}

function calculatAc() {
    calc = ''
    document.getElementById('output').value = 0;
}

function calculatPolar() {
    calc = `-(${calc})`
    updateCalculation()
}

function calculatPercent(calac) {
    let calcPer = `%${calac}`
    calc = `.${calac}`
    document.querySelector('input').value = calcPer;
}