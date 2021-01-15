const express = require('express');
const DataService = require('../services/data.service');

const router = express.Router();

router.delete('/:id', DataService.deleteData);

router.get('/', DataService.getAllData);

router.get('/:id', DataService.getOneData);

router.patch('/:id', DataService.editData);

router.post('/', DataService.createNewData);

module.exports = router;
