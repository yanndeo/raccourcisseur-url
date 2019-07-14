const express = require('express');
const router = express.Router();

const valideUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');


//Models
const Url = require('../models/Url');




//@route POST /api/url/shorten
//desc   Create short URL
router.post('/shorten', async(req, res)=>{

    const {longUrl} = req.body;
    const baseUrl = config.get('baseUrl');

    //Check base url
    if(!valideUrl.isUri(baseUrl)){
      return  res.status(401).json('Invalid base url');
    }

    //Check long url
    if(valideUrl.isUri(longUrl)){
       
        
        try {
            let url = await Url.findOne({ longUrl });

            if (url) {
                return res.status(201).json(url)

            } else {

                //Create url code
                const urlCode = shortid.generate()
                const shortUrl = baseUrl + '/' + urlCode

               url= new Url({ longUrl, shortUrl, urlCode });

               await url.save();

               res.status(201).json({ url});
            }
        }catch (error) {
            console.error(error)
            res.status(500).json('Server error')
        }

    }else{

        res.status(401).json('Invalid long url')

    }



})



module.exports = router;