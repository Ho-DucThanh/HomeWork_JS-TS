function B5(arr, n) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const a = n - arr[i];
    if (result[a] !== undefined) {
      return [result[a], i];
    }
    result[arr[i]] = i;
    console.log(result);
  }
  return null;
}

const arr = [1, 5, 3, 5, 4, 5, 0, 5];
const n = 5;

console.log(B5(arr, n));
