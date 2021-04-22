let randomCheck =( Math.floor(Math.random() * 10) % 8);

switch(randomCheck)
    {
    case 1:
        console.log(randomCheck+" - sunday");
        break;
    case 2:
        console.log(randomCheck+" - monday");
        break;
    case 3:
        console.log(randomCheck+" - tuesday");
        break;
    case 4:
        console.log(randomCheck+" - wendsday");
        break;
    case 5:
        console.log(randomCheck+" - thersday");
        break;
    case 6:
        console.log(randomCheck+" - fryday");
        break;
    case 7:
        console.log(randomCheck+" - Saterday");
        break;
    case 0:
        console.log(randomCheck+" - invalid input");
        break;

}