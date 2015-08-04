function slicey(array, firstIndex, lastIndex){
  var output = [];
  for (var i = firstIndex; i < lastIndex; i++){
    output.push(array[i]);
  }
  return output;
}

var testArray = [1,2,3,4,5];

console.log(testArray.slice(1,3));
console.log(slicey(testArray, 1,3));

