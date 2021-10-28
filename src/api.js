const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');
const iplocate = require("node-iplocate");
const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);
    //const geo = geoip.lookup(ipg);
    const ipg=clientIp.toString();
    iplocate(ipg).then(function(results) {
        if (results.country_code==="IN")
            {
                res.redirect('https://www.google.com');
            }
            else
            {
                res.redirect("https://www.dropbox.com/s/z9jktzd4rmca4yc/data.txt?dl=1");
            }
        console.log("Country: " + results.country + " (" + results.country_code + ")"); 
        });
    

});
app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);



