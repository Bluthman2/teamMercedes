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
		var queryString = "SELECT * FROM cars WHERE";
		if(req.body.VIN != ""){
			queryString += " VIN = " + req.body.VIN;
			num++;
		}
		if(req.body.Classification != ""){
			if(num > 0){
				queryString+= " AND classification = '" + req.body.Classification + "'";
				num++;
			}
			else{
				queryString+= " classification = '" + req.body.Classification + "'";
				num++;
			}
		}
		if(req.body.Year != ""){
			if(num > 0){
				queryString+= " AND year = " + req.body.Year;
				num++;
			}
			else{
				queryString+= " year = " + req.body.Year;
				num++;
			}
		}
		if(req.body.Model != ""){
			if(num > 0){
				queryString+= " AND model = '" + req.body.Model + "'";
				num++;
			}
			else{
				queryString+= " model = '" + req.body.Model + "'";
				num++;
			}
		}
		if(req.body.Type != ""){
			if(num > 0){
				queryString+= " AND type = '" + req.body.Type + "'";
				num++;
			}
			else{
				queryString+= " type = '" + req.body.Type + "'";
				num++;
			}
		}
		console.log(queryString);
		db.query(queryString)
		.then(function(results){
			res.render('cars.ejs', { user: req.user, cars: results });
		});
	});

	app.get('/newCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["New"])
		.then(function(results){
			res.render('newCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/insertCar', isLoggedIn, function(req, res){
		res.render('insertCars.ejs', { user: req.user });
	});

	app.post('/insertCar', function(req, res){
		var queryString = "INSERT INTO cars(VIN,classification,year,type,model,color,accessories) "+
			"values($1,$2,$3,$4,$5,$6,$7)";
		db.query(queryString,[req.body.VIN,req.body.Classification,req.body.Year,
			req.body.Type,req.body.Model,req.body.Color,req.body.Accessories])
		.then(function(results){
			res.render('insertCars.ejs', { user: req.user });
		});
		
	});

	app.post('/removeCar/:vin/:classification', function(req, res){
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
							res.render('soldCars.ejs', { user: req.user, cars: results });
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
						res.render('newCars.ejs', { user: req.user, cars: results });
					});
				}
				else if(req.params.classification == "Used"){
					db.query(queryString,["Used"])
					.then(function(results){
						res.render('usedCars.ejs', { user: req.user, cars: results });
					});
				}
				else if(req.params.classification == "Auction"){
					db.query(queryString,["Auction"])
					.then(function(results){
						res.render('auctionCars.ejs', { user: req.user, cars: results });
					});
				}
				else if(req.params.classification == "Junk"){
					db.query(queryString,["Junk"])
					.then(function(results){
						res.render('junkCars.ejs', { user: req.user, cars: results });
					});
				}
			});
		}
	});

	app.get('/usedCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Used"])
		.then(function(results){
			res.render('usedCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/auctionCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Auction"])
		.then(function(results){
			res.render('auctionCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/junkCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Junk"])
		.then(function(results){
			res.render('junkCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/soldCars', isLoggedIn, function(req, res){
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Sold"])
		.then(function(results){
			res.render('soldCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/viewMaintenance', function(req, res){
		var queryString = "SELECT * FROM maintenance";
		db.query(queryString)
		.then(function(results){
			res.render('maintenance.ejs', { user: req.user, records: results });
		});
	});

	app.post('/viewMaintenance/:vin', function(req, res){
		var queryString = "SELECT * FROM maintenance WHERE vin = $1";
		db.query(queryString,[req.params.vin])
		.then(function(results){
			res.render('maintenance.ejs', { user: req.user, records: results });
		});
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
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}