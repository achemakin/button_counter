const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'build.js',
        publicPath: 'build/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("build.css"),
    ]
};

module.exports = conf;