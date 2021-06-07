const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const lowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, lowerCase, wrap("div"));

console.log(transform(input));
