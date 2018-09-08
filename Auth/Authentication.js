const jwt = require('jsonwebtoken');
var data2verify
var x 
//test userdata
const appUsers = {
    'max@gmail.com': {
        name: 'Max Miller',
        pw: '1234' // YOU DO NOT WANT TO STORE PW's LIKE THIS IN REAL LIFE - HASH THEM FOR STORAGE
    },
    'lily@gmail.com': {
        name: 'Lily Walter',
        pw: '1235' // YOU DO NOT WANT TO STORE PW's LIKE THIS IN REAL LIFE - HASH THEM FOR STORAGE
    }
};
//Fix ssecret key
const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ5@8Ubt.8-';

function PrepareVerify(data2verify){
    if(data2verify){
        x = "first if stage" 
    }
    else{
        x = "first else stage"
    }

return x

    
}
function verify1st(){
    
}
module.exports = {
    PrepareVerify:PrepareVerify
 }