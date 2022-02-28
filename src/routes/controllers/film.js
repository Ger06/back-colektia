const {Router} = require ('express');
const {Film, Review} = require ('../../db')

const router = Router();

router.get('/title', async (req,res)=>{
	const {title} = req.body;
	const films = await Film.findAll()
	return res.send(films)
})

// router.get('/:id', async(req,res)=>{
//   const film = await Film.findbyPk(id,{
// 	  include = {
// 		model : Review,
// 		attributes : [review],
// 		trough: {
// 			attributes: []
// 		}

// 	  }
//   })
// })

router.post('/newpost', async (req,res)=>{
	const {title, director, image, review, score} = req.body;
	try {
		const newpost = await Film.create({
			title: title,
			director: director,
			image: image,
			review: review,
			score: score
		})
		// await Review.create({
		// 	review,
		// 	score
		// })
		res.send('post created')
	} catch (error) {
		console.log(error)
	}
})

router.put('/:filmid', async(req,res)=>{
	try {
	const {filmid} = req.params;
	await Film.update(req.body,{
		where: {id : filmid}
	})
	res.send('Se modifico')
	} catch (error) {
		console.log(error)
	}
})

router.delete('/delete/:filmid',async (req,res)=>{
	try {
		const {filmid} = await req.params
		Film.destroy({
		where: {id : filmid}
	})
	res.json({success: 'the fil'})
	} catch (error) {
		console.log(error)
	}
})

module.exports = router;