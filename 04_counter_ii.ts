type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let counter = init;
  const initialVal = init;
  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
    reset: () => {
      return (counter = initialVal);
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

export {};
