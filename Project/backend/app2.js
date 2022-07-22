const crypto = require('crypto');

function A(){
      crypto.randomBytes(32, (err, buffer)=>{
            if(err){   console.log(err);    }

            const token = buffer.toString('hex');
            console.log(token);
      })
      
}

A();