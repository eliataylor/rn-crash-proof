const fs = require('fs');

let arr = [];
for(let i=0; i < 20000; i++) {
    arr.push({"Name":'test' + i, "Value":i});
}
fs.writeFileSync('./data/test1.json', JSON.stringify(arr), 'utf8');
fs.writeFileSync('./data/test2.json', JSON.stringify(arr), 'utf8');
fs.writeFileSync('./data/test3.json', JSON.stringify(arr), 'utf8');
fs.writeFileSync('./data/test4.json', JSON.stringify(arr), 'utf8');

console.log('Wrote large json files');
