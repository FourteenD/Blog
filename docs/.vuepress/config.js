const PLUGIN_CONFIG = require('./config/plugin')
const THEME_CONFIG = require('./config/theme')

module.exports = {
  theme: 'vdoing',
  title: '拾肆',
  description: '拾肆的博客',
  plugins: PLUGIN_CONFIG,
  themeConfig:THEME_CONFIG,
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  }
}