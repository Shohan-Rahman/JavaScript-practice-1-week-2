const number = 2000;

if((number%4 == 0 && number%100 != 0) || number%400 ==0)
{
    console.log(`This ${number}, year is leap year.`);
}
else
{
    console.log(`This ${number}, year is not leap year.`);
}