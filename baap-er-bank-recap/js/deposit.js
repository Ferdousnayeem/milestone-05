

document.getElementById('btn-deposit').addEventListener('click', function () {
    const getDepositInputAmount = getInputValue('deposit-field');

    const depositBox = getBoxElementValue('deposit-total');

    const totalDeposit = depositBox + getDepositInputAmount;

    const setValue = setBoxValue('deposit-total', totalDeposit); 

    const balanceBox = getBoxElementValue('balance-total')

    const totalBalance = balanceBox + getDepositInputAmount;

    const totalInBalanceBox = setBoxValue('balance-total', totalBalance) 
})



