const express = require('express');
const mongoose = require('mongoose');

const Detail = mongoose.model('Detail');

const router = express.Router();

router.get('/details', async (req, res) => {
	const details = await Detail.find({ userId: req.user._id });
	res.send(details);
});

router.post('/details', async (req, res) => {
	const { name, age, phone, gender, email } = req.body;
	console.log(req.body);

	if (!name || !age || !phone || !gender || !email) {
		return res
			.status(422)
			.send({ error: 'You must provide name, age and phone' });
	}
	try {
		const detail = new Detail({
			name,
			age,
			phone,
			gender,
			email,
		});
		await detail.save();
		res.send(detail);
	} catch (err) {
		res.status(422).send({ error: err.messgae });
	}
});

module.exports = router;
