

document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit amount from input field
    const depositField = document.getElementById('user-deposit');
    const depositAmount = depositField.value;
    const convertedDepositAmount = parseFloat(depositAmount);

    // get total deposit
    const depositBox = document.getElementById('total-deposit');
    const deposit = depositBox.innerText;
    const convertedDeposit = parseFloat(deposit);
    
    // set total deposit
    const totalDeposit = convertedDeposit + convertedDepositAmount;
    depositBox.innerText = totalDeposit.toFixed(2);
    
    depositField.value = '';

    // get previous balance
    const balanceBox = document.getElementById('total-balance');
    const balance = balanceBox.innerText;
    const convertedBalance = parseFloat(balance);

    // set total balance
    const totalBalance = convertedDepositAmount + convertedBalance;
    balanceBox.innerText = totalBalance.toFixed(2); 
});


