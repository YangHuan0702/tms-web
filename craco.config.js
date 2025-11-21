const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/service/api"),
    },
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnable: true,
          },
        },
      },
    },
  ],
};
