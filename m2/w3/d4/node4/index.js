const fs = require('fs');

const read = fs.createReadStream(__dirname+'/testo.txt')
const write = fs.createWriteStream(__dirname+'/testo-copia.txt')

read.pipe(write)

read.on('readable', function(){

    console.log(read.read())

})