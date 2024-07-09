// this only work with pure function. A pure function is defined as a function that always returns the same output given the same input and doesnt have any side effect
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cash) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}
