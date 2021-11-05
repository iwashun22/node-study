const fs = require('fs');

function getText(path) {
   return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
         if(err){
            reject(err);
         }
         resolve(data);
      })
   })
}

async function start() {
   try{
      const text = await getText('./text.txt');
      console.log(text);
   } catch(err) {
      console.log('there is something wrong');
      throw new Error(err);
   }
}

start();