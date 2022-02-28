const {Router} = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');
const jwt = require('jwt-simple');
const moment = require('moment');

const router = Router()

router.post('/register',[
  check('username', 'the username is obligatory').not().isEmpty(),
  check('password', 'the password is obligatory').not().isEmpty(),
  check('email', 'the email is obligatory').isEmail()
] ,async(req,res)=>{
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()})
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
      console.log(error)
    
  }
})

router.post('/login', async(req,res)=>{
  const {email} = req.body
  const user = await User.findOne({
     where: {
       email : email
     }
    })
  if(user){
    const ok = bcrypt.compareSync(req.body.password, user.password);
    if(ok){
      res.json({ success: createToken(user) })
    }
  }else{
    res.json({ error: 'Error with the email and/or password'})
  }
})

const createToken = (user) => {
  const payload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, 'minutes').unix()
  }

  return jwt.encode(payload, 'helloworld')
}


module.exports = router;