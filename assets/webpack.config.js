const path = require('path');

module.exports = {
    entry: path.join(__dirname, './ts/index.tsx'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '../priv/static/js/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};