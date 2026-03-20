// babel.config.cjs
module.exports = {
  presets: [
    "@babel/preset-typescript", 
    ["@babel/preset-env", { targets: { node: "current" } }]
  ],
  plugins: ["@lingui/babel-plugin-lingui-macro"]
};
