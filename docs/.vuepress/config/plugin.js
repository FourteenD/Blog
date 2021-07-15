module.exports = {
  "vuepress-plugin-auto-sidebar": {
    sort: {
      mode: "asc",
      readmeFirst: true,
      readmeFirstForce: true
    },
    title: {
      mode: "uppercase",
      map: {}
    },
    sidebarDepth: 2,
    collapse: {
      open: true,
      collapseList: [],
      uncollapseList: []
    },
    ignore: []
  },
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