const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');
const ipInfo = require("ipinfo");
const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);
    //const geo = geoip.lookup(ipg);
    //const ipg="14.140.206.158";
    const ipg=clientIp.toString();
    ipInfo(ipg, (err, cLoc) => {
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


