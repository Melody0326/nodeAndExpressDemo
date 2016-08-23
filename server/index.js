/**
 * Created by DaVer on 16/8/22.
 */
var Router = require('express').Router;

var router = Router();

router.route('/')
	.get((req,res)=>{
		var data = req.query;
		res.render('index',{
			title:data.aa
		})
	});
router.route('/getname')
	.get((req,res)=>{
		var data = req.query;
		res.render('index',{
			name:data.name
		})
	});

module.exports = router;