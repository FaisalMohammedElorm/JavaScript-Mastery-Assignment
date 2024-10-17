const fruits = ['apple', 'banana', 'mango', 'orange', 'grape'];

fruits[2] = 'strawberry'; // To replace mango with strawberry

fruits.push('watermelon'); // Added watermelon to the fruits array
fruits.shift(); // Remove the first element of the fruits array

console.log(fruits[1]); // Prints the second element of the fruits array
console.log(fruits[3]); // Prints the fourth element of the fruits array
console.log(fruits); 

//---------Array Iteration------------------

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//---------Array Mapping------------------
const lengthOfFruits = fruits.map(fruit => fruit.length);

console.log(lengthOfFruits); // Prints the array of lengths of each fruit

//---------Array Filtering------------------
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

//---------Array Sorting------------------
fruits.sort();
console.log(fruits) // Sorts the fruits array alphabetically

//---------Array Reversing------------------
fruits.reverse();

console.log(fruits); // Reverses the order of the fruits array

//---------Array Reducing------------------
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log(concatenatedFruits); // Concatenates all fruits into a single string

