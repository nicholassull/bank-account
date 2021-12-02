// Business Logic for BankAccount ------
function Account(balance, userName) {
  this.balance = balance;
  this.userName = userName;
}

Account.prototype.deposit = function(funds) {
  this.balance += funds;
  return this.balance;
}

Account.prototype.withdrawal = function (funds) {
  this.balance -= funds;
  return this.balance;
}

$(document).ready(function() {
  $("#account-form").submit(function(event) {
    event.preventDefault();
    let userName = $("#name-input").val();
    let balance = parseInt($("#initial-deposit-input").val());
    newAccount = new Account(balance, userName);
    $("#name-input").val('');
    $("#initial-deposit-input").val('');

    $("#info-display").removeClass('hidden');
    $("#account-name").html(userName);
    $("#account-balance").html(balance);
    
  });

  $("#deposit-withdrawl-form").submit(function(event) {
    event.preventDefault();
    let withdrawalAmount = parseInt($("#withdrawl-input").val());
    let depositAmount = parseInt($("#deposit-input").val());
    $("#withdrawl-input").html('');
    $("#deposit-input").html('');

    if (!isNaN(depositAmount)) {
      newAccount.deposit(depositAmount);
    }

    if (!isNaN(withdrawalAmount)) {
      newAccount.withdrawal(withdrawalAmount);
    }

    $("#account-balance").html(newAccount.balance);

    console.log(withdrawalAmount);
    console.log(depositAmount);
    console.log(newAccount.balance);

  });



});