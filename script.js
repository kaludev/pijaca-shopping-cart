function inflationCalculator(){
    let inflationRate =  parseFloat(document.getElementById('inflationRate').value);
    let money = parseFloat(document.getElementById('money').value);
    let years = parseInt(document.getElementById('years').value);
    let valueAfter = money + ((inflationRate/100)*money);
    for(let i = 1;i<years;i++){
        valueAfter += ((inflationRate/100)*valueAfter);
    }
    let oldValue = document.querySelector('.new-value');
    if(oldValue != null){
        oldValue.remove();
    }
    valueAfter = valueAfter.toFixed(2);
    let sum = document.createElement('div');
    sum.innerText = `Danasnjih ${money} ce za ${years} godina vredeti ${valueAfter} evro`;
    sum.className = 'new-value';

    document.querySelector('.container').appendChild(sum);
}