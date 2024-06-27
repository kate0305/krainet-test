export const findFibonacciNumber = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev = 0;
  let next = 1;

  for (let i = 3; i <= n; i++) {
    let current = prev + next;
    prev = next;
    next = current;
  }

  return next;
};

console.log(findFibonacciNumber(1));
console.log(findFibonacciNumber(2));
console.log(findFibonacciNumber(3));
console.log(findFibonacciNumber(4));
console.log(findFibonacciNumber(5));
