var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: './blog/frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, 'blog/frontend/static/frontend/bundles/'),
        filename: "[name]-[hash].js"
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
        /*
        loader: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
            //{test: /\.css$/, use: ['style-loader','css-loader']}
        ],*/
    },
    
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
};