module.exports = {
  sourceType: 'script',
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8.11.4',
          uglify: true,
        },
      },
    ],
  ],
};
