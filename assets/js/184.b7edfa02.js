(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{610:function(s,t,e){"use strict";e.r(t);var n=e(20),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"笔记本合盖不休眠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#笔记本合盖不休眠"}},[s._v("#")]),s._v(" 笔记本合盖不休眠")]),s._v(" "),e("p",[s._v("修改配置：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/logind.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#HandlePowerKey 按下电源键后的行为，默认power off")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#HandleSleepKey 按下挂起键后的行为，默认suspend")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#HandleHibernateKey 按下休眠键后的行为，默认hibernate")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#HandleLidSwitch 合上笔记本盖后的行为，默认suspend")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 HandleLidSwitch 为 ignore")]),s._v("\n")])])]),e("p",[s._v("重启服务：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart systemd-logind\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者直接重启电脑")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);