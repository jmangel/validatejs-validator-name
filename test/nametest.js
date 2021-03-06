var test = require('tape');
var validate = require('validate.js');
var nameValidator = require('../');

validate.validators.name = nameValidator;

var goodData = {
	name: "John Mangel"
}

var badData = {
	name: "JAck1 Boss4"
}

var goodDataHard = {
	name: "Billie-Joe O'Reilly-Howard"
}

var goodDataForeign = {
	name: "Joãozinho O'Tömáß-Bunn Scott"
}

var constraints = {
	name: {
		name: {}
	}
}

test('name test', function(t){
	t.plan(4);

	t.notOk(validate(goodData, constraints));
	t.ok(validate(badData, constraints));
	t.notOk(validate(goodDataHard, constraints));
	t.notOk(validate(goodDataForeign, constraints));
});