function prettyPrint(jsonObject){
    console.log(JSON.stringify(jsonObject,null,2));
}


var User = require('./models/user');
var Car = require('./models/car');
var config = require('../config/config')

var DB_URL = "pg://"+ config.username + ":"+ config.password+"@"+config.ipAddress+":5432/bluthman";
var Promise = require("bluebird");
var pg = require("pg");
var pgp = require("pg-promise")({promiseLib: Promise});
var db = pgp(DB_URL);


module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	app.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/home', //profile
		failureRedirect: '/login',
		failureFlash: true
	}));

	// app.get('/signup', function(req, res){
	// 	res.render('signup.ejs', { message: req.flash('signupMessage') });
	// });


	// app.post('/signup', passport.authenticate('local-signup', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/signup',
	// 	failureFlash: true
	// }));

	// app.get('/profile', isLoggedIn, function(req, res){
	// 	res.render('profile.ejs', { user: req.user });
	// });

	app.get('/home', isLoggedIn, function(req, res){
		res.render('home.ejs', { user: req.user });
	});

	app.get('/cars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars";
		db.query(queryString)
		.then(function(results){
			res.render('cars.ejs', { user: req.user, cars: results });
		});
	});

	app.post('/cars', isLoggedIn, function(req, res){
		var cars;
		var num = 0;
		console.log("clas="+req.body.Classification);
		var queryString = "SELECT * FROM cars";
		if(req.body.VIN != ""){
			queryString += " WHERE VIN = '" + req.body.VIN + "'";
			num++;
		}
		if(req.body.Classification != ""){
			if(num > 0){
				queryString+= " AND classification = '" + req.body.Classification + "'";
				num++;
			}
			else{
				queryString+= " WHERE classification = '" + req.body.Classification + "'";
				num++;
			}
		}
		if(req.body.Year != ""){
			if(num > 0){
				queryString+= " AND year = " + req.body.Year;
				num++;
			}
			else{
				queryString+= " WHERE year = " + req.body.Year;
				num++;
			}
		}
		if(req.body.Model != ""){
			if(num > 0){
				queryString+= " AND model = '" + req.body.Model + "'";
				num++;
			}
			else{
				queryString+= " WHERE model = '" + req.body.Model + "'";
				num++;
			}
		}
		if(req.body.Type != ""){
			if(num > 0){
				queryString+= " AND type = '" + req.body.Type + "'";
				num++;
			}
			else{
				queryString+= " WHERE type = '" + req.body.Type + "'";
				num++;
			}
		}
		console.log(queryString);
		db.query(queryString)
		.then(function(results){
			res.render('cars.ejs', { user: req.user, cars: results });
		});
	});

	app.post('/moreInfo/:vin', function(req, res){
		var queryString = "SELECT * FROM cars WHERE VIN = $1";
		db.query(queryString,[req.params.vin])
		.then(function(results){
			res.render('moreInfo.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/newCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["New"])
		.then(function(results){
			res.render('newCars.ejs', { user: req.user, cars: results, message: "" });
		});
		
	});

	app.get('/insertCar', isLoggedIn, function(req, res){
		res.render('insertCars.ejs', { user: req.user, message: "" });
	});

	app.post('/insertCar', function(req, res){
		var queryString1 = "SELECT * FROM cars WHERE VIN = $1";
		db.query(queryString1,[req.body.VIN])
		.then(function(results){
			if(results.length > 0){
				res.render('insertCars.ejs', { user: req.user, message: "That VIN number already exists."});	
			}
			else if(req.body.VIN.length != 17){
				res.render('insertCars.ejs', { user: req.user, message: "Incorrect VIN format. Example: 1HGBH41JXMN109186"});	
			}
			else{
				var queryString = "INSERT INTO cars(VIN,classification,year,type,model,color,accessories) "+
				"values($1,$2,$3,$4,$5,$6,$7)";
				db.query(queryString,[req.body.VIN,req.body.Classification,req.body.Year,
					req.body.Type,req.body.Model,req.body.Color,req.body.Accessories])
				.then(function(results){
					res.render('insertCars.ejs', { user: req.user, message: ""  });
				});
			}
		});		
	});

	app.post('/removeCar/:vin/:classification', isLoggedIn, function(req, res){
		if(req.user.local.admin == true){
			if(req.params.classification == "Sold"){
				var queryString1 = "DELETE from maintenance WHERE vin = $1";
				db.query(queryString1,[req.params.vin])
				.then(function(results){
					var queryString2 = "DELETE from owners WHERE vin = $1";
					db.query(queryString2,[req.params.vin])
					.then(function(results){
						var queryString3 = "DELETE from cars WHERE vin = $1";
						db.query(queryString3,[req.params.vin])
						.then(function(results){
							var queryString4 = "SELECT * FROM cars WHERE classification = $1";
							db.query(queryString4,["Sold"])
							.then(function(results){
								res.render('soldCars.ejs', { user: req.user, cars: results, message: ""  });
							});
						});
					});
				});
			}
			else{
				var queryString = "DELETE from cars WHERE vin = $1";
				db.query(queryString,[req.params.vin])
				.then(function(results){
					var queryString = "SELECT * FROM cars WHERE classification = $1";
					if(req.params.classification == "New"){
						db.query(queryString,["New"])
						.then(function(results){
							res.render('newCars.ejs', { user: req.user, cars: results, message: ""  });
						});
					}
					else if(req.params.classification == "Used"){
						db.query(queryString,["Used"])
						.then(function(results){
							res.render('usedCars.ejs', { user: req.user, cars: results, message: ""  });
						});
					}
					else if(req.params.classification == "Auction"){
						db.query(queryString,["Auction"])
						.then(function(results){
							res.render('auctionCars.ejs', { user: req.user, cars: results, message: ""  });
						});
					}
					else if(req.params.classification == "Junk"){
						db.query(queryString,["Junk"])
						.then(function(results){
							res.render('junkCars.ejs', { user: req.user, cars: results, message: ""  });
						});
					}
				});
			}
		}
		else{
			var queryString = "SELECT * FROM cars WHERE classification = $1";
			if(req.params.classification == "New"){
				db.query(queryString,["New"])
				.then(function(results){
					res.render('newCars.ejs', { user: req.user, cars: results, message: "You do not have permission to remove vehicles." });
				});
			}
			else if(req.params.classification == "Used"){
				db.query(queryString,["Used"])
				.then(function(results){
					res.render('usedCars.ejs', { user: req.user, cars: results, message: "You do not have permission to remove vehicles." });
				});
			}
			else if(req.params.classification == "Auction"){
				db.query(queryString,["Auction"])
				.then(function(results){
					res.render('auctionCars.ejs', { user: req.user, cars: results, message: "You do not have permission to remove vehicles." });
				});
			}
			else if(req.params.classification == "Junk"){
				db.query(queryString,["Junk"])
				.then(function(results){
					res.render('junkCars.ejs', { user: req.user, cars: results, message: "You do not have permission to remove vehicles." });
				});
			}
			else if(req.params.classification == "Sold"){
				var queryString4 = "SELECT * FROM cars WHERE classification = $1";
				db.query(queryString4,["Sold"])
				.then(function(results){
					res.render('soldCars.ejs', { user: req.user, cars: results, message: "You do not have permission to remove vehicles." });
				});
			}
		}
	});

	app.get('/usedCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Used"])
		.then(function(results){
			res.render('usedCars.ejs', { user: req.user, cars: results, message: "" });
		});
		
	});

	app.get('/auctionCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Auction"])
		.then(function(results){
			res.render('auctionCars.ejs', { user: req.user, cars: results, message: "" });
		});
		
	});

	app.get('/junkCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Junk"])
		.then(function(results){
			res.render('junkCars.ejs', { user: req.user, cars: results, message: "" });
		});
		
	});

	app.get('/soldCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Sold"])
		.then(function(results){
			res.render('soldCars.ejs', { user: req.user, cars: results, message: "" });
		});
		
	});

	app.get('/viewMaintenance', function(req, res){
		var queryString = "SELECT * FROM maintenance";
		db.query(queryString)
		.then(function(results){
			res.render('maintenance.ejs', { user: req.user, records: results, vin:"", message: "", flag: "good"  });
		});
	});

	app.post('/viewMaintenance/:vin', function(req, res){
		var queryString = "SELECT * FROM maintenance WHERE vin = $1";
		db.query(queryString,[req.params.vin])
		.then(function(results){
			res.render('maintenance.ejs', { user: req.user, records: results, vin:req.params.vin, message: "", flag: "good"  });
		});
	});

	app.post('/addMaintenance', function(req, res){
		var queryString = "SELECT * FROM cars WHERE vin = $1";
		db.query(queryString,[req.body.vin])
		.then(function(results){
			if(results.length > 0){
				var queryString = "INSERT INTO maintenance(VIN,date,description) "+
				"values($1,$2,$3)";
				console.log("date="+req.body.Date);
				db.query(queryString,[req.body.vin,req.body.Date,req.body.Details])
				.then(function(results){
					var queryString = "SELECT * FROM maintenance WHERE vin = $1";
					db.query(queryString,[req.body.vin])
					.then(function(results){
						res.render('maintenance.ejs', { user: req.user, records: results, vin:req.params.vin, message: "Successfully added new record.", flag: "good"  });
					});
				});
			}
			else{
				var queryString = "SELECT * FROM maintenance";
				db.query(queryString)
				.then(function(results){
					res.render('maintenance.ejs', { user: req.user, records: results, vin:"",message: "VIN does not exist.", flag: "bad" });
				});
			}
		});
	});

	app.post('/removeMaintenance/:id', isLoggedIn, function(req, res){
		if(req.user.local.admin == true){
			var queryString1 = "DELETE from maintenance WHERE id = $1";
				db.query(queryString1,[req.params.id])
				.then(function(results){
					res.redirect('/viewMaintenance');
				});
		}
		else{
			var queryString = "SELECT * FROM maintenance";
			db.query(queryString,[req.body.vin])
			.then(function(results){
				res.render('maintenance.ejs', { user: req.user, records: results, vin:"", message: "You do not have permission to remove records.", flag: "bad" });
			});
		}
	});

	app.get('/viewOwners', function(req, res){
		var queryString = "SELECT * FROM owners";
		db.query(queryString)
		.then(function(results){
			res.render('owners.ejs', { user: req.user, records: results });
		});
	});
	app.post('/viewOwners/:vin', function(req, res){
		var queryString = "SELECT * FROM owners WHERE vin = $1";
		db.query(queryString,[req.params.vin])
		.then(function(results){
			res.render('owners.ejs', { user: req.user, records: results });
		});
	});

	app.get('newUser/:username/:password', function(req, res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " " + newUser.local.password);
		newUser.save(function(err){
			if(err)
				throw err;
		});
		res.send("Success!");
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	console.log("called isLoggedIn");
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}

