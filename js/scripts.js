// Business Logic for BankAccount ------
function Account(balance, name) {
  this.balance = balance;
  this.name = name;
}

Account.prototype.deposit = function(funds) {
  this.balance += funds;
  return this.balance;
}

Account.prototype.withdrawl = function (funds) {
  this.balance -= funds;
  return this.balance;
}

pecurran@hotmail.com  