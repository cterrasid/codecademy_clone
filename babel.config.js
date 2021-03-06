module.exports = (api) => {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3.9
            }
        ],
        [
            "@babel/preset-react",
            {
                runtime: "automatic"
            }
        ]
    ];

    const plugins = [
        [
            "module-resolver",
            {
                alias: {
                    "~": "./src",
                    Components: "./src/components",
                    Pages: "./src/pages",
                    Images: "./src/images",
                    Icons: "./src/icons",
                    Fonts: "./src/fonts",
                    Patterns: "./src/patterns"
                }
            }
        ]
    ];

    return { presets, plugins };
};