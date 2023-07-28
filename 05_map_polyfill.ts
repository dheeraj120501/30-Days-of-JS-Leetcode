function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let res: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    res = [...res, fn(arr[i], i)];
  }
  return res;
}
