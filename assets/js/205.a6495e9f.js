(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{631:function(s,t,e){"use strict";e.r(t);var a=e(20),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"无法监视文件变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无法监视文件变化"}},[s._v("#")]),s._v(" 无法监视文件变化")]),s._v(" "),e("p",[s._v("其实这个问题存在已久，但是一直没有去处理。")]),s._v(" "),e("p",[s._v("当 VSCode 弹出该提示时会给一个对应的"),e("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),e("OutboundLink")],1),s._v("，执行它提供的命令：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/sys/fs/inotify/max_user_watches "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 19200")]),s._v("\n")])])]),e("p",[s._v("限制比较小，接着查看"),e("a",{attrs:{href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决方案"),e("OutboundLink")],1),s._v("。虽然提示说 "),e("code",[s._v("Arch Linux")]),s._v(" 应当使用 "),e("code",[s._v("echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system")]),s._v("，但我的 manjaro 重启后依旧存在问题。")]),s._v(" "),e("p",[s._v("最后的解决方案：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ll /etc/sysctl.d/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 40-max-user-watches.conf")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 50-max_user_watches.conf # 需注意文件名区别")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/sysctl.d/50-max_user_watches.conf\nfs.inotify.max_user_watches "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19200")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 vim 修改后重启成功")]),s._v("\n")])])]),e("h2",{attrs:{id:"空文件夹折叠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空文件夹折叠"}},[s._v("#")]),s._v(" 空文件夹折叠")]),s._v(" "),e("p",[s._v("在一次更新之后 VSCode 添加了新的特性 "),e("code",[s._v("Compact Folders")]),s._v("，这种行为与 Chrome 浏览器擅自遮挡 "),e("code",[s._v("www")]),s._v(" 一样恶心。")]),s._v(" "),e("p",[s._v("打开 "),e("code",[s._v("Settings")]),s._v("，输入 "),e("code",[s._v("Compact Folders")]),s._v(" 取消选中即可。")]),s._v(" "),e("h2",{attrs:{id:"删除文件-文件夹时卡顿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文件-文件夹时卡顿"}},[s._v("#")]),s._v(" 删除文件/文件夹时卡顿")]),s._v(" "),e("p",[s._v("在 Arch 的 KDE 环境下会存在该问题，这是由于 "),e("a",{attrs:{href:"https://github.com/microsoft/vscode/issues/90034#issuecomment-582115953",target:"_blank",rel:"noopener noreferrer"}},[s._v("ELECTRON 引起的"),e("OutboundLink")],1),s._v("。可通过在 "),e("code",[s._v("~/.config/plasma-workspace/env/electron-trash-gio.sh")]),s._v(" 增加如下内容解决：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ELECTRON_TRASH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gio\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);