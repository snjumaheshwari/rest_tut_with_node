const express = require('express');

const app = express();

// Routes
app.get('/',(req,res) => {
	res.send('we are on home');
});

// How to we start listnening to the server
app.listen(3000); 