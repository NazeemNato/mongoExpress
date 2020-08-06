const mongoose = require('mongoose')

const UrlSchema = mongoose.Schema({
	username: {
		type:String,
		require: true
	},
	url: {
		type:String,
		require: true
	},
	date: {
		type:Date,
		default: Date.now
	}
})


module.exports = mongoose.model('Url',UrlSchema)