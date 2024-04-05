(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{426:function(t,e,s){"use strict";s.r(e);var a=s(51),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),s("p",[t._v("Through the "),s("a",{attrs:{href:"https://mysql.com",target:"_blank",rel:"noopener"}},[t._v("MySQL"),s("OutboundLink")],1),t._v(" connector, Ontop is able to construct VKGs on MySQL databases.")]),t._v(" "),s("h2",{attrs:{id:"limitations-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations-exceptions"}},[t._v("#")]),t._v(" Limitations & Exceptions")]),t._v(" "),s("ul",[s("li",[t._v("String literals have to be encased in "),s("em",[t._v("single quotes")]),t._v(" ("),s("code",[t._v("'")]),t._v("). Double quote string literals ("),s("code",[t._v('"')]),t._v(") are not supported.")]),t._v(" "),s("li",[t._v('Accessing JSON object fields with the "dot operator" is not supported (see below).')]),t._v(" "),s("li",[t._v("MySQL 5.x comes with some limitations (e.g. no anonymous bnode support, no regexp replace, no nested data support). MySQL 5.x reached its end-of-life, so please consider upgrading.")])]),t._v(" "),s("h2",{attrs:{id:"database-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-connection"}},[t._v("#")]),t._v(" Database Connection")]),t._v(" "),s("p",[t._v("The following shows the content of a sample "),s("code",[t._v(".properties")]),t._v(" file that can be used to connect Ontop to MySQL:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("jdbc.url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbc:mysql://localhost:3306/defaultdatabase?useCursorFetch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\njdbc.user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user\njdbc.password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password\njdbc.driver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.mysql.cj.jdbc.Driver\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The parameter "),s("code",[t._v("useCursorFetch=true")]),t._v(" needs to be added to the JDBC URL for streaming to be enabled. Otherwise, the JDBC driver will block until the full result set is fetched, which may cause out-of-memory exceptions when materializing or running large queries.")])]),t._v(" "),s("h2",{attrs:{id:"nested-type-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nested-type-support"}},[t._v("#")]),t._v(" Nested Type Support")]),t._v(" "),s("p",[t._v("Ontop implements explicit compatibility with the MySQL type "),s("code",[t._v("JSON")]),t._v(" which can be used with the "),s("a",{attrs:{href:"/guide/advanced/lenses#flattenlens"}},[t._v("flatten lens")]),t._v(". However, it cannot infer the type of the flattened result column.")]),t._v(" "),s("p",[t._v("In case the flattened column is still a nested structure after the flatten operation is performed (e.g. for arrays of objects), "),s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/json-functions.html",target:"_blank",rel:"noopener"}},[t._v("MySQL's JSON functions"),s("OutboundLink")],1),t._v(" can be used to further work with them.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v('Accessing object fields using the "arrow operator" is not supported.')])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Nested type only supported for MySQL >= 8.0")])])])}),[],!1,null,null,null);e.default=o.exports}}]);