const readline = require('readline');

const reads = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let m = 2;
let sum = 0;

reads.question('Enter a Number : ', (number) =>
{
    console.log("2 ^ "+number+ " = " + (Math.pow(2,number)));
    console.log("printing all 2's power till value :" +number);

    for (let i = 0; i <number.number; i++) {
        console.log("power of 2^" +i+"is : "+(Math.pow(2,i)));
    }
    reads.close();

});
rong