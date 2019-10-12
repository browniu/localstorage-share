const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'localstorageShare',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
