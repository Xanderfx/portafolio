const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', rutas);

app.get('/proyectos', (req, res) => {
  res.render('proyectos');
});

app.get('/proyectos/voz-del-pueblo', (req, res) => {
  res.render('voz-del-pueblo');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
