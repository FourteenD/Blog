(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{563:function(t,e,a){"use strict";a.r(e);var s=a(20),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("归档（打包）和压缩是两步（曾经以为是一步操作），先执行归档，再执行压缩。")]),t._v(" "),a("p",[t._v("归档，指的是一个或多个文件或目录的合集，被存储在一个文件中。因此，该文件所占用的空间是其中所有文件和目录的总和。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%8E%8B%E7%BC%A9",target:"_blank",rel:"noopener noreferrer"}},[t._v("压缩"),a("OutboundLink")],1),t._v("，是利用算法字典对归档的文件进行处理，实现保留最大的文件信息，缩小文件体积。基本原理为，查找文件内的重复字节、连续字节（这也是首先需要归档的原因），从而建立字典文件，压缩时进行替换，当然压缩算法一直在在进步的，详情可查阅相关资料。压缩分为有损压缩和无损压缩，有损压缩常用于音视频图像文件。")]),t._v(" "),a("h2",{attrs:{id:"tar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),a("p",[t._v("最常用的归档（打包）命令就是 tar，该命令可以将多个文件保存到一个文件中。该命令还可以从归档文件中还原所需文件，也就是解包。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("tar [选项...] [FILE]...")])]),t._v(" "),a("h3",{attrs:{id:"_2-常用选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将多个文件或目录进行打包。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对 tar 包进行解包操作。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("追加 tar 文件到归档文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f 包名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定包的文件名。包的扩展名是用来给管理员识别格式的，所以一定要正确指定扩展名。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示打包/解包文件过程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只查看 tar 包中有哪些文件，不对 tar 包做解包操作。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-C")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定解包位置。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("打包文件和目录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cvf test.md.tar test.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" test/test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".txt\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cvf testfile.tar test/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解包文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf testfile.tar\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf testfile.tar -C "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅查看压缩包中有哪些文件，不解包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -tvf testfile.tar\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_4-加强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-加强"}},[t._v("#")]),t._v(" 4. 加强")]),t._v(" "),a("p",[t._v("其实 tar 也可以同时打包压缩。常用的选项有两个：")]),t._v(" "),a("ul",[a("li",[t._v("-z：压缩和解压 "),a("code",[t._v(".tar.gz")]),t._v(" 格式；")]),t._v(" "),a("li",[t._v("-j：压缩和解压 "),a("code",[t._v(".tar.bz2")]),t._v(" 格式。")])]),t._v(" "),a("p",[t._v("添加上压缩、解压的操作为：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("打包压缩")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf testfile.tar.gz "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -tvf testfile.tar.gz "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bz2 格式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jcvf testfile.tar.bz2 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解压解包")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf testfile.tar.gz\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bz2 格式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxvf testfile.tar.bz2\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"zip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zip"}},[t._v("#")]),t._v(" zip")]),t._v(" "),a("p",[t._v("zip 是几种主流的压缩格式之一。与之对应的是 unzip。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-2"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("zip [选项...] 压缩包名 源文件或源目录")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("unzip [选项] 压缩包名")])]),t._v(" "),a("h3",{attrs:{id:"_2-常用选项-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-2"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),a("p",[t._v("zip 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-r")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("递归压缩目录，及将制定目录下的所有文件以及子目录全部压缩。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将文件压缩之后，删除原始文件，相当于把文件移到压缩文件中。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示详细的压缩过程信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-q")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在压缩的时候不显示命令的执行过程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-压缩级别")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("压缩级别是从 1~9 的数字，-1 代表压缩速度更快，-9 代表压缩效果更好。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-u")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新压缩文件，即往压缩文件中添加新文件。")])])])]),t._v(" "),a("p",[t._v("unzip 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将压缩文件解压到指定目录下。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压时并不覆盖已经存在的文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-o")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压时覆盖已经存在的文件，并且无需用户确认。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看压缩文件的详细信息，但并不做解压操作。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("测试压缩文件有无损坏，但并不解压。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-x  文件列表")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压文件，但不包含文件列表中指定的文件。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-2"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("打包压缩文件和目录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件（多个文件不需要 -r）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" testfile.zip test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l testfile.zip "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r testfile.zip "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l testfile.zip "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解压解包：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" testfile.zip\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" testfile.zip -d test/test\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"gzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),a("p",[t._v("gzip 是用来对文件进行压缩和解压的命令，其扩展为 "),a("code",[t._v(".gz")]),t._v("，gzip 一般需要配合 tar 使用（归档为文件），因为其只能压缩文件，即使指定了目录也只能压缩目录内的文件。与之对应的是 gunzip。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-3"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("gzip [选项] 源文件")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("gunzip [选项] 源文件")])]),t._v(" "),a("h3",{attrs:{id:"_2-常用选项-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-3"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),a("p",[t._v("gzip 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将压缩数据输出到标准输出中，并保留源文件。")])]),t._v(" "),a("tr",[a("td",[t._v("-r")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("递归压缩指定目录下以及子目录下的所有文件。")])]),t._v(" "),a("tr",[a("td",[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对于每个压缩和解压缩的文件，显示相应的文件名和压缩比。")])]),t._v(" "),a("tr",[a("td",[t._v("-l")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示以下字段： 压缩文件的大小；未压缩文件的大小；压缩比；未压缩文件的名称。")])]),t._v(" "),a("tr",[a("td",[t._v("-数字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于指定压缩等级，-1 压缩等级最低；-9 压缩比最高。默认压缩比是 -6。")])]),t._v(" "),a("tr",[a("td",[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对压缩文件进行解压缩。")])])])]),t._v(" "),a("p",[t._v("gunzip 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-r")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("递归处理，解压缩指定目录下以及子目录下的所有文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("把解压缩后的文件输出到标准输出设备。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("强制解压缩文件，不理会文件是否已存在等情况。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-l")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("列出压缩文件内容。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示命令执行过程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("测试压缩文件是否正常，但不对其做解压缩操作。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-3"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("压缩文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除源文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("  test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l test.txt.gz "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留源文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -c test.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("test.txt.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l test.txt test.txt.gz "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("压缩目录：")]),t._v(" "),a("p",[t._v("并不能压缩目录，只能分别压缩目录内的文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切记，会递归压缩其中所有文件，小心")]),t._v("\ntree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -rd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销打包")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("解压：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gunzip test.txt.gz\ngunzip -r "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" \n")])])])])]),t._v(" "),a("h2",{attrs:{id:"bzip2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bzip2"}},[t._v("#")]),t._v(" bzip2")]),t._v(" "),a("p",[t._v("bzip2 命令与 gzip 目录类似，只能对文件进行压缩，其扩展为 "),a("code",[t._v(".bz2")]),t._v("。从理论上来说， "),a("code",[t._v(".bz2")]),t._v(" 算法更先进，压缩比更好，而 "),a("code",[t._v(".gz")]),t._v("  相对而言压缩耗时更短。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-4"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("bzip2 [选项] 源文件")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("bunzip2 [选项] 源文件")])]),t._v(" "),a("h3",{attrs:{id:"_2-常用选项-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-4"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),a("p",[t._v("bzip2 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("执行解压缩，此时该选项后的源文件应为标记有 .bz2 后缀的压缩包文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-k")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 在压缩或解压缩任务完成后，会删除原始文件，若要保留原始文件，可使用此选项。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 在压缩或解压缩时，若输出文件与现有文件同名，默认不会覆盖现有文件，若使用此选项，则会强制覆盖现有文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("测试压缩包文件的完整性。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("压缩或解压缩文件时，显示详细信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-数字")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这个参数和 gzip 命令的作用一样，用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高")])])])]),t._v(" "),a("p",[t._v("bunzip2 常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-k")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压缩后，默认会删除原来的压缩文件。若要保留压缩文件，需使用此参数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("解压缩时，若输出的文件与现有文件同名时，默认不会覆盖现有的文件。若要覆盖，可使用此选项。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示命令执行过程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-L")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("列出压缩文件内容。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-4"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("p",[t._v("参考 gzip 示例即可。")])])}),[],!1,null,null,null);e.default=n.exports}}]);