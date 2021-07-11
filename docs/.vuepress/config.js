const NAV_CONFIG = require('./config/nav')
const PLUGIN_CONFIG = require('./config/plugin')

module.exports = {
  theme: 'vdoing',
  title: '拾肆',
  description: '拾肆的博客',
  plugins: PLUGIN_CONFIG,
  themeConfig: {
    logo:'https://cdn.jsdelivr.net/gh/FourteenD/PicBed/blog_logo.jpg',
    nav: NAV_CONFIG,
    smoothScroll: true,
    lastUpdated: '上次更新',
    repo: 'FourteenD/Blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '编辑文档'
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  }
}