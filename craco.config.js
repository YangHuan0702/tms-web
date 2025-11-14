const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
