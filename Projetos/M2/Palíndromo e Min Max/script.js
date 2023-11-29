function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  let result = "",
    arr = str.split("");

  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }

  return result === str ? true : false;
}

function arrayMaxMin(arr) {
  let min = arr[0],
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  return [min, max];
}
