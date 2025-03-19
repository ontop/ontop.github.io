(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{408:function(e,t,a){"use strict";a.r(t);var r=a(51),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ontop-mapping-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ontop-mapping-language"}},[e._v("#")]),e._v(" Ontop mapping language")]),e._v(" "),a("p",[e._v("While Ontop is compatible with the W3C standard mapping language "),a("a",{attrs:{href:"https://www.w3.org/TR/2012/REC-r2rml-20120927/",target:"_blank",rel:"noopener"}},[e._v("R2RML"),a("OutboundLink")],1),e._v(", it also provides its own native mapping language ("),a("strong",[e._v("OBDA")]),e._v(").")]),e._v(" "),a("p",[e._v("An OBDA mapping file is a text file with extension "),a("code",[e._v(".obda")]),e._v(" and it is made up of two main sections:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("PrefixDeclaration")]),e._v(": a list of prefix definitions used in the mapping file. Each prefix is declared by a pair of its identifier (or name) and its IRI definition.")]),e._v(" "),a("li",[a("code",[e._v("MappingDeclaration")]),e._v(": collection of "),a("strong",[e._v("mapping assertions")]),e._v(" where each mapping assertion consists of three fields: "),a("code",[e._v("mappingId")]),e._v(", "),a("code",[e._v("source")]),e._v(" and "),a("code",[e._v("target")]),e._v(". The mappingId is any string identifying the assertion, the source is an arbitrary SQL query over the database, and the target is a "),a("a",{attrs:{href:"#target-triple-template"}},[e._v("triple template")]),e._v(" that contains placeholders that reference column names mentioned in the source query.")])]),e._v(" "),a("p",[e._v("The following is an example of a valid OBDA mapping file:")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[PrefixDeclaration]\n:\t\thttp://www.example.org/library#\nxsd:\thttp://www.w3.org/2001/XMLSchema#\nrdf:\thttp://www.w3.org/1999/02/22-rdf-syntax-ns#\n\n[MappingDeclaration] @collection [[\nmappingId     Book collection\ntarget        :BID_{id} a :Book .\nsource        SELECT id FROM books\n\nmappingId     Book title\ntarget        :BID_{id} :title {title} .\nsource        SELECT id, title FROM books\n]]\n")])])]),a("p",[e._v("where the empty lines between the two sections and between the mappings are mandatory.")]),e._v(" "),a("h2",{attrs:{id:"source-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-query"}},[e._v("#")]),e._v(" Source Query")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("source")]),e._v(" query in a mapping assertion is an SQL query over the underlying relational database and as such it uses the SQL syntax of that specific database dialect.\nSo things like quotes conventions may vary depending on the database system used. For example, in PostgreSQL double quotes are used for tables and column identifiers, while in MySQL backticks are used.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The Ontop SQL parser only parses simple SQL queries without unions, aggregations, order by, etc. Non-parsed queries are treated as black-box views and sent directly to the database so the optimizations that Ontop can apply are limited.")])]),e._v(" "),a("h2",{attrs:{id:"target-triple-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-triple-template"}},[e._v("#")]),e._v(" Target triple template")]),e._v(" "),a("p",[e._v("Here we explain the syntax of IRI and literal templates used in the "),a("code",[e._v("target")]),e._v(" of mapping assertions which is an adaptation of the "),a("a",{attrs:{href:"http://www.w3.or/TR/turtle",target:"_blank",rel:"noopener"}},[e._v("Turtle"),a("OutboundLink")],1),e._v(" syntax. The "),a("strong",[e._v("target triple template")]),e._v(" is written like an RDF subject-predicate-object (SPO) graph.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("target  <http://www.example.org/library#BID_{id}> rdf:type :Book .\n                       [S]                          [P]     [O]\n\ntarget  <http://www.example.org/library#BID_{id}> :title {title} .\n                       [S]                          [P]     [O]\n")])])]),a("p",[e._v("Each triple must be separated by space followed by a period ("),a("code",[e._v("s p o .")]),e._v(") and it is composed of three nodes:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Subject node")]),e._v(". The subject node can be one of the following terms:")]),e._v(" "),a("ol",[a("li",[e._v("IRI or blank node constant: e.g. "),a("code",[e._v("<http://www.example.org/library#BID_FF125>")]),e._v(" or "),a("code",[e._v("_:Library1")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#iri-or-blank-node-template"}},[e._v("IRI or blank node template")]),e._v(": e.g. "),a("code",[e._v("<http://www.example.org/library#BID_{id}>")]),e._v(" or "),a("code",[e._v("_:{id}")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Predicate node")]),e._v(". The predicate node only accepts IRIs, both constants (e.g. "),a("code",[e._v("<http://www.example.org/library#title>")]),e._v(") and templates (e.g. "),a("code",[e._v("<{iri}>")]),e._v(")")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Object node")]),e._v(". The object node can be one of the following terms:")]),e._v(" "),a("ol",[a("li",[e._v("IRI or blank node constant: e.g. "),a("code",[e._v("<http://www.example.org/library#Book>")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#iri-template"}},[e._v("IRI or blank node template")]),e._v(": e.g. "),a("code",[e._v("<http://www.example.org/Author-{pid}>")])]),e._v(" "),a("li",[e._v("Literal constant: either an implicitly typed literal (e.g. "),a("code",[e._v("1")]),e._v(" or "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v('"John"')]),e._v("), an explicitly typed literal (e.g. "),a("code",[e._v('"John"^^xsd:string')]),e._v(", "),a("code",[e._v('"123"^^xsd:integer')]),e._v(") or a literal with language tag (e.g. "),a("code",[e._v('"Il Trono di Spade"@it')]),e._v(").")]),e._v(" "),a("li",[e._v("Literal column: a column from the source query (e.g. "),a("code",[e._v("{title}")]),e._v("). It can also have a type or a language tag.")]),e._v(" "),a("li",[e._v("Literal template: just like literal constants, literal templates can also be explicitly typed or have a language tag (e.g. "),a("code",[e._v('"POINT ({longitude} {latitude})"^^geo:wktLiteral')]),e._v(").")])])])]),e._v(" "),a("p",[e._v("Compared to columns, both IRI and blank node templates are "),a("strong",[e._v("IRI-safe")]),e._v(". This means that they are encoded to be valid IRIs, following the "),a("a",{attrs:{href:"https://www.w3.org/TR/r2rml/#dfn-iri-safe",target:"_blank",rel:"noopener"}},[e._v("R2RML standard"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Literal constants, templates and columns can either be explicitly typed or have a language tag, but the two cannot be combined. For example the following mapping is "),a("em",[e._v("invalid")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles in Italian\nsource        SELECT id, title FROM books where lang='ITALIAN'\ntarget        :BID_{id} :title {title}^^xsd:string@it .\n")])])])]),e._v(" "),a("h3",{attrs:{id:"iri-or-blank-node-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iri-or-blank-node-template"}},[e._v("#")]),e._v(" IRI or Blank Node Template")]),e._v(" "),a("p",[e._v("IRI or blank node templates are used in the target of mapping assertions for identification of generated objects. An IRI/blank node template is a string with placeholders (e.g. "),a("code",[e._v("<http://www.example.org/library#BID_{id}>")]),e._v("). More than one placeholder can appear in a template, which allows to construct complex paths. For example, as an IRI template:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Spare parts\nsource        SELECT product, part, vendor FROM product\ntarget        <http://example.org/{vendor}/{product}/{part}> a :Part .\n")])])]),a("p",[e._v("or as a blank node template:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Spare parts\nsource        SELECT product, part, vendor FROM product\ntarget        _:{product}/{part} a :Part .\n")])])]),a("h4",{attrs:{id:"prefixes-in-iri-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefixes-in-iri-templates"}},[e._v("#")]),e._v(" Prefixes in IRI Templates")]),e._v(" "),a("p",[e._v("Prefixes can be used when writing a IRI template and are replaced by their definition when Ontop parses the mappings.")]),e._v(" "),a("p",[a("em",[e._v("Example")]),e._v(". Assume that the following prefixes are defined:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(":\thttp://www.example.org/ontology1#\np:\thttp://www.example.org/ontology2#\n")])])]),a("p",[e._v("Then this mapping assertion:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Example\nsource        SELECT col1, col2 FROM table\ntarget        <http://www.example.org/ontology1#{col1}> :property <http://www.example.org/ontology2#{col2}>\n")])])]),a("p",[e._v("is equivalent to this mapping assertion:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Example\nsource        SELECT col1, col2 FROM table\ntarget        :{col1} :title p:{col2}\n")])])]),a("h3",{attrs:{id:"literal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#literal"}},[e._v("#")]),e._v(" Literal")]),e._v(" "),a("h4",{attrs:{id:"literal-typing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#literal-typing"}},[e._v("#")]),e._v(" Literal Typing")]),e._v(" "),a("p",[e._v("It is possible to create typed literals by specifying the type in the mapping. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles\nsource        SELECT id, title, edition, comment FROM books\ntarget        :BID_{id} :title {title}^^xsd:string; :edition {edition}^^xsd:integer; :description {comment} .\n")])])]),a("p",[e._v("The type used in the mapping has to agree with the type in the ontology (if specified).\nIf the type is not specified (for example, for the "),a("code",[e._v("description")]),e._v(" property in the previous mapping), the system will look at the SQL type of the SQL column used in the mapping and will use the "),a("a",{attrs:{href:"https://www.w3.org/TR/r2rml/#natural-mapping",target:"_blank",rel:"noopener"}},[a("strong",[e._v("Natural Mapping of SQL values")]),a("OutboundLink")],1),e._v(" as defined by "),a("a",{attrs:{href:"https://www.w3.org/TR/r2rml/",target:"_blank",rel:"noopener"}},[e._v("R2RML standard"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"language-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-tags"}},[e._v("#")]),e._v(" Language tags")]),e._v(" "),a("p",[e._v("Language for a literal can be specified directly using "),a("code",[e._v("@")]),e._v(" symbol, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles in Italian\nsource        SELECT id, title FROM books where lang='ITALIAN'\ntarget        :BID_{id} :title {title}@it .\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Language tags can only be constants, it is not possible to obtain them dynamically from the database. So for example the following mapping is "),a("em",[e._v("invalid")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles in Italian\nsource        SELECT id, title, lang FROM books\ntarget        :BID_{id} :title {title}@{lang} .\n")])])])]),e._v(" "),a("h3",{attrs:{id:"named-graphs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#named-graphs"}},[e._v("#")]),e._v(" Named Graphs")]),e._v(" "),a("p",[e._v("By default, triples generated by a triple pattern are added to the default graph. However, it is also possible to specify a named graph by using the keyword "),a("code",[e._v("GRAPH")]),e._v(" followed by an IRI constant or template and then the triple pattern in curly braces. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles in Italian\nsource        SELECT id, title FROM books where lang='ITALIAN'\ntarget        GRAPH <http://www.example.org/graphs/italian> { :BID_{id} :title {title}@it . }\n")])])]),a("p",[e._v("or, using a template for the graph name:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     Book titles in Italian\nsource        SELECT id, title FROM books WHERE lang='ITALIAN'\ntarget        GRAPH <http://www.example.org/graphs/{lang}> { :BID_{id} :title {title}@it . }\n")])])]),a("h3",{attrs:{id:"compact-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compact-form"}},[e._v("#")]),e._v(" Compact Form")]),e._v(" "),a("p",[e._v("Following the "),a("a",{attrs:{href:"https://www.w3.org/TR/turtle/",target:"_blank",rel:"noopener"}},[e._v("Turtle"),a("OutboundLink")],1),e._v(" syntax, Ontop's native mapping format allows writing an RDF graph in a compact textual form. A set of triples sharing the same subject can be written as a "),a("strong",[e._v("predicate list")]),e._v(", where predicate-object pairs are separated by semicolons. Similarly, a set of triples sharing the same subject and predicate can be written as an "),a("strong",[e._v("object list")]),e._v(", where objects are separated by commas.")]),e._v(" "),a("p",[a("strong",[e._v("Predicate List")]),e._v(": These two examples are equivalent ways of writing the triple template for an Author.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(":Author-{ID} a :Author .\n:Author-{ID} :firstName {FNAME} .\n:Author-{ID} :lastName {LNAME} .\n:Author-{ID} :writes :Book-{ID} .\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(":Author-{ID} a :Author; :firstName {FNAME}; :lastName {LNAME}; :writes :Book-{ID} .\n")])])]),a("p",[a("strong",[e._v("Object List")]),e._v(": These two examples are equivalent ways of writing the triple template for the "),a("em",[e._v("A Game of Thrones")]),e._v(" book.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(':A_Game_of_Thrones :title "A Game of Thrones"@en-US .\n:A_Game_of_Thrones :title "Il Trono di Spade"@it .\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(':A_Game_of_Thrones :title "A Game of Thrones"@en-US, "Il Trono di Spade"@it .\n')])])]),a("h2",{attrs:{id:"meta-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-mapping"}},[e._v("#")]),e._v(" Meta-Mapping")]),e._v(" "),a("p",[e._v("Meta-mapping assertions are syntactically the same as normal assertions, but they allow users to include variables in the targets without restrictions. This means that class and property names can be constructed dynamically from the database.")]),e._v(" "),a("p",[a("em",[e._v("Example")]),e._v(": Consider the following mapping assertions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     mapping1\ntarget        <{iri}> a :{value}_{code} .\nsource        SELECT value, iri, code FROM table1 WHERE code > 0\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mappingId     mapping2\ntarget        <{iri}> :{role}_{code} {value} .\nsource        SELECT value, iri, code, role FROM table1 WHERE code > 0\n")])])]),a("p",[e._v("Suppose we also have a table named "),a("code",[e._v("table1")]),e._v(" that the mapping assertions refer to:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("iri")]),e._v(" "),a("th",[e._v("value")]),e._v(" "),a("th",[e._v("code")]),e._v(" "),a("th",[e._v("role")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("iri1")]),e._v(" "),a("td",[e._v("A")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("P")])]),e._v(" "),a("tr",[a("td",[e._v("iri2")]),e._v(" "),a("td",[e._v("B")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("P")])]),e._v(" "),a("tr",[a("td",[e._v("iri3")]),e._v(" "),a("td",[e._v("A")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("Q")])]),e._v(" "),a("tr",[a("td",[e._v("iri4")]),e._v(" "),a("td",[e._v("B")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("Q")])])])]),e._v(" "),a("p",[e._v("Then "),a("code",[e._v("mapping1")]),e._v(" will generate the following triples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("iri1 a :A_1 .\niri2 a :B_2 .\niri3 a :A_2 .\niri4 a :B_2 .\n")])])]),a("p",[e._v("And "),a("code",[e._v("mapping2")]),e._v(" will generate the following triples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("iri1 :P_1 A .\niri2 :P_2 B .\niri3 :Q_2 A .\niri4 :Q_2 B .\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);