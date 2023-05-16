(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{426:function(t,e,a){"use strict";a.r(e);var s=a(51),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[t._v("#")]),t._v(" Oracle")]),t._v(" "),a("p",[t._v("Through the "),a("a",{attrs:{href:"https://www.oracle.com/database/",target:"_blank",rel:"noopener"}},[t._v("Oracle"),a("OutboundLink")],1),t._v(" connector, Ontop is able to construct VKGs on external Oracle databases.")]),t._v(" "),a("h2",{attrs:{id:"limitations-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations-exceptions"}},[t._v("#")]),t._v(" Limitations & Exceptions")]),t._v(" "),a("ul",[a("li",[t._v("Ontop cannot perform inference based on nested data types in Oracle.")]),t._v(" "),a("li",[t._v('Ontop represents the "big integer" datatype as '),a("code",[t._v("NUMBER(19)")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"database-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-connection"}},[t._v("#")]),t._v(" Database Connection")]),t._v(" "),a("p",[t._v("The following shows the content of a sample "),a("code",[t._v(".properties")]),t._v(" file that can be used to connect Ontop to Oracle:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("jdbc.url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbc:oracle:thin:@//localhost:49161/defaultcontainer\njdbc.user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user\njdbc.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password\njdbc.driver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oracle.jdbc.OracleDriver\n")])])]),a("h2",{attrs:{id:"nested-type-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-type-support"}},[t._v("#")]),t._v(" Nested Type Support")]),t._v(" "),a("p",[t._v("Ontop does not implement explicit compatibility with nested datatypes in Oracle.\nHowever, Ontop allows the usage of the "),a("RouterLink",{attrs:{to:"/guide/guide/advanced/lenses.html#flattenlens"}},[a("em",[t._v("Flatten Lens")])]),t._v(" over string columns that contain JSON-encoded arrays. The output type of the flattened result column cannot be inferred.")],1),t._v(" "),a("p",[t._v("To use the "),a("em",[t._v("Flatten Lens")]),t._v(" with Oracle array types, they must first be converted to JSON strings.")]),t._v(" "),a("p",[t._v("In case the flattened column is still a nested structure after the flatten operation is performed (e.g. for arrays of objects), "),a("a",{attrs:{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/adjsn/query-json-data.html#GUID-119E5069-77F2-45DC-B6F0-A1B312945590",target:"_blank",rel:"noopener"}},[t._v("Oracle's JSON functions"),a("OutboundLink")],1),t._v(" can be used to further work with them.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v('Accessing object fields using the "dot operator" is not supported. Please use SQL JSON functions instead.')])])])}),[],!1,null,null,null);e.default=n.exports}}]);