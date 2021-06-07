import { compose, pipe } from "lodash/fp";

//The idea of functional Programming is to write a bunch of small and reusable functions and then compose them
// for solving real world problems
let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "<div>";

//The above code is non functional type

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const lowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(lowerCase(trim(input)));
//We gonnan use lodash for this

//we can write the above code using lodash like this

//compose is a higher order function casue it takes functions as arguments and returns new functions
// const transform = compose(wrapInDiv, lowerCase, trim);
// transform(input);

//we are using pipe instead of compose because we can use all the functions in series unlike compose
const transform = pipe(trim, lowerCase, wrapInDiv);
transform(input);
