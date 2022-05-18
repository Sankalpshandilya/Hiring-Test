require('./models/User');
require('./models/Detail');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const detailRoutes = require('./routes/detailRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);
app.use(detailRoutes);

const mongoUri =
	'mongodb+srv://admin:passwordpassword@cluster0.i1uhj.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
	console.error('Caught an error', err);
});
app.get('/', requireAuth, (req, res) => {
	res.send(`Your email:${req.user.email}`);
});

app.listen(3000, () => {
	console.log('Listening at port 3000');
});