const express = require('express');
const serverless = require('serverless-http');
const ipInfo = require("ipinfo");
const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    //const geo = geoip.lookup(ipg);

    ipInfo((err, cLoc) => {
        if (cLoc.country==="IN")
            {
                res.redirect('https://www.google.com');
            }
            else
            {
                res.redirect("https://www.dropbox.com/s/z9jktzd4rmca4yc/data.txt?dl=1");
            }        
        console.log(cLoc.country);
    });

});
app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);


