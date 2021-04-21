let number=( Math.floor(Math.random() * 9999) + 1000);

if ( number / 10 == 0.1 )
    {
        console.log(number+ " The Number is Unit Digit");
    }
    else if( number / 10 == 1 )
    {
        console.log(number+ " The Number is Ten Digit");
    }
    if(  number / 10 == 10 )
    {
        console.log(number+ " The Number is Hundred Digit");
    }
    else if( number / 10 == 100 )
    {
        console.log(number+ " The Number is Thousands Digit")
    }
    else{}
