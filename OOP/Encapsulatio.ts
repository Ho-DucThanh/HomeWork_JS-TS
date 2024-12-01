class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
  }
  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50); // Output: "Deposited: $50. New balance: $150"
console.log(account.getBalance()); // Output: 150
