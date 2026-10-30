function sum(...input) {
  // Start coding here !
  let result = 0;

  for (let num of input) {
    result += num;
  }
  return result;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);

//need new contanter === let result;
//need loop in each input === for-of-loop
//return result in new container which will has only 1 value cus it is 'sum' function === result output of sum function
