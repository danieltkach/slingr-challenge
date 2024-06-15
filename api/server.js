const express = require('express');
const server = express();
const credentials = require('./middleware/credentials');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./db');

// Middleware ---
server.use(credentials);
server.use(cors({
	origin: [
		'http://localhost:3000',
		'http://localhost:5173',
		'http://localhost:5174',
	]
}));
server.use(express.json());
server.use(cookieParser());

// Routes ---
server.get('/', (req, res, next) => {
	return res.json(`Slingr Challenge API.`);
});

server.use('/items', require('./routes/items'));

// Server connections ---
const PORT = process.env.PORT || 8080;
connectDB();
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});
