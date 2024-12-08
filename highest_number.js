let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

//using sort method
// numbers.sort((a,b) => b-a);
// console.log(numbers[0]);

//using max method
// console.log(Math.max(...numbers));

//using loop
let highestNumber = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i] > highestNumber)
    {
        highestNumber = numbers[i];
    }
}
console.log(highestNumber);