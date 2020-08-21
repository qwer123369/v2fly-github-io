(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{392:function(e,t,s){"use strict";s.r(t);var o=s(18),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"freedom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freedom"}},[e._v("#")]),e._v(" Freedom")]),e._v(" "),s("ul",[s("li",[e._v("名称："),s("code",[e._v("freedom")])]),e._v(" "),s("li",[e._v("类型：出站协议")])]),e._v(" "),s("p",[e._v("Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。")]),e._v(" "),s("h2",{attrs:{id:"outboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[e._v("#")]),e._v(" OutboundConfigurationObject")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"domainStrategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AsIs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"redirect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1:3366"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"userLevel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("blockquote",[s("p",[s("code",[e._v("domainStrategy")]),e._v(': "AsIs" | "UseIP" | "UseIPv4" | "UseIPv6"')])]),e._v(" "),s("p",[e._v("在目标地址为域名时，Freedom 可以直接向此域名发出连接（"),s("code",[e._v('"AsIs"')]),e._v("），或者将域名解析为 IP 之后再建立连接（"),s("code",[e._v('"UseIP"')]),e._v("、"),s("code",[e._v('"UseIPv4"')]),e._v(" 和 "),s("code",[e._v('"UseIPv6"')]),e._v("）。解析 IP 的步骤会使用 V2Ray "),s("RouterLink",{attrs:{to:"/config/dns.html"}},[e._v("内建的 DNS")]),e._v("。默认值为 "),s("code",[e._v('"AsIs"')]),e._v("。")],1),e._v(" "),s("p",[e._v("(V2Ray 4.6+) 当使用 "),s("code",[e._v('"UseIP"')]),e._v(" 模式，并且 "),s("RouterLink",{attrs:{to:"/config/overview.html#outboundobject"}},[e._v("出站连接配置")]),e._v(" 中指定了 "),s("code",[e._v("sendThrough")]),e._v(" 时，Freedom 会根据 "),s("code",[e._v("sendThrough")]),e._v(" 的值自动判断所需的 IP 类型，IPv4 或 IPv6。")],1),e._v(" "),s("p",[e._v("(V2Ray 4.7+) 当使用 "),s("code",[e._v('"UseIPv4"')]),e._v(" 或 "),s("code",[e._v('"UseIPv6"')]),e._v(" 模式时，Freedom 会只使用对应的 IPv4 或 IPv6 地址。当 "),s("code",[e._v("sendThrough")]),e._v(" 指定了不匹配的本地地址时，将导致连接失败。")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("redirect")]),e._v(": address_port")])]),e._v(" "),s("p",[e._v("Freedom 会强制将所有数据发送到指定地址（而不是入站协议指定的地址）。其值为一个字符串，样例："),s("code",[e._v('"127.0.0.1:80"')]),e._v("，"),s("code",[e._v('":1234"')]),e._v("。当地址不指定时，如 "),s("code",[e._v('":443"')]),e._v("，Freedom 不会修改原先的目标地址。当端口为 "),s("code",[e._v("0")]),e._v(" 时，如 "),s("code",[e._v('"v2ray.com: 0"')]),e._v("，Freedom 不会修改原先的端口。")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("userLevel")]),e._v(": number")])]),e._v(" "),s("p",[e._v("用户等级，所有连接都使用这一等级。")])])}),[],!1,null,null,null);t.default=v.exports}}]);