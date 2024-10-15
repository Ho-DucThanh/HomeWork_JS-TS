function B5(arr, n) {
  const result = {}; // key: value
  const result1 = [];
  for (let i = 0; i < arr.length; i++) {
    const a = n - arr[i];
    console.log(result[a]);

    if (result[a] !== undefined) {
      result1.push([result[a], i]);
    }
    result[arr[i]] = i;  
  }
  return result1;
}

arr = [1, 2, 3, 5, 4, 5, 0, 5];
n = 5;

console.log(B5(arr, n));
