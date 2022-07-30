//to get started npm install express
//first step is to require express
const express = require('express');
const app = express();
//lets listen in our favorite port
app.listen('8080');
//setting up the routes
app.get('/',(req, res)=> {
	res.sendFile('./views/index.html', { root : __dirname});
});

app.get('/about',(req, res)=> {
	res.sendFile('./views/about.html', { root : __dirname});
});

app.get('/support',(req, res)=> {
	res.sendFile('./views/support.html', { root : __dirname});
});

app.use('/',(req, res)=> {
	res.status(404).sendFile('./views/404.html', { root : __dirname});
});






















