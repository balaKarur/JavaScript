function count()
{
    let conter=0;
   return  function inner()
    {
        conter = conter+1;
        console.log("conter is :"+conter);
    }

}
var innerApi =  count();

for(let i=1;i<6;i++)
{
    let conter=i+5;
    innerApi();
}
