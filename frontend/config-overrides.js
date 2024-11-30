const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = function override(config, env) {
  // Vanilla Extract 플러그인 추가
    config.plugins.push(new VanillaExtractPlugin());

    // .css.ts 파일 처리 설정 추가
    config.module.rules.push({
    test: /\.css\.ts$/,
    use: 'ts-loader',
    });

    // SVG 및 기타 정적 자산 처리 규칙 추가
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/, // 정적 파일들 (svg 포함) 처리
      type: 'asset/resource', // Webpack 5 이상에서 파일을 리소스로 처리
      generator: {
        filename: 'static/media/[name][ext]', // 빌드된 파일 위치 지정
      },
    });

    return config;
};