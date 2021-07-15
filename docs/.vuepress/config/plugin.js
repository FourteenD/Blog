module.exports = {
  "@vuepress/medium-zoom": {
    selector: ".theme-vdoing-content img:not(.no-zoom)",
    options: {
      background: "#333842"
    }
  },
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      const moment = require('moment')
      moment.locale(lang)
      return moment(timestamp).format("LLLL")
    },
  },
};