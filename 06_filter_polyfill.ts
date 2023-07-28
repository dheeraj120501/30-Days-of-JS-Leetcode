function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  return arr.reduce<number[]>((prev, curr, i) => {
    prev = fn(curr, i) ? [...prev, curr] : [...prev];
    return prev;
  }, []);
}
