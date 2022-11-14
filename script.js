const arr = [1, 1];
let even = 0;
(() => {
  for (let i = 0; i < 32; i++) {
    arr.push(arr[i] + arr[i + 1])
    if (arr[i + 1] % 2 == 0) {
      even += arr[i + 1];
    }
  }
})()
