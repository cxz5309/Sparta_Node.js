var personArray = [
  {"name": "John Doe", "age": 20},
  {"name": "Jane Doe", "age": 19},
];

const print = (arr)=>{
  arr.forEach(({name, age})=>{
    console.log(`His/her name is ${name}. He/She is ${age} years old.`)
  })
}

print(personArray);
// 위에서 배운 4가지 for문을 이용해서 아래 문장을 출력해봅시다 (console.log)

// His/her name is John Doe. He/She is 20 years old.
// His/her name is Jane Doe. He/She is 19 years old.