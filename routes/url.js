const express = require('express');
const router = express.Router();

const valideUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');


//Models
const Url = require('../models/Url');




//@route POST /api/url/shorten
//desc   Create short URL
router.post('/shorten', (req, res)=>{

 
})



module.exports = router;