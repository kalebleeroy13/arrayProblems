function reverseArray(arr){
  // loops through array from end to begining & returns each element
  for(let i = arr.length -1; i >= 0; i--){
    return arr[i];
  }
}

// ***maxReturn()***

function maxReturn(arr){
  // variable that stores the intial value
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
  // variable that holds intial value
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


 // forEach version of isIdentical()
// function isIdentical(arr){
//   let first = arr[0];
//   arr.forEach(function(element){
//     if(element !== first){
//       return false;
//     }
//   });
//   return true;
// }
