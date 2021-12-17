(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{456:function(a,s,t){"use strict";t.r(s);var e=t(31),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"便携模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#便携模式"}},[a._v("#")]),a._v(" 便携模式")]),a._v(" "),t("h2",{attrs:{id:"版本要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[a._v("#")]),a._v(" 版本要求")]),a._v(" "),t("p",[a._v("从 0.13.1 版本开始，便携模式开启方式进行简单调整，旧版本开启方式参考")]),a._v(" "),t("h2",{attrs:{id:"开启方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启方法"}},[a._v("#")]),a._v(" 开启方法")]),a._v(" "),t("p",[a._v("当软件"),t("strong",[a._v("可执行文件")]),a._v("当前目录中新建一个名为"),t("code",[a._v("data")]),a._v("的文件夹，便携模式会将此文件夹将作为基础启动文件夹，作为"),t("code",[a._v("Home Directory")])]),a._v(" "),t("p",[a._v("在不同系统上，可执行文件位置有所不同：")]),a._v(" "),t("ul",[t("li",[a._v("Windows：安装目录中"),t("code",[a._v("Clash for Windows.exe")])]),a._v(" "),t("li",[a._v("macOS：软件包目录中"),t("code",[a._v("/Contents/MacOS/Clash for Windows")])])]),a._v(" "),t("p",[a._v("当文件夹存在时，重启软件即可进入便携模式，此时软件将会读取/写入数据至该目录")]),a._v(" "),t("h2",{attrs:{id:"更新软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新软件"}},[a._v("#")]),a._v(" 更新软件")]),a._v(" "),t("p",[a._v("多数情况下，如果需要更新软件版本，只需要先下载新版本，然后将原目录里的"),t("code",[a._v("data")]),a._v("文件夹复制到新安装目录即可")]),a._v(" "),t("p",[a._v("但要注意的是，如果是使用"),t("code",[a._v(".exe")]),a._v("安装包，不能在原目录中直接覆盖安装，因为安装包会先将目录"),t("strong",[a._v("清空")]),a._v("，再写入新版本。这样会导致"),t("code",[a._v("data")]),a._v("文件夹丢失")]),a._v(" "),t("p",[a._v("实际上，可以通过在安装目录中建立一个"),t("code",[a._v("data")]),a._v("文件夹的"),t("strong",[a._v("连接")]),a._v("实现将其分离于安装目录，这样即使使用"),t("code",[a._v(".exe")]),a._v("版本，只要在安装后，重新建立连接即可")]),a._v(" "),t("p",[a._v("在不同系统中建立连接的命令如下，假设用户定义的配置文件名称为"),t("code",[a._v("cfw-portable")])]),a._v(" "),t("h4",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("mklink /D "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:\\Program Files\\Clash for Windows\\data"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[a._v("\\c")]),a._v('fw-portable"')]),a._v("\n")])])]),t("h4",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/home/cfw-portable"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Applications/Clash\\ for\\ Windows.app/Contents/MacOS/data"')]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("此方法也可以用于自定义"),t("code",[a._v("Home Directory")])])]),a._v(" "),t("outdated",{attrs:{since:"0.4.0"}},[t("h2",{attrs:{id:"旧版本-已过时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旧版本-已过时"}},[a._v("#")]),a._v(" 旧版本（已过时）")]),a._v(" "),t("p",[a._v("从 0.4.0 开始，Clash for Windows 提供简单的便携支持")]),a._v(" "),t("h3",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[a._v("进入"),t("code",[a._v("安装目录/resources/static/files/")]),a._v("目录中进行如下操作：")]),a._v(" "),t("ol",[t("li",[a._v("新建 config.yaml（文件可以为空，但一定要创建）")]),a._v(" "),t("li",[a._v("重新启动 Clash for Windows")])]),a._v(" "),t("p",[a._v("此时文件夹目录中还有其他文件及文件夹，请勿对其修改")])])],1)}),[],!1,null,null,null);s.default=v.exports}}]);