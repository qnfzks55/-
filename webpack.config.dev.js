/**
 * webpack.config.dev.js
 * Author : LMJ
 * Date : 18.07.04
 * Update : 19.02.13
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 옮김
/*const ExtractTextPlugin = require('extract-text-webpack-plugin');*/ // css head 안으로 옮김 (
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const src_path = './src/';

module.exports = {
    mode: 'development', // 개발모드
    devtool: 'cheap-eval-source-map', // 개발자 도구
    entry: src_path + 'js/app.js',// 번들링 포인트
    output: { // 배포 파일
        /** 번들 파일 저장 폴더
         * __dirname : node에서 제공하는 node 파일의 경로를 담고 있는 특별한 변수
         * path.join('a', 'b')
         * path.join('a/', '/b')
         * path.join('a', '/b')
         * path.join('a/', 'b')
         * 등 / 에 상관없이 join() 메서드로 경로 오류를 잡아줌
         */
        path: path.join(__dirname, './dist'),
        filename: './js/bundle.js'
    },
    module: {
        rules: [ // 어플리케이션을 위해 적어줄 로더들 배열
	        {
		        test: /\.(scss|css)$/, // 로더가 적용될 파일 매칭을 위한 배열
		        /*use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})*/
		        use: ['css-hot-loader', MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                include: [path.join(__dirname, './src'), /node_modules/]
	        },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'raw-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    	babelrc: true,
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                exclude: /node_modules/,
                use: 'file-loader?name=[name].[ext]&publicPath=../img/&outputPath=./img/'
            },
            {
                test: /\.(eot|woff|ttf)$/i,
                exclude: /node_modules/,
                use: 'file-loader?name=[name].[ext]&publicPath=./fonts/&outputPath=./css/fonts/'
            },
            {
                test: /\.(jpe?g|png|gif|ico|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        ]
    },
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: src_path + 'index.html'
        }),
	    new MiniCssExtractPlugin({
		    filename: "./css/common.css"
	    }),
        /*new ExtractTextPlugin('./css/bundle.css'),*/ // 번들 css 네임
        new webpack.ProvidePlugin({ // 라이브러리 임포트
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devServer: {
        hot: true,
        contentBase: './dist',
        historyApiFallback: true
    }
};
