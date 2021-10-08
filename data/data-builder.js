const fs = require('fs');

let arr = [];
for(let i=0; i < 20000; i++) {
    arr.push({label:'test' + 1, value:i});
}
fs.writeFileSync('./data/test1.json', JSON.stringify(arr), 'utf8');

console.log('Wrote large json files');
