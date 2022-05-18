const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: Number,
		required: true,
	},
});

mongoose.model('Detail', detailSchema);
