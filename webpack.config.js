var glob = require('glob');
var path = require('path');

module.exports = {
    entry: glob.sync(path.join(__dirname, 'src/js/*.js')),
    mode: 'none',
    output : {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}