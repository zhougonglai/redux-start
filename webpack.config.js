var path = require('path');

var DEV = path.resolve(__dirname,"src");
var PRO = path.resolve(__dirname,"/dis");

module.exports = {
    entry: {
        entry:DEV + '/entry.js'
    },
    output: {
        path:PRO,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer:{
      inline:true,
      port:3333
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude:/node_modules/,
                loader:'babel',
                query: {
                    presets:['es2015','react']
                }
            }
        ]
    }
};