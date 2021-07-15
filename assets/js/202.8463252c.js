(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{628:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("p",[s._v("在很多情况下，常常要对多个 github 账号进行切换。比如，自己的、公司的、小号。")]),s._v(" "),a("h2",{attrs:{id:"切换步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换步骤"}},[s._v("#")]),s._v(" 切换步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建 ssh key 可以查看 "),a("a",{attrs:{href:"/os/linux/generate-ssh-key"}},[s._v("创建 SSH Key")])])]),s._v(" "),a("li",[a("p",[s._v("将 public key 上传至服务器(名字随意即可)")]),s._v(" "),a("p",[a("img",{attrs:{src:"/git/github-add-ssh-key.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("~/.ssh/")]),s._v(" 目录下创建 config 文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ～/.ssh/config\n")])])])]),s._v(" "),a("li",[a("p",[s._v("config 内容")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 正常使用的 rsa\nHost github.com\nHostName github.com\nIdentityFile ~/.ssh/id_rsa\n \n# new 新账号\nHost new\nHostName github.com\nIdentityFile ~/.ssh/id_rsa_new\n")])])])]),s._v(" "),a("li",[a("p",[s._v("clone 项目")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原项目地址为")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:xxxxxx/xxx.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改为 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@new:xxxxxx/xxx.git\n")])])])]),s._v(" "),a("li",[a("p",[s._v("push 项目")]),s._v(" "),a("p",[s._v("因为在一开始 clone 的时候已经配置好了，所以 push 时就无需配置了。不过我们还需要 "),a("code",[s._v("git config")]),s._v(" 修改一下本地的 "),a("code",[s._v("user.name")]),s._v(" 和 "),a("code",[s._v("user.email")]),s._v(" 来保证是同一个人修改了, 否则会应用全局的 "),a("code",[s._v("config")]),s._v(" 设置")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);