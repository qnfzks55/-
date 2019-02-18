/**
 * webpack.config.prod.js
 * Author : LMJ
 * Date : 18.07.04
 * Update : 19.02.13
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 옮김
/*const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');*/ // css 압축
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 폴더 및 파일들 복사
/*const $ = require('jquery');*/
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 정적파일, 사용전 파일정리
const src_path = './src/';

module.exports = {
    mode: 'production', /* webpack 4에서 새로추가됨 */
	optimization: { /* webpack 4에서 새로추가됨 */
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
    devtool: 'cheap-module-source-map', // 개발자 도구
    entry: src_path + 'js/app.js', // 번들링 포인트(root 모듈의 위치 또는 시작지점), string 또는 배열로 입력
    output: {
        path: path.join(__dirname, './dist'),
        filename: './js/bundle.js' // 번들파일 네임
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
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
     /* new webpack.optimize.UglifyJsPlugin({ // 압축,console제거, 소스맵 보존
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        }),*/
        new MiniCssExtractPlugin({ /* webpack 4에서 새로추가됨 */
	        filename: "./css/common.css"
        }),
        new HtmlWebpackPlugin({
            template: src_path + 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.ProvidePlugin({ // 라이브러리 임포트
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([
            { from: './src/img/**', to: './img', flatten: true } // flatten : 루트는 뺀 파일 이름만 복사
        ]),
	    new CleanWebpackPlugin(['dist'])
    ]
};
