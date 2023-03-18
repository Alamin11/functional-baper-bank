
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get new deposit amount
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set new deposit total 
    updateElementValue('deposit-total', newDepositTotal);

    // get previous balance total
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate new balance total
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;

    // set new balance total 
    updateElementValue('balance-total', newBalanceTotal);
})