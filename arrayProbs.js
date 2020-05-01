function reverseArray(arr){
  // loops through array from end to begining & console logs each element
  for(let i = arr.length -1; i >= 0; i--){
    console.log(arr[i]);
  }
}


function maxReturn(arr){
  // variable that stores the current value
  let max = arr[0];
  // loops through individual elemtns of arrayProbs
  for(let i = 1; i < arr.length; i++){
    // if statement that individual element to max value and changes if it is greater
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
