const path = require('path')
 
module.exports = {
    mode: 'development',
    //Arquivo de entrada
    entry: './src/main.js',
    //Arquivo de saida
    output: {
        path: path.resolve(__dirname, 'public', 'assets','js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },
    {
        test: /\.css$/,
        use: ['style-loader','css-loader']
    }]
    },
    devtool: 'source-map'
}

