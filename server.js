const express = require('express')
const serveStatic = require('serve-static')
const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

const { execSync } = require('child_process');

var port = process.env.PORT || 3000

const files = [
  'index.mdx',
  'imprint.mdx',
  '404.js'
]

const urlPrefix = process.env.REMOTE_PAGES_PREFIX 
  ? process.env.REMOTE_PAGES_PREFIX.replace(/\/?$/, '/') 
  : 'https://raw.githubusercontent.com/retani/2038-web/master/src/pages/'
const targetPath = 'src/pages/'

var app = express()

app.use(serveStatic('dist'))

app.get('/rebuild-content', async function (req, res) {
  for (file of files) {
    const url = urlPrefix + file
    const target = targetPath + file
    await download(url, target)
  }
  await execSync('npm run build')
  res.send('DONE')
})

console.log("Listening to port " + port)
app.listen(port)


/*********************/

async function download (url, target ) {  
  const path = Path.resolve(__dirname, target)
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}
