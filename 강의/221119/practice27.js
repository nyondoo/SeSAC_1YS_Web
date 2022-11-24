const fs = require('fs').promises

fs.writeFile('./sesac.txt')
    .then(()=>{
        return fs.readFile('./sesac.txt')
    })