const accoundId = 1443231
let accoundEmail= "ypriyanshu@yahoo.com"
var accoundPassword = "12341"
accountCity = "Jaipur"


accoundEmail = "pypy@gmail.com"
accoundPassword = "1112211238"
accountCity = "Uttar Pradesh"

/*
    ->Do not prefer using var
    ->Use only let and const
    ->you can use nothing while declaring a variable too(line 4) but that too is not prefered. 
*/
console.log(accoundId);  // this to print the data normallay 


// to print the data on console in a table use 
console.table([accoundId, accoundEmail, accoundPassword, accountCity])