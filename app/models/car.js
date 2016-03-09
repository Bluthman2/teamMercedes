var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
	local: {
		VIN : String,
		classification : String,
		year : String,
		model : String,
		color : String,
		type : String,
		accessories : String
	}
});

module.exports = mongoose.model('Car', carSchema);