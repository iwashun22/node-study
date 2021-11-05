const fs = require('fs');

console.log('first task');
const st = fs.readFileSync('./text.txt', 'utf-8');
console.log(st);
console.log('next task');