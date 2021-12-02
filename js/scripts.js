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

let accountCreated = false;

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
    accountCreated = true;
  });

  $("#deposit-withdrawl-form").submit(function(event) {
    event.preventDefault();
    if (accountCreated) {
      let withdrawalAmount = parseInt($("#withdrawl-input").val());
      let depositAmount = parseInt($("#deposit-input").val());
      $("#withdrawl-input").val('');
      $("#deposit-input").val('');

      if (!isNaN(depositAmount)) {
        newAccount.deposit(depositAmount);
      }
      if (!isNaN(withdrawalAmount)) {
        if(newAccount.balance - withdrawalAmount < 0) {
          alert('You don\'t have enough in your balance to withdraw your desired amount.');
        } else {
          newAccount.withdrawal(withdrawalAmount);
        }
      }

      $("#account-balance").html(newAccount.balance);
      } else {
        alert("An account must be created before you can withdrawal or deposit funds.")
        $("#withdrawl-input").val('');
        $("#deposit-input").val('');
      }
  });

});