const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimizatoin = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(!isDev){
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
    return config;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill','./index.jsx'],
    output:{
        filename: '[name][hash].js',
        path:path.resolve(__dirname, 'dist')
    },
    optimization: optimizatoin(),
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 4200,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: isDev,
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            minify:{
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })

    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: [{ 
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        hmr: isDev,
                        loadAll: true
                    }
                }, 
                'css-loader']
            },{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }    
        ]
    }
}