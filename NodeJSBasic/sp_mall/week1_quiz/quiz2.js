function isEven(n) { 
  return n%2 === 0;
  // n이 짝수면 true, 홀수면 false 를 반환하는 함수를 만들어 봅시다
}
function isOdd(n) {
  return n%2 !== 0; 
  // 반대로 n이 홀수면 true, 짝수면 false 를 반환하는 함수를 만들어 봅시다
}

console.log(isEven(10)); // true
console.log(isEven(3)); // false
console.log(isOdd(5)); // true
console.log(isOdd(8)); // false