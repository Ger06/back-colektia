// const jwt =  require('jwt-simple');
// const moment = require('moment')

// const checkToken = (req,res,next) => {
//     if(!req.headers['user-token']){
//         return res.json({error: 'You need to include the user-token in the header'});
//     }

//     const userToken = req.headers['user-token'];
//     let payload = {};

//     try {
//         payload =  jwt.decode(userToken, 'helloworld');
//     } catch (error) {
//         return res.json({error: 'The token is incorrect'})
//     }

//     if(payload.expiredAt < moment().unix()){
//         return res.json({error: 'The token expired'})
//     }
    
//     req.usuarioId = payload.usuarioId;

//     next();
// }

// module.exports = {
//     checkToken
// }