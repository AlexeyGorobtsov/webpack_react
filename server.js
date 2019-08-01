const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = new express();
const config = require('./webpack.config');
const compiler = webpack(config);

const routes = require('./src/routes');
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}), routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});