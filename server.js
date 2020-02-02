var express = require('express')
var serveStatic = require('serve-static')

const { execSync } = require('child_process');

var port = process.env.PORT || 3000

var app = express()

app.use(serveStatic('dist'))

app.get('/rebuild-content', async function (req, res) {
  await execSync('npm run build')
  res.send('DONE')
})

console.log("Listening to port " + port)
app.listen(port)