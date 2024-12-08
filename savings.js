function monthlySavings(earn,cost)
{
    if(typeof(earn) === "number")
    {
        return "Invalid input"
    }
    else
    {
        sum = 0;
        for(let i=0;i<earn.length;i++)
        {
            if(earn[i] >= 3000)
            {
                let tax = (earn[i]*20)/100;
                sum += earn[i];
                sum -= tax;
            }
            else
            {
                sum += earn[i];
            }
        }
        return sum-cost;
    }
}
let earn = [900,2700,3400];
let cost = 10000;
let savings = monthlySavings(earn,cost);
if(savings <= 0)
{
    console.log("Earn More!!!");
}
else
{
    console.log(savings);
}