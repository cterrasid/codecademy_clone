const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelLoader = {
    test: /\.(js|jsx)$/,
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

const fileLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: "file-loader"
};

module.exports = (env, arg) => {
    const { mode } = arg;
    const isProduction = mode === "production";

    return {
        entry: "./src/index.jsx",
        output: {
            filename: isProduction ? "[name].[contenthash].js" : "[name].js",
            path: path.resolve(__dirname, "public"),
            publicPath: ""
        },
        resolve: {
            extensions: [".js", ".json", ".jsx"]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ template: "src/index.html" })
        ],
        module: {
            rules: [babelLoader, styleLoader, fileLoader]
        },
        devServer: {
            open: true,
            port: 3000,
            compress: true,
            historyApiFallback: true
        }
    };
};