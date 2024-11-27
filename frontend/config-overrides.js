const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = function override(config, env) {
  // Vanilla Extract 플러그인 추가
    config.plugins.push(new VanillaExtractPlugin());

    // .css.ts 파일 처리 설정 추가
    config.module.rules.push({
    test: /\.css\.ts$/,
    use: 'ts-loader',
    });

    return config;
};