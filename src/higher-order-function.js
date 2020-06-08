import { compose, pipe } from "lodash/fp";

// practice using higher order function
const input = " javascript ";
const output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</sapn>`;
// const wrap = (type, str) => `${type}${str}${type}`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const result = wrapInDiv(toLowereCase(trim(input)));
const transform = pipe(trim, toLowerCase, wrap("div")); // Order operators: Read the code from right to left
console.log(transform(input));
