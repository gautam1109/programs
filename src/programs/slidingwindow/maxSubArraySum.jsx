export const MaxSubArraySum = () => {
  return (<>Hello</>);
};

export const maxSumNaive = (arr, num)=>{
  if(num>arr.length) return null;
  let max= -Infinity;
  for(let i=0; i<arr.length-num+1; i++){
    let temp=0;
    for (let j = 0; j < num; j++) {
      temp+=+arr[i+j];

    }
    max = Math.max(temp, max)
  }
  console.log("Naive:",max);
  return max;
}

export const maxSumSmart = (arr, num)=>{
  if(num>arr.length) return null;
  let tempSum=0,maxSum=0;
  for(let i=0; i<num; i++){
    tempSum+=arr[i]
  }
  maxSum=tempSum;
  for(let i=num;i<arr.length;i++){
    tempSum=tempSum-arr[i-num]+arr[i]
    maxSum = Math.max(tempSum, maxSum);
  }
  console.log("Smart:",maxSum);
  return maxSum;
}
//maxSumNaive([3,2,4,7,1,2,9],2);
maxSumSmart([3,2,5,7,1,1,9],2);
