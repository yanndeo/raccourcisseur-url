 const express = require('express');
 const router = express.Router();

 const Url = require('../models/Url');






//@route GET   /:codeusrl
//desc   Redirect  to long URL
router.get('/:code', async(req, res)=>{

    console.log(req.params.code)
        try {
            const url = await Url.findOne({ urlCode: req.params.code });
            console.log(url)
            if(!url){
               return res.status(404).json('no url found')
            }else{
               return res.redirect(url.longUrl);
            }

        } catch (error) {
            console.log('<<<<<<<<<< Erro-',error)
             res.status(404).json('Server eror')

        }



})

module.exports = router;