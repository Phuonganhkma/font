// Bài 1
// a
for (let i = 0; i < 7; i++) {
    console.log(i);
}
// b
let n = Number(prompt("Enter a number"));
for (let i = 0; i < n; i++) {
    console.log(i);
}
// c
let l = Number(prompt("Enter a number"));
for (let i = 3; i < l; i++) {
    console.log(i);
}
// d
let n = Number(prompt("Enter n"));
let c = Number(prompt("Enter c"));
for (let i = c; i < n; i++) {
    console.log(i);
}

// e

let n = Number(prompt("Enter n"));
let c = Number(prompt("Enter c"));
for (let i = c; i < n; i += 3) {
    console.log(i);
}

// f
let n = Number(prompt("Enter n"));
let c = Number(prompt("Enter c"));
let s = Number(prompt("Enter s"));

for (let i = c; i < n; i += s) {
    console.log(i);
}
