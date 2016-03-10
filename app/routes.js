function prettyPrint(jsonObject){
    console.log(JSON.stringify(jsonObject,null,2));
}


var User = require('./models/user');
var Car = require('./models/car');

var DB_URL = "pg://power_user:softwareCode@54.187.59.226:5432/bluthman";
var Promise = require("bluebird");
var pg = require("pg");
var pgp = require("pg-promise")({promiseLib: Promise});
// var DB_URL = "pg://localhost:5432/bluthman";
var db = pgp(DB_URL);


module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	app.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/table', //profile
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

	app.get('/table', isLoggedIn, function(req, res){
		// console.log("cars=");
		// var cars = json(Car.find({}));
		// prettyPrint(cars);
		
		// var myOtherVar = JSON.parse('<%-myVar%>');
		var cars;
		var queryString = "SELECT id,VIN,type FROM cars";
		db.query(queryString,function(err,result){
			prettyPrint(result);
		})
		.then(function(results){
			res.render('table.ejs', { user: req.user, cars: results });
		})
		
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