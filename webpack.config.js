const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/app.js'
    },
    performance : {
        hints : false
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['./ext/dist']),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            "@": path.resolve(__dirname, 'src/options/'),
            "src": path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            }
        ]
    }
};