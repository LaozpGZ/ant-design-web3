import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Ant Design Web3 - Aptos Example',
  logo: false,
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: 'Demo',
      path: '/demo',
    },
  ],
  mfsu: false,
  esbuildMinifyIIFE: true,
  ignoreMomentLocale: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  exportStatic: {},
  chainWebpack: (config: any) => {
    config.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false);
    return config;
  },
  headScripts: [`console.log('Aptos Web3 Example loaded');`],
});