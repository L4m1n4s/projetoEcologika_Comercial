const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path'); // Adicione esta linha
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), {
    watchFolders: [
        // Adicione o caminho para a sua pasta aqui
        path.resolve(__dirname, 'docs'),
    ],
});