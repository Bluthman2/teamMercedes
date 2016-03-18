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

	app.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	app.get('/home', isLoggedIn, function(req, res){
		res.render('home.ejs', { user: req.user });
	});

	app.get('/newCars', isLoggedIn, function(req, res){
		// console.log("cars=");
		// var cars = json(Car.find({}));
		// prettyPrint(cars);
		
		// var myOtherVar = JSON.parse('<%-myVar%>');
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["New"])
		.then(function(results){
			res.render('newCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.post('/insertCar', function(req, res){
		// console.log("cars=");
		// var cars = json(Car.find({}));
		// prettyPrint(cars);
		
		// var myOtherVar = JSON.parse('<%-myVar%>');


		var cars;
		var queryString = "INSERT INTO cars(VIN,classification,year,type,model,color,accessories) "+
			"values($1,$2,$3,$4,$5,$6,$7)";
		db.query(queryString,[req.body.VIN,req.body.Classification,req.body.Year,
			req.body.Type,req.body.Model,req.body.Color,req.body.Accessories])
		.then(function(results){
			res.render('home.ejs', { user: req.user });
		});
		
	});

	app.get('/usedCars', isLoggedIn, function(req, res){
		// console.log("cars=");
		// var cars = json(Car.find({}));
		// prettyPrint(cars);
		
		// var myOtherVar = JSON.parse('<%-myVar%>');
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Used"])
		.then(function(results){
			res.render('usedCars.ejs', { user: req.user, cars: results });
		});
		
	});

	app.get('/auctionCars', isLoggedIn, function(req, res){
		// console.log("cars=");
		// var cars = json(Car.find({}));
		// prettyPrint(cars);
		
		// var myOtherVar = JSON.parse('<%-myVar%>');
		var cars;
		var queryString = "SELECT * FROM cars WHERE classification = $1";
		db.query(queryString,["Auction"])
		.then(function(results){
			res.render('auctionCars.ejs', { user: req.user, cars: results });
		});
		
	});

	// app.get('/profile', isLoggedIn, function(req, res){
	// 	console.log("car.count=");
	// 	prettyPrint(Car.count());
	// 	res.render('table.ejs', { user: req.user, count: {count: Car.count()}, cars: Car.find({}) });
	// });



	app.get('/:username/:password', function(req, res){
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