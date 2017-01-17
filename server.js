var express = require('express')
 , app = express()
// per http://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address
app.enable('trust proxy')

app.get('*', function (req, res) {
    console.log(req.ips,req.ip, req.headers["accept-language"] ,req.headers['user-agent'],req)
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})

