var fs = require('fs');
function ncommand(path){
    let con = [];
fs.readFile(path, 'utf8', function(err, data) {
    if (err){console.log ("File not found")}else{
    let data1 = data.split("\n");
    let count = 0;
    for(let i = 0;i<data1.length;i++){
        if(data1[i]!='\r'){
            con.push(count+1+". "+data1[i]);
            count++;
            
        }
    }
}
    
    let d = con.join('\n');
   console.log(d);
});
}
function ncommand1(files){

    for(let i =0;i<files.length;i++){
        ncommand(files[i]);
    }
}

module.exports = {
    ncommand: ncommand1
}