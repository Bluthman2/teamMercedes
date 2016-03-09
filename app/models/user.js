var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String
	}
});

module.exports = mongoose.model('User', userSchema);

/***********************************
Cars (VIN, Classification, Year, Model, Color, Type, Accessories)
Maintenance (ID (References Cars.VIN), date, description)
Owners (ID (References Cars.VIN), FirstName, LastName, Phone, Email)

Note: the “Classification” of a car can be ‘New’, ‘Used’, ‘Auction’, or ‘Junk’.
************************************/


// var maintenanceSchema = mongoose.Schema({
// 	local: {
// 		VIN : integer,
// 		date : timestamp,
// 		description : String
// 	}
// });

// var ownerSchema = mongoose.Schema({
// 	local: {
// 		VIN : integer,
// 		firstName : String,
// 		lastName : String,
// 		phoneNumber : integer,
// 		email : String
// 	}
// });


// module.exports = mongoose.model('Maintenance', maintenanceSchema);
// module.exports = mongoose.model('Owner', ownerSchema);