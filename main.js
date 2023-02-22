
'use strict';

class BankAccount {
    constructor (accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }


balance() {

    const account = (oldTransactions, currentTransaction) => oldTransactions.amount + currentTransaction.amount;
    const currentBalance = this.transactions.reduce(account);
    console.log(currentBalance);
    return currentBalance;
}


deposit(amt) {
    let newDeposit = new transactions(amt, 'Deposit');
    if (amt > 0) {
    this.transactions.push(newDeposit);
} else {
    console.log("No negative deposits");
}
}
charge(amt,payee) {
    let newCharge = new transactions(amt,payee);
    if(newCharge.amt > this.balance) {
        console.log("Insufficient funds");
    } else {
        this.transactions.push(newCharge);
        console.log (this.transactions);
    }
    
}
}

class Transactions {
    constructor (amount, payee,) {
        // this.date = newDate();
        this.amount = amount;
        this.payee = payee;
    }

    }
    
    //tests
    const assert = require('assert');

    if (typeof describe === 'function'){
        describe('BankAccount', function(){
          it("bank account should have an account number, owner's name, and a transaction list", function(){
       
            const bankAccount1 = new BankAccount("12345" , "Sasha");

            assert.equal(bankAccount1.accountNumber, "12345");
            assert.equal(bankAccount1.owner, "Sasha");
            assert.equal(bankAccount1.transactions.length, 0);

  
          });     // end of first test
        });       // end of testing BankAccount

     

        describe('Transactions', function() {
            it('should create transaction correctly for a deposit', function(){
                const newDeposit1 = new Transactions(100, 'Deposit');
                assert.equal(newDeposit1.amount, 100);
                assert.equal(newDeposit1.payee, 'Deposit');
            }); // end of test 1
            it('should create transaction correctly for a charge', function(){
                const newcharge1 = new Transactions(50, 'HEB');
                assert.equal(newcharge1.amount, 50);
                assert.equal(newcharge1.payee, 'HEB');
            }); // end of test 2
        }); // end of testing Transactions
        } 
        
        //end of all tests
