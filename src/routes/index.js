const { Router } = require ('express');
const router = Router();
const middleware = require ('./middleware')

const filmRouter = require('./controllers/film')
const userRouter = require('./controllers/user')


router.use('/film' ,filmRouter)
router.use('/user', userRouter)




module.exports = router;