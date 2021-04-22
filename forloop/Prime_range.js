const readline = require('readline');

const reads = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

reads.question('Enter range starting: ',(startNum) =>
{
    reads.question('Enter range end:' ,(endNum)=>
    {
        function primefactorsTo(startNum,endNum) {
            let store = [],primes =[];
            let i,j;

            for (let i = 2; i <= endNum;i++){
                if(!store[i])
                {
                    primes.push(i);
                    for (let j = i; j < endNum; j++)
                    {
                        store[j]=true;
                    }
                }        
            }
            return primes;
        }
        console.log(primefactorsTo(startNum,endNum));
        reads.close();
    });
});

