var mongoose = require('mongoose');


var DB_URL = 'mongodb://localhost:27017/beauty';

mongoose.connect(DB_URL);

mongoose.connection.on('connected',function(){
	console.log('数据库连接成功...')
})

mongoose.connection.on('error',function(){
	console.log('数据库连接失败...')
})

mongoose.connection.on('disconnect',function(){
	console.log('断开连接...')
})

module.exports = mongoose;