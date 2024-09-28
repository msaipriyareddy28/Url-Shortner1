const dotEnv = require('dotenv');
const express = require('express');
const router = express.Router;
const urlController = require('../controllers/urlController')


dotEnv.config({path: '../.env'})

router.post('/', urlController.createShortUrl)

router.get('/:shotUrlId', urlController.redirectToOriginalUrl)

router.delete('/', urlController.deleteUrl)

router.get('/',(req, res)=>{
    res.json({message: 'Success'})
})

module.exports = router