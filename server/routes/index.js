var express = require('express');
var router = express.Router();

var ClassifyModel = require('../Model/Classify');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 获取所有分类 */
router.get('/getclass',function(req,res){
	
	ClassifyModel.find({},function(err,result){
		if(err){
			
		}else{
			res.send(result)
		}
	})
	
})


/* 添加分类 */
router.post('/addclass',function(req,res){
	
	var classify = req.body.classify;
	
	var clas = new ClassifyModel({
		name:classify,
		createtime:new Date()
	})
	
	clas.save(function(err,ress){
		if(err){
			console.log(err)
		}else{
			console.log(ress)
			ClassifyModel.find({},function(err,result){
				if(err){
					
				}else{
					res.send(result)
				}
			})
		}
	})
	
})

/*根据 id删除分类*/
router.get('/delclass',function(req,res){
	
	var id = req.query.id;
	
	ClassifyModel.findByIdAndRemove(id,function(err,ress){
		ClassifyModel.find({},function(err,result){
			if(err){
				
			}else{
				res.send(result)
			}
		})
	})
})



module.exports = router;
