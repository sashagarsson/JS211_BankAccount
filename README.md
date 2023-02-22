# JS211_BankAccount

## BankAccount class - This class represents a bank account.

### 1. The class should have the following fields:

- [done ] accountNumber - String representing the account number
- [ done] owner - String representing the owner of the account
- [done ] transactions - An array of transactions representing the history of all transactions associated with this account

- The constructor should take in the following input:

- [ done] accountNumber - The account Number
- [ done] owner - The name of the person who owns this account

**NOTE: When an account is created, you should initialize the transactions array to be an empty array**

### 2. The class should have the following 3 methods:

- [ ] balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
- [ ] deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.

**NOTE: You should not be able to deposit a negative amount**

- [ ] charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.

**NOTE: You should not be able to charge an amount that would make your balance dip below 0**

## Transaction class - This class represents a single transaction in a bank account.

### 1. The class should have the following fields:

- [done ] date - The date of the transaction
- [done ] amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
- [ done] payee - The description or payee on the transaction

- The constructor should take in the following input:

- [ ] amount - The amount on the transaction
- [ ] payee - The payee or description on the transaction

==NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.==

## Design three tests

- [ ] bank account should have an account number, owner's name, and a transaction list
- [ ] should create transaction correctly for a deposit
- [ ] should create transaction correctly for a charge

---

# Push Yourself Further

##SavingsAccount class - This class should extend the BankAccount class.##

### 1. The class should have an additional field:

- [ ] interestRate - This value represents the rate at which the account earns interest

- The constructor should take the following as input:

- [ ] accountNumber - See BankAccount class
- [ ] owner - See BankAccount class
- [ ] interestRate - The rate that is used to compute interest

### Additional methods:

- [ ] accrueInterest() - This method should use the balance() to get the current balance and add a new transaction representing a deposit of the appropriate amount.
