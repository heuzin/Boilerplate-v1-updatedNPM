const path = require('path')
let mode = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node.modules/,
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    mode: mode,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};