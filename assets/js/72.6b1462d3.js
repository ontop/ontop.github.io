(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{449:function(t,e,a){"use strict";a.r(e);var s=a(51),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"database-and-ontop-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-and-ontop-setup"}},[t._v("#")]),t._v(" Database and Ontop Setup")]),t._v(" "),a("p",[t._v("In this tutorial, we are considering fragments of the information systems\nof two universities describing students, academic staff and courses.")]),t._v(" "),a("h2",{attrs:{id:"database-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-setup"}},[t._v("#")]),t._v(" Database setup")]),t._v(" "),a("p",[t._v("Procedure to set up the datebase for the following exercises:")]),t._v(" "),a("ol",[a("li",[t._v("Unzip the archive of H2 "),a("a",{attrs:{href:"../h2.zip"}},[a("em",[t._v("(h2.zip)")])])]),t._v(" "),a("li",[t._v("Start the database:\n"),a("ul",[a("li",[t._v("On Mac/Linux: open a terminal, go into "),a("em",[t._v("h2/bin")]),t._v(" and run "),a("code",[t._v("sh h2.sh")])]),t._v(" "),a("li",[t._v("On Windows: click on the executable "),a("code",[t._v("h2w.bat")])])])]),t._v(" "),a("li",[t._v("After being automatically redirect to the web interface of H2, connect with the default parameters:\n"),a("ul",[a("li",[t._v("JDBC URL:  "),a("em",[t._v("jdbc:h2:tcp://localhost/../university-session1")])]),t._v(" "),a("li",[t._v("User name: "),a("em",[t._v("sa")])]),t._v(" "),a("li",[t._v("No password")])])]),t._v(" "),a("li",[t._v("Now you can see the tables in the schema "),a("em",[t._v("uni1")]),t._v(".")]),t._v(" "),a("li",[t._v('Try a first SQL query: "Give me the last names of the full professors"')])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last_name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"academic"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"position"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"ontop-protege-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ontop-protege-setup"}},[t._v("#")]),t._v(" Ontop-Protégé setup")]),t._v(" "),a("p",[t._v("Protégé is an open source ontology editor and knowledge management system. Ontop-Protégé is a plugin for designing and testing a VKG specification.")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("a",{attrs:{href:"https://sourceforge.net/projects/ontop4obda/files",target:"_blank",rel:"noopener"}},[t._v("Download the latest Ontop-Protégé bundle for your Operating System"),a("OutboundLink")],1),t._v(" and unzip the archive and go into its folder")]),t._v(" "),a("li",[t._v("Run it ("),a("em",[t._v("run.bat")]),t._v(" on Windows, "),a("em",[t._v("run.sh")]),t._v(" on Mac/Linux)")]),t._v(" "),a("li",[t._v("Register the H2 JDBC driver: go to "),a("em",[t._v("Preferences")]),t._v(" -> "),a("em",[t._v("JDBC Drivers")]),t._v(" and add an entry with the following information\n"),a("ul",[a("li",[t._v("Description: "),a("em",[t._v("h2")])]),t._v(" "),a("li",[t._v("Class Name: "),a("em",[t._v("org.h2.Driver")])]),t._v(" "),a("li",[t._v("Driver file (jar): "),a("em",[t._v("/path/to/h2/bin/h2-1.4.196.jar")])])])])]),t._v(" "),a("h2",{attrs:{id:"programme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programme"}},[t._v("#")]),t._v(" Programme")]),t._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/tutorial/basic/university-1.html"}},[t._v("Mapping the first data source")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/tutorial/basic/university-2.html"}},[t._v("Mapping the second data source")])],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);