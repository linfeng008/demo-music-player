let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let config = require('./webpack.config.js');

let app = new(express)();
const port = 3000;
let compiler= webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req,res) => {
  res.sendfile(path.join(__dirname, '/demo/index.html'))
})

app.listen(port, function(error){
  if(error){
    console.log(error);
  }else{
    console.info('listening on port %s. open up http://localhost:%s/ in your browser.',port, port);
  }
});

