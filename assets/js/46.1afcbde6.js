(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{470:function(t,s,a){"use strict";a.r(s);var e=a(20),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("声明 1")]),t._v(" "),a("p",[t._v("前端做反向代理时一般会在接口前增加一个 "),a("code",[t._v("api")]),t._v(" 路径，如 "),a("code",[t._v("/api/user")]),t._v("，但后端并没有这么个东西，那么就会导致一些问题。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("声明 2")]),t._v(" "),a("p",[a("code",[t._v("location")]),t._v(" 一般采用前缀匹配的模式。")])]),t._v(" "),a("p",[t._v("日常使用中虽可采用 "),a("code",[t._v("rewrite")]),t._v(" 解决多余路径的问题（此处可如此使用的缘由是 "),a("code",[t._v("rewrite")]),t._v(" 的处理阶段在 "),a("code",[t._v("proxy_pass")]),t._v(" 之前）。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Real-IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Scheme "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路径重写")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v("  /api/(.*)  /"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("但探索一下 "),a("code",[t._v("location")]),t._v(" + "),a("code",[t._v("proxy_pass")]),t._v(" 也是不错的选择。")]),t._v(" "),a("h2",{attrs:{id:"规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Syntax:")]),t._v("\tproxy_pass URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: —\nContext: location, if in location, limit_except\n")])])]),a("p",[t._v("其中唯一需要注意的是，当 "),a("code",[t._v("proxy_pass")]),t._v(" 后无 "),a("code",[t._v("/")]),t._v(" 时为相对地址，有则为绝对地址。")]),t._v(" "),a("h3",{attrs:{id:"_1-相对地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-相对地址"}},[t._v("#")]),t._v(" 1. 相对地址")]),t._v(" "),a("p",[t._v("相对地址时会将 "),a("code",[t._v("location")]),t._v(" 匹配的 "),a("code",[t._v("uri")]),t._v(" 加入代理。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8085")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8084 '),a("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v("\\n")]),t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8085")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8085/app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("curl")]),t._v(" "),a("th",[t._v("8083")]),t._v(" "),a("th",[t._v("8084")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("localhost:8083/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8083/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])]),t._v(" "),a("td",[a("code",[t._v("/app")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/app/user")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/apipp/user")])]),t._v(" "),a("td",[a("code",[t._v("/apipp/user")])]),t._v(" "),a("td",[a("code",[t._v("/apppp/user")])])])])]),t._v(" "),a("h3",{attrs:{id:"_2-绝对地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-绝对地址"}},[t._v("#")]),t._v(" 2. 绝对地址")]),t._v(" "),a("p",[t._v("绝对地址则不会将 "),a("code",[t._v("location")]),t._v(" 匹配的 "),a("code",[t._v("uri")]),t._v(" 加入代理，即直接丢弃。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8085")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8084 '),a("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v("\\n")]),t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8085/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8085/app/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决多余的 `/`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8086")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8085/app/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("curl")]),t._v(" "),a("th",[t._v("proxy")]),t._v(" "),a("th",[t._v("target")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("localhost:8083/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])]),t._v(" "),a("td",[a("code",[t._v("/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8083/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])]),t._v(" "),a("td",[a("code",[t._v("//user")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])]),t._v(" "),a("td",[a("code",[t._v("/app/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/app//user")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8084/apipp/user")])]),t._v(" "),a("td",[a("code",[t._v("/apipp/user")])]),t._v(" "),a("td",[a("code",[t._v("/app/pp/user")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8086/api")])]),t._v(" "),a("td",[a("code",[t._v("/api")])]),t._v(" "),a("td",[a("code",[t._v("location")]),t._v(" 未匹配，所以不进入 "),a("code",[t._v("proxy")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("localhost:8086/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/api/user")])]),t._v(" "),a("td",[a("code",[t._v("/app/user")])])])])]),t._v(" "),a("p",[t._v("可以观测到少了匹配到的 "),a("code",[t._v("api")]),t._v(" 部分，而作为路径的 "),a("code",[t._v("/")]),t._v(" 未匹配到显得多余起来，解决的方案是使 "),a("code",[t._v("location")]),t._v(" 匹配到 "),a("code",[t._v("/")]),t._v(" 即可。")])])}),[],!1,null,null,null);s.default=n.exports}}]);