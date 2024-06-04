interface User {
  name: string;
  id: number;
}

function bubble(arr: number[]): number[] {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temporary = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temporary;
    }
  }
  return arr;
}
