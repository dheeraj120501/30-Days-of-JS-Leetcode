type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const memo = new Map();
  return function (...args) {
    const argStr = JSON.stringify(args);
    if (memo.has(argStr)) {
      return memo.get(argStr);
    }
    memo.set(argStr, fn(...args));
    return memo.get(argStr);
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

export {};
