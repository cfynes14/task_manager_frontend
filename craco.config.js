module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
