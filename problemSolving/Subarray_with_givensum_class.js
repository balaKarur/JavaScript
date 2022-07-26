class Solution 
{
    N = 5; 
    s = 12;
    arr = [1,2,3,7,5]
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
       
    
    var sumValue = 0;
    var foundIndex = false;
    for (var i = 0; i < count; i++){
        sumValue = arr[i];
        for(var j = i+1; j <= count; j++){
            if(sumValue === sum){
                console.log("Sum found between indexes "+ i +" and "+(j - 1));
                foundIndex = true;
            }
            sumValue = sumValue + arr[j];
            if(sumValue > sum || j == count)
            {
                break;
            }
        }
        if(foundIndex)
        {
            console.log("Index found");
            break;
        }
    }
    }
    
    
    subArraySum(arr,n,s)
}