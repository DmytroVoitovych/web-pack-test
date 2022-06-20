//плюшечки для вебпака 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'build'),    
    filename: 'mybndl.js',
    },
    module: {
        rules: [
               {test: /\.scss$/i,
                use: [
                    // 'style-loader', // это конфликтовало с плагином
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'sass-loader', 
                    "postcss-loader",
                 ],
            },
            
            { test: /\.html$/i,
        loader: "html-loader",},
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                   
                }
            },
        ],  
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin(),
       
    ],
    
     devServer: {
         port: 2332,
         open: true,
    },
     stats: {
    logging: 'error',
  },
};

