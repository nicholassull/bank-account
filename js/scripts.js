// Business Logic for BankAccount ------
function Account(balance, userName) {
  this.balance: balance;
  this.userName: userName;
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
    let newAccount = new Account(balance, userName);
    console.log(userName);

  });



});