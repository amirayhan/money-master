// input ammount
function inputAmmount(inputId) {
    const ammountField = document.getElementById(inputId);
    const ammountFieldString = ammountField.value;
    const ammount = parseInt(ammountFieldString);

    return ammount;
}

// element ammount
function elementAmmount(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const textAmmount = parseInt(elementFieldString);

    return textAmmount;
}

//calculate button when clicked
document.getElementById("calculate").addEventListener("click", function () {
    const foodAmmount = inputAmmount("food");
    const rentAmmount = inputAmmount("rent");
    const clothesAmmount = inputAmmount("clothes");

    // total expences
    const totalExpences = foodAmmount + rentAmmount + clothesAmmount;

    const expencesDisplay = document.getElementById("total_expences");
    expencesDisplay.innerText = totalExpences;

    // total income
    const income = inputAmmount("income");

    //total balance
    const balance = income - totalExpences;

    const balanceDisplay = document.getElementById("balance");
    balanceDisplay.innerText = balance;
});

// save button when clicked
document.getElementById("save").addEventListener("click", function () {
    const income = inputAmmount("income");
    const balance = elementAmmount("balance");
    const sevingParcent = inputAmmount("savings");

    // total saving ammount
    const savingAmmount = (income / 100) * sevingParcent;

    const savingAmmountDisplay = document.getElementById("savings_ammount");
    savingAmmountDisplay.innerText = savingAmmount;

    // remaining balance
    const remainingBalance = balance - savingAmmount;

    const remainingBalanceDisplay = document.getElementById("remaining_balance");
    remainingBalanceDisplay.innerText = remainingBalance;
});
