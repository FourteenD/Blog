(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{625:function(t,s,a){"use strict";a.r(s);var e=a(20),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("Github Pages 访问变得愈加困难了，所以不断有人私聊我笔记网站挂了。")]),t._v(" "),a("h2",{attrs:{id:"dns-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[t._v("#")]),t._v(" DNS 解析")]),t._v(" "),a("p",[t._v("在访问网站时，需要通过 DNS 解析网站的地址，显然可以在 DNS 解析处解决该问题，是国内 IP 访问的就解析到本地（也有选择 Gitee 和 Coding），是国外 IP 访问就解析到 Github Pages。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/tools/github/dns-record-head.png"),alt:"DNS record head"}}),t._v(" "),a("p",[t._v("将域名的线路类型调整为 "),a("strong",[t._v("境外")]),t._v("，再增加一条解析到国内的记录即可。")]),t._v(" "),a("h2",{attrs:{id:"https-失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-失败"}},[t._v("#")]),t._v(" HTTPS 失败")]),t._v(" "),a("p",[t._v("操作完以上步骤后访问正常，但卡在了国内服务启用 HTTPS 失败，猜测是 HTTPS 服务商解析 DNS 优先走了 Github 的，于是：")]),t._v(" "),a("ol",[a("li",[t._v("先停用该域名的所有解析")]),t._v(" "),a("li",[t._v("ping 域名确认失败")]),t._v(" "),a("li",[t._v("DNS 添加指向国内的解析")]),t._v(" "),a("li",[t._v("ping 域名确认指向国内")]),t._v(" "),a("li",[t._v("DNS 恢复指向 Github 的解析")]),t._v(" "),a("li",[t._v("测试结果成功")])])])}),[],!1,null,null,null);s.default=r.exports}}]);