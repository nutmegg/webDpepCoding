var fs = require('fs');
function bcommand(path){
    let con = [];
fs.readFile(path, 'utf8', function(err, data) {
    if (err){console.log("file not found");}

    else{
    let data1 = data.split("\n");

    for(let i = 0;i<data1.length;i++){
       
           con.push(i+1+". "+data1[i]);
            
        
    }}
    
    let d = con.join('\n');
    console.log(d);
});
}

function bcommand1(files){

    for(let i =0;i<files.length;i++){
        bcommand(files[i]);
    }
}

module.exports = {
    bcommand: bcommand1
}