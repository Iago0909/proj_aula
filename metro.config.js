const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro (habilitar CSS quando utilizar app em WEB)
    isCSSEnabled: true,
});

module.exports = withNativeWind(config, { input: './global.css' });
