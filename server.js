const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const engine = require('consolidate');

const app = express();
const port = process.env.PORT || 3000;

app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));


app.listen(port, console.log(`App is up on port ${port}`));