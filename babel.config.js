// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: ['nativewind/babel'],
    };
  };
  







// // metro.config.js
// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.resolver = {
//   ...config.resolver,
//   assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
//   sourceExts: [...config.resolver.sourceExts, 'svg', 'css'], // Allow for css and svg files
// };

// module.exports = config;
