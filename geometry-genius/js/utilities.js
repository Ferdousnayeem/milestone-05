
function calculateArea(getID1, getID2, getID3) {
    const fixedValue = 0.5;

    const valueOfPI = 3.1416;

    const getFirstID = document.getElementById(getID1);
    const getFirstValueString = getFirstID.value;
    getFirstID.value = '';

    const firstValueConversion = parseFloat(getFirstValueString);

    const getSecondID = document.getElementById(getID2);
    const getSecondValueString = getSecondID.value;
    getSecondID.value = '';

    const secondValueConversion = parseFloat(getSecondValueString);

    const getThirdID = document.getElementById(getID3);
    const li = document.createElement('li');

    if (isNaN(firstValueConversion) && isNaN(secondValueConversion)) {
        alert('invalid input. Please enter a valid number.')
    } else {
    const measurement = 2;

    const calculation = parseFloat(fixedValue) * (firstValueConversion * secondValueConversion);

    const rectangleAndParallelogram = firstValueConversion * secondValueConversion;

    const calculationOfEllipse = parseFloat(valueOfPI) * (firstValueConversion * secondValueConversion);
    const ellipseToFixedDecimalValue = calculationOfEllipse.toFixed(2)
    if (getID1 === 'triangle-base' && getID2 === 'triangle-height') {
        li.innerHTML = 'Triangle' + ' ' + calculation + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    } else if(getID1 === 'rectangle-width' && getID2 === 'rectangle-length') {
        li.innerHTML = 'Rectangle' + ' ' + rectangleAndParallelogram + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    }
    else if(getID1 === 'parallelogram-base' && getID2 === 'parallelogram-height'){
        li.innerHTML = 'Parallelogram' + ' ' + rectangleAndParallelogram + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    }
    else if(getID1 === 'diagonal-one' && getID2 === 'diagonal-two'){
        li.innerHTML = 'Rhombus' + ' ' + calculation + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    }
    else if(getID1 === 'pentagon-perimeter' && getID2 === 'pentagon-apothem'){
        li.innerHTML = 'Pentagon' + ' ' + calculation + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    }
    else{
        li.innerHTML = 'Ellipse' + ' ' + ellipseToFixedDecimalValue + ' ' + 'cm' + '2'.sup();
        getThirdID.appendChild(li)
    }
    }
}