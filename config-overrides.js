module.exports = function override(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../../package.json": false,
    };
    return config;
  };
  