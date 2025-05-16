const express = require('express');
const router = express.Router();
const proyectos = require('../data/proyectos.json');

router.get('/', (req, res) => {
  res.render('index', { proyectos });
});

module.exports = router;
