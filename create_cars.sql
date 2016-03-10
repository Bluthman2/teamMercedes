CREATE TABLE IF NOT EXISTS cars(
	id serial PRIMARY KEY, 
	VIN integer,
	classification varchar(64),
	year integer,
	model varchar(64),
	color varchar(64),
	type varchar(64),
	accessories varchar(64)
);

INSERT INTO cars(VIN, classification,year,model,color,type,accessories) values(123,'new',2014,'camry','blue','car','none');
