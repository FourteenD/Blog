module.exports = {
  "@vuepress/medium-zoom": {
    selector: ".theme-vdoing-content img:not(.no-zoom)",
    options: {
      background: "#333842"
    }
  },
  '@vuepress/last-updated': // "上次更新"时间格式
  {
    transformer: (timestamp, lang) => {
      const dayjs = require('dayjs') // https://day.js.org/
      dayjs.locale(lang) 
      return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
    },
  },
};