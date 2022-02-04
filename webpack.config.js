const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const babelLoader = {
    test: /\.js$/,
    loader: "babel-loader",
    options: {
        presets: [
            ["@babel/preset-react", { runtime: "automatic" }]
        ]
    },
    exclude: /node_modules/
};

const styleLoader = {
    test: /\.(css|sass|scss)$/,
    use: ["style-loader", "css-loader", "sass-loader"]
};

module.exports = (env, arg) => {
    const { mode } = arg;
    const isProduction = mode === "production";

    return {
        output: {
            filename: isProduction ? "[name].[contenthash].js" : "[name].js",
            path: path.resolve(__dirname, "public"),
            publicPath: ""
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ template: "src/index.html" })
        ],
        module: {
            rules: [babelLoader, styleLoader]
        },
        devServer: {
            open: true,
            port: 3000,
            compress: true,
            historyApiFallback: true
        }
    };
};