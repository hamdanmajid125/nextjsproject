module.exports = {
  experimental: {
    urlImports: ['https://cdnjs.cloudflare.com/ajax/libs'],
  },
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }));
    return config;
  }

};