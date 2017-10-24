/*Creating a Vehicle based class which the three types of vechicles can be derived from and create many instance of Them.
*/

class Vehicle{
	constructor(name, color, energySource, speed, brand){
		this.name = name;
		this.color = color;
		this.speed = speed;
		this.brand = brand;
		this.energySource = energySource;
	}

	toString(){
		return this.name;
	}

	canFly(){
		if (this.numberOfWings >1 ){
			return ` ${ this.name } is a flying Vehicle`;
		}else{
			return ` ${ this.name } cannot fly`;
		}
	}

	canMoveOnGround(){
		if (this.numberOfWheels > 1){
			return ` ${ this.name } can move on ground`
		}
	}

	canFloat(){
		if ( this.upThrust == 'yes'){
			return ` ${ this.name } can float`
		}else{
			return ` ${ this.name } cannot float`
		}
	}

	canSubmerge(){
		if ( this.numberOfBallastTanks > 1){
			return ` ${ this.name } can submerge`
		}else{
			return ` ${ this.name } cannot submerge because it is a ${this.type}`
		}
	}
}

class AirCraft extends Vehicle{
	constructor(name, color, brand, speed, type, energySource, numberOfWheels, numberOfWings){
		super(name, color, energySource, speed, brand);
		this.type = type;
		this.numberOfWheels = numberOfWheels;
		this.numberOfWings = numberOfWings;
	}
	
}

class LandVehicle extends Vehicle{
	constructor(name, color, brand, speed, type, energySource, numberOfWheels){
		super(name, color, energySource, speed, brand);
		this.type = type;
		this.brand = brand;
		this.numberOfWheels = numberOfWheels;
	}

}

class WaterVehicle extends Vehicle{
	constructor(name, color, brand, speed, type, energySource,  numberOfBallastTanks, numberOfWheels = 0, upThrust = 'yes'){
		super(name, color, energySource, speed, brand);
		this.type = type;
		this.brand = brand;
		this.numberOfWheels = numberOfWheels;
		this.upThrust = upThrust;
		this.numberOfBallastTanks = numberOfBallastTanks;
	}
}

let car = new LandVehicle('Ferrari', 'yellow', 'porshe', 100, 'car', 'gasoline', 4)
console.log(car.toString());
console.log(car.color);
console.log(car.brand);
console.log(car.energySource);
console.log(car.canSubmerge());
console.log(car.canMoveOnGround());
console.log(car.canFloat());
console.log(car.canFly());

let boat = new WaterVehicle('A Day Away', 'white', '22-2 Venture', 300, 'boat', 2, 'diesel or gasoline', 'yes');
console.log(boat.toString());
console.log(boat.color);
console.log(boat.brand);
console.log(boat.energySource);
console.log(boat.canSubmerge());
console.log(boat.canMoveOnGround());
console.log(boat.canFloat());
console.log(boat.canFly());

let submarine = new WaterVehicle('Exploring Water', 'black', 'Cable 555', 100, 'submarine', 'diesel or gasoline', 5);
console.log(submarine.toString());
console.log(submarine.color);
console.log(submarine.brand);
console.log(submarine.energySource);
console.log(submarine.numberOfBallastTanks);
console.log(submarine.canSubmerge());
console.log(submarine.canMoveOnGround());
console.log(submarine.canFloat());
console.log(submarine.canFly());

let aeroplane = new AirCraft('Boeing 777', 'white', 'SoarAway',  1000, 'Kerosine', 'airplane', 17, 2)
console.log(aeroplane.toString());
console.log(aeroplane.color);
console.log(aeroplane.brand);
console.log(aeroplane.energySource);
console.log(aeroplane.canSubmerge());
console.log(aeroplane.canMoveOnGround());
console.log(aeroplane.canFloat());
console.log(aeroplane.canFly());
