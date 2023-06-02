(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{421:function(t,e,s){"use strict";s.r(e);var i=s(51),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"generic-jdbc-not-recommended"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-jdbc-not-recommended"}},[t._v("#")]),t._v(" Generic JDBC (not recommended)")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("Don't rely on generic JDBC support. It isn't sufficient for any data source.")])])])]),t._v(" "),s("p",[t._v("Ontop provides a generic implementation, that is used as default for any JDBC. While part of the functionality may work right out of the box with this default implementation, there is no guarantee that Ontop will be able to handle any database setup and SPARQL queries correctly, especially once special limitations and exceptions come into play.")]),t._v(" "),s("p",[t._v("However, Ontop also provides dialect-specific implementations for a variety of different database management systems and SQL dialects. The following documents describe the process of connecting Ontop to each of them, as well as special points and caveats for specific cases.")]),t._v(" "),s("p",[t._v("In this section, we provide general information and important points for each of the supported systems.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("If your SQL dialect of interest is not included in this list, it is possible to implement a connector for it, following "),s("RouterLink",{attrs:{to:"/dev/db-adapter.html"}},[t._v("this guide")]),t._v(".")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("To use Ontop with "),s("strong",[t._v("any")]),t._v(" database system, its corresponding JDBC driver is required in the "),s("code",[t._v("jdbc")]),t._v(" directory, which is passed to the Ontop instance as described in the "),s("a",{attrs:{href:"/guide/cli#ontop-endpoint"}},[t._v("setup guide")]),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports}}]);