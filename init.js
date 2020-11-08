import app from "./app";
// app.js 에서 app변수를 import (express) 

// const express  = require("express");
// 예전 문법, npm install @babel/node
// npm install @babel/core
//npm install @babel/preset/core
// .bablerc 파일 제작 으로 최신 code를 사용가능하게 됨. 


const PORT = 4000;
// express를 import했으니 가능한듯, 3000 PORT를 할당했다? - no 그냥 아래 변수에 port를 쉽게 바꾸기 위해 변수로 선언한거일 뿐

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

// () 만 하는 이유는 default가 request라서? (req, res, netx)



// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }    - 위랑 같은 의미 arrow function 
// const something = (a, b) => a * b
// => const something = fuction something(a, b) {
//    return a * b; 
//};


app.listen(PORT, handleListening);


//서버가 (express가) listen에 하고 있다? app.listen에서 port를 담고 있고, 이게 서버로써의 시작인듯