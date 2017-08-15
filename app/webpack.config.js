var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './build/js/index.js',
    output: {
        path: __dirname + '/',
        filename: 'public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname
            }
        ]       
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'node_modules/jquery/dist/jquery.min.js',
                to: 'public/components/jquery/jquery.min.js'
            },
            {
                from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                to: 'public/components/bootstrap/bootstrap.min.css'
            },
            {
                from: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
                to: 'public/components/bootstrap/bootstrap.min.js'
            },
            {
                from: 'node_modules/bootstrap/dist/fonts',
                to: 'public/components/bootstrap/fonts'
            }
        ])
    ]
}