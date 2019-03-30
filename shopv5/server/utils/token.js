const jwt = require('jsonwebtoken');
const config = require('./config');
const token= {
    generateToken(userid){
        let token = jwt.sign({ 'userid': userid }, config.SECRETKEY,{ expiresIn: '1h' });
        console.log('Generated Token is ',token);
        return token;
    },
    checktoken(currentToken){
        jwt.verify(currentToken, config.SECRETKEY, function(err, decoded) {
            if(decoded){
            console.log('Verifiy ',decoded.userid) // bar
            }
            else{
                console.log('INvalid Token ');
            }
          });
    }
}
module.exports = token;
// let t = token.generateToken('amit');
// token.checktoken(t);
// let t2 = token.generateToken('admin');
// token.checktoken('hgdsjkghdhjkgdfhgkjd678783678534678');
