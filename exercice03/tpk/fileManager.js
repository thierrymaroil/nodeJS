const fs = require ('fs');
// fs.readFile('./list.txt',(err,data)=>{
//     if (err){
//         console.log(err.mess);
//     }
//     fs.writeFile('./list.txt',`${data}\n${arg}`, (err)=>{
//     if (err) console.log(err.message)
//         console.log('file saved');
//     })
// });
module.exports.saveToFile=(value)=>{
    fs.appendFile('./list.txt',`\n${value}`,(err)=>{
        if (err) console.log(err);
        console.log('File Saved !!!')
    })
}