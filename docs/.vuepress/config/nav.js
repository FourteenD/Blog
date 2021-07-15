module.exports = [
  { text: '首页', link: '/' },
  {
    "text": "全部",
    "items": [
      {
        "text": "01 E S 5",
        "link": "/全部/01.前端/01.ES5/"
      },
      {
        "text": "01.前端",
        "link": "/全部/01.前端/"
      }
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  // 没有二级导航时可以直接添加
  { text: '目录页', link: '/web/' },

  // 有二级导航时
  {
    text: '页面',
    link: '/ui/',   //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: 'HTML', link: '/pages/11/' },
      { text: 'CSS', link: '/pages/22/' },
    ]
  },
];