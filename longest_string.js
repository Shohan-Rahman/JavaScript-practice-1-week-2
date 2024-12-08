const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let longString = friends[0];
for(let i=0;i<friends.length;i++)
{
    if(friends[i].length > longString.length)
    {
        longString = friends[i];
    }
}
console.log(longString);