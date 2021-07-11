const moment = require("moment");

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
      open: false,
      collapseList: [],
      uncollapseList: []
    },
    ignore: []
  },
  "@vuepress/back-to-top": true,
  "@vuepress/medium-zoom": {
    selector: "img",
    options: {
      background: "#333842"
    }
  },
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      moment.locale(lang);
      return moment(timestamp).format("LLLL");
    }
  }
};