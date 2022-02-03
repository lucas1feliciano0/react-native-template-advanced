module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@util': './src/util',
          '@services': './src/services',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@store': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
