module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/essentials"],
  // babel: async (options) => {
  //   console.log("MMMMMMMMMMMMMMMMMMMMMMMMM", options);
  //   return {
  //     ...options,
  //     presets: [
  //       ...options.presets,
  //       [
  //         "@babel/preset-env",
  //         {
  //           targets: {
  //             ie: "11",
  //           },
  //         },
  //         "ie11-temp-fix",
  //       ],
  //     ],
  //   };
  // },
};
