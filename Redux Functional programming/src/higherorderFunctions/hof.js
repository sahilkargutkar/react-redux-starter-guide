let numbers = [1, 2, 3];
//map is an example of higher order functions,because it takes a function as an argument
numbers.map((number) => number * 2);
//here setTimeout is higher order function,and it will execute after 1 sec
setTimeout(() => console.log("hello"), 1000);
