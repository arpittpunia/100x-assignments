const fs = require('fs');
let overwrite = "This is the replaced text replaced using fs.writeFile"
fs.writeFile('demo.txt',overwrite, (err)=>{
    if(err){console.log(err);return;}
    console.log('File saved');
});
let i = 0;
while (i<100000) {
    console.log(i);
    i++;
}