function reverseArray(arr){
  // loops through array from end to begining & returns each index value
  for(let i = arr.length -1; i >= 0; i--){
    return arr[i];
  }
}

// ***maxReturn()***

function maxReturn(arr){
  // variable that stores the intial index value
  let max = arr[0];
  // loops through individual elemtns of arrayProbs
  for(let i = 1; i < arr.length; i++){
    // if statement that compares individual element to max value and changes if it is greater
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}


// ***isIdentical()***

function isIdentical(arr){
  // variable that holds intial index value
  let first = arr[0];
  // loops through indiviual array elemnts from begining
  for(let i = 1; i < arr.length; i++){
    // if statement comparing first variable to array elements
    if(arr[i] !== first){
        return false;
    }
  }
  return true;
}




// ****sumArray*****
function sumArray(arr){
  // variable holding intial index value
  let total = 0;
  // loops through array from begining
  for(let i = 0; i < arr.length; i++){
    // adds array elements as they itterate
    total += arr[i];
  }
  return total;
}
