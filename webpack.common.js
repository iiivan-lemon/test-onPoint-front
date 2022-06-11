const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.ts'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMap: true,
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.pug'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Modules: path.resolve(__dirname, 'src/modules/'),
            Routing: path.resolve(__dirname, 'src/routing/'),
            Utils: path.resolve(__dirname, 'src/utils/'),
        },
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin(),

    ],
};