const accountId = 12345
let accountEmail = "hasan@gmail.com"
var accountPassword = "1234567890"
accountCity = "Dhaka" //It also works but not preferable to use

let accountState; // if we declare any variable  without assigning any value in it, and if we print it, it will show undefined.

// accountId = 1 (Not Allowed)
// console.log(accountId);
// This will through typeError: Assignment to constant variable.
// As const is used to define constants, which is unchngeable.

accountEmail = "kfh@gmail.com"
accountPassword = "12121212"
accountCity = "Chadpur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//instead of console.log we can use console.table()
// This table() method will print the variables in a tabular form 

/*
In JavaScript, we can define constants using const, which is unchangeable. 
To declare variable, we can use either ler, var, or even just writing the variable's name like we did declaring accountCity. Unlike constants, variables are changeable. 

Nowadays, we usually don't use var to declare variables. Because, 
On initial days, JavaScript used to had a problem that, it wasn't able to work with scopes (basically inside two curly braces {scope}, used in if-else or loops, etc.) As a consequence, if the redundency occurs (same variable declared in multiple places of the code), if ayone change one variable, change would occur in all the variables. "let" solved this issue of scope. That's why, nowadays, we use "let" instead of "var" to declare variables. So,

Prefer not to use var,
because of issue in block scope and functional scope.
*/
