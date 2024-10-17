//-----2D Array-----
const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(arrMatrix) // Prints the entire matrix
const accessElement = arrMatrix[1][2] 
console.log(accessElement); // Prints element in the second row and the third column
//----Flattening the Array-----
const flatArray = arrMatrix.flat();
console.log(flatArray);
//----Challenges-----Removing Duplicates-----
const mixedFruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

function removeDuplicates(mixedFruits) {
  const uniqueFruits = [...new Set(mixedFruits)];
  return uniqueFruits;
}

const uniqueFruits = removeDuplicates(mixedFruits);
console.log(uniqueFruits);
//---Finding the Maximum Number-------

const numbers = [15, 24, 6, 89, 32];

let maximumNumber = numbers[0]; //Initialize with first element

for (let i =1; i < numbers.length; i++) {
  if (numbers[i] > maximumNumber){
    maximumNumber = numbers[i];
  } else {
    // maximumNumber remains the same
  }
}

console.log(maximumNumber); // Prints the maximum number in the array

