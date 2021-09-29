const jwt = require('jsonwebtoken');

const token = jwt.sign({test:true}, 'my-secret-key');

console.log(token);
console.log(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2Mjk3MTYzNDh9.VdD6uztycp0V7K7_YJXYxH0QLosxUH70ExM_Bt5p024', 'my-secret-key'));