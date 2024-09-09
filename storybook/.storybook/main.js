const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    '@storybook/addon-interactions',
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: {
                    mode: "local",
                    localIdentName: "[name]__[local]__[hash:base64:5]",
                  },
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              require.resolve("style-loader"),
              require.resolve("css-loader"),
              require.resolve("sass-loader"),
            ],
          },
        ],
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    if (!config.module.rules) {
      config.module.rules = [];
    }

    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test && rule.test.toString() === "/\\.css$/"
    );
    
    if (ruleCssIndex !== -1) {
      config.module.rules[ruleCssIndex].use = config.module.rules[ruleCssIndex].use.map((item) => {
        if (item.loader && item.loader.includes("/css-loader/")) {
          item.options.modules = {
            mode: "local",
            localIdentName:
              configType === "PRODUCTION"
                ? "[local]__[hash:base64:5]"
                : "[name]__[local]__[hash:base64:5]",
          };
        }
        return item;
      });
    } else {
      config.module.rules.push({
        test: /\.css$/,
        sideEffects: true,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: {
                mode: "local",
                localIdentName:
                  configType === "PRODUCTION"
                    ? "[local]__[hash:base64:5]"
                    : "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      });
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-typescript'),
            ],
            plugins: [
              [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
            ],
          },
        },
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      'app': path.resolve(__dirname, '../oncokb-public/src/main/webapp/app'),
    };

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;