// Our cash register has a few serious problems

// CLOSURE SOLUTION
function newRegister() {
    var balance = 0;
    var deposit = function(value){
        if (!isNaN(value) && value > 0) {
          balance += value
          return balance;
        } else {
          console.log('Invalid deposit');
        }
    }
    var withdraw = function(value){
      if (!isNaN(value) && value > 0 && value < balance) {
        balance += value
        return balance;
      } else {
          console.log('Invalid withdrawal');
      }
    }
    return { deposit, withdraw };
}

var register = newRegister();

console.log(register.balance)         // Undefined
console.log(register.deposit(10))     // 10
console.log(register.withdraw(100))   // Invalid withdrawal
console.log(register.deposit(100))    // 110
console.log(register.withdraw(100))   // 10

// GETTER + SETTER SOLUTION ... Not quite working
var register = {
    bal: 10,
    get balance() { return this.bal; },
    set deposit(value) {
        if(!isNaN(value) && value > 0) {
            this.bal += value;
        }
    },
    set withdraw(value) {
        if(!isNaN(value) && value > 0 && value < this.bal) {
            this.bal -= value;
        }
    }
}

Object.freeze(register);




// Anyone can directly update their balance without a withdraw/ deposit.
// The balance can be manipulated with unsanitized input.
// Update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer