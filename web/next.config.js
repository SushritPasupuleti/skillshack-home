module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    images: {
      domains: ['flutter.dev'],///remove this in the future
    },
  };
  
  // const withImages = require('next-images')
  // module.exports = withImages()