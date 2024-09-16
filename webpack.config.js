const path = require('path');
const cors = require('cors');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'wallet-ui.js',
            library: 'walletUI',
            libraryTarget: 'umd',
            globalObject: 'typeof self !== \'undefined\' ? self : this',
        },
        externals: isProduction ? {
            'react': {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React'
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'ReactDOM',
                root: 'ReactDOM'
            },
            'react-redux': {
                commonjs: 'react-redux',
                commonjs2: 'react-redux',
                amd: 'ReactRedux',
                root: 'ReactRedux'
            }
        } : {},
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|webp)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: undefined, // This removes the size constraint
                                encoding: 'base64'
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new DefinePlugin({
                'process.env.PUBLIC_URL': JSON.stringify('/')
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            contentBase: './dist',
            port: 3001,
            before: function (app) {
                app.use(cors({
                    origin: 'http://localhost:3000'
                }));
            }
        }
    };
};