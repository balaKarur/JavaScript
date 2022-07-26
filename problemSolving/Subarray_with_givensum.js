let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
function subArraySum(arr,sum)
{
    var count = arr.length;
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



subArraySum(arr,sum);