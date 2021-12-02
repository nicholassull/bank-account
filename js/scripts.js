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
    let balance = $("#initial-deposit-input").val();
    $("#name-input").val('');
    $("#initial-deposit-input").val('');

    $("#info-display").removeClass('hidden');
    $("#account-name").html(userName);
    $("#account-balance").html(balance);
    
    let newAccount = new Account(balance, userName);
    console.log(userName);
    console.log(balance);
    console.log(newAccount);
  });


  $("#deposit-withdrawl-form").submit(function(event) {
    event.preventDefault();
    let withdrawalAmount = $("#withdrawl-input").val();
    let depositAmount = $("#deposit-input").val();
    $("#withdrawl-input").html('');
    $("#depositinput").html('');

    console.log(withdrawalAmount);
    console.log(depositAmount);

  });



});