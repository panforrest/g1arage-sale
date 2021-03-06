const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', function(req, res){
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

/*  This route render json data */
router.get('/auth', function(req, res){
	// res.json({
	// 	confirmation: 'success',
	// 	app: process.env.TURBO_APP_ID,
	// 	data: 'this is a sample json route.'
	// })
    res.render('auth', null)
})

/*  This route sends text back as plain text. */
// router.get('/send', function(req, res){
// 	res.send('This is the Send Route')
// })

/*  This route redirects requests to Turbo360. */
// router.get('/redirect', function(req, res){
// 	res.redirect('https://www.turbo360.co/landing')
// })


module.exports = router
