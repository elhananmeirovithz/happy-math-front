var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');


// const extractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")
// var CleanWebpackPlugin = require("clean-webpack-plugin")

// var extractPlugin = new extractTextPlugin ({
//     filename: 'main.css'
// });

module.exports = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        // publicPath: '/app/'
    },
    // devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                        
                    }
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: extractPlugin.extract({
            //         use: ['css-loader','sass-loader'] 
            //     })
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(jpg|png)$/,
            //     use: [
            //         {
            //             loader:'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'img/',
            //                 publicPath: 'img/'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        // extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_DIR + '/index.html',
        }), /* this may be dupplicate for every html file to be generated in the dist */
        // new CleanWebpackPlugin(['dist']) /* remove the dist folder */
    ]
};