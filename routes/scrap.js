const express = require('express');
const scrap = express.Router();
const checkToken = require("../auth/token_validation");

const usersController = require("../controllers/scrap.js");

scrap.post('/lets-scrape', checkToken, usersController.scrapMedia)

module.exports = scrap;
