var mongoose = require('../lib/db');

var Schema = mongoose.Schema;

var Classify = new Schema({
	name:{type:String},
	createtime:{type:Date}
})

module.exports = mongoose.model("Classify",Classify)
