const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = chunkArray(array, 2);

function chunkArray(arr, size) {
  const result = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, size);
    result.push(chunk);
  }
  return result;
}

console.log(chunkedArray); 