const fs = require("fs");
fs.readFile('demo.txt','utf-8',(err, data)=> {
    if(err){console.log(err);return;}
    console.log(data);
});
let x =0;
while (x<100000000000) {
    console.log(x);
    x++;
}