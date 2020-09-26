(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(299)),r={id:"creating-pages",title:"Creating Pages",slug:"/creating-pages"},c={unversionedId:"guides/creating-pages",id:"version-1.1.0/guides/creating-pages",isDocsHomePage:!1,title:"Creating Pages",description:"In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages like a showcase page, playground page or support page.",source:"@site/versioned_docs\\version-1.1.0\\guides\\creating-pages.md",slug:"/creating-pages",permalink:"/docs/1.1.0/creating-pages",editUrl:"http://ywjr.github.io/versioned_docs/version-1.1.0/guides/creating-pages.md",version:"1.1.0"},l=[{value:"Add a React page",id:"add-a-react-page",children:[]},{value:"Add a Markdown page",id:"add-a-markdown-page",children:[]},{value:"Routing",id:"routing",children:[]},{value:"Using React",id:"using-react",children:[]},{value:"Duplicate Routes",id:"duplicate-routes",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages like a showcase page, playground page or support page."),Object(i.b)("p",null,"The functionality of pages is powered by ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-pages"),"."),Object(i.b)("p",null,"You can use React components, or Markdown."),Object(i.b)("h2",{id:"add-a-react-page"},"Add a React page"),Object(i.b)("p",null,"Create a file ",Object(i.b)("inlineCode",{parentName:"p"},"/src/pages/helloReact.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/pages/helloReact.js"',title:'"/src/pages/helloReact.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nfunction Hello() {\n  return (\n    <Layout title=\"Hello\">\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '50vh',\n          fontSize: '20px',\n        }}>\n        <p>\n          Edit <code>pages/hello.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n\nexport default Hello;\n")),Object(i.b)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000/helloReact"),", you will see the new page you just created."),Object(i.b)("p",null,"Each page doesn't come with any styling. You will need to import the ",Object(i.b)("inlineCode",{parentName:"p"},"Layout")," component from ",Object(i.b)("inlineCode",{parentName:"p"},"@theme/Layout")," and wrap your contents within that component if you want the navbar and/or footer to appear."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can also create TypeScript pages with the ",Object(i.b)("inlineCode",{parentName:"p"},".tsx")," extension (",Object(i.b)("inlineCode",{parentName:"p"},"helloReact.tsx"),")."))),Object(i.b)("h2",{id:"add-a-markdown-page"},"Add a Markdown page"),Object(i.b)("p",null,"Create a file ",Object(i.b)("inlineCode",{parentName:"p"},"/src/pages/helloMarkdown.md"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:'title="/src/pages/helloMarkdown.md"',title:'"/src/pages/helloMarkdown.md"'}),"---\ntitle: my hello page title\ndescription: my hello page description\n---\n\n# Hello\n\nHow are you?\n")),Object(i.b)("p",null,"In the same way, a page will be created at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000/helloMarkdown"),"."),Object(i.b)("p",null,"Markdown pages are less flexible than React pages, because it always uses the theme layout."),Object(i.b)("p",null,"Here's an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/examples/markdownPageExample"}),"example markdown page"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can use the full power of React in Markdown pages too, refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX")," documentation."))),Object(i.b)("h2",{id:"routing"},"Routing"),Object(i.b)("p",null,"If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under ",Object(i.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory will be automatically converted to a website page, following the ",Object(i.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory hierarchy. For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/index.js")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"<baseUrl>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/foo.js")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/foo/test.js")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo/test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/foo/index.js")," \u2192 ",Object(i.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo/"))),Object(i.b)("p",null,'In this component-based development era, it is encouraged to co-locate your styling, markup and behavior together into components. Each page is a component, and if you need to customize your page design with your own styles, we recommend co-locating your styles with the page component in its own directory. For example, to create a "Support" page, you could do one of the following:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/support.js")," file"),Object(i.b)("li",{parentName:"ul"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/support/")," directory and a ",Object(i.b)("inlineCode",{parentName:"li"},"/src/pages/support/index.js")," file.")),Object(i.b)("p",null,"The latter is preferred as it has the benefits of letting you put files related to the page within that directory. For example, a CSS module file (",Object(i.b)("inlineCode",{parentName:"p"},"styles.module.css"),') with styles meant to only be used on the "Support" page. ',Object(i.b)("strong",{parentName:"p"},"Note:")," this is merely a recommended directory structure and you will still need to manually import the CSS module file within your component module (",Object(i.b)("inlineCode",{parentName:"p"},"support/index.js"),"). By default, any Markdown or Javascript file starting with ",Object(i.b)("inlineCode",{parentName:"p"},"_")," will be ignored, and no routes will be created for that file (see the ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," option)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"my-website\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u251c\u2500\u2500 index.js\n|       \u251c\u2500\u2500_ignored.js\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n.\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All JavaScript/TypeScript files within the ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages/")," directory will have corresponding website paths generated for them. If you want to create reusable components into that directory, use the ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," option (by default, files prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"_"),", test files(",Object(i.b)("inlineCode",{parentName:"p"},".test.js"),") and files in ",Object(i.b)("inlineCode",{parentName:"p"},"__tests__")," directory are not turned into pages)."))),Object(i.b)("h2",{id:"using-react"},"Using React"),Object(i.b)("p",null,"React is used as the UI library to create pages. Every page component should export a React component, and you can leverage on the expressiveness of React to build rich and interactive content."),Object(i.b)("h2",{id:"duplicate-routes"},"Duplicate Routes"),Object(i.b)("p",null,"You may accidentally create multiple pages that are meant to be accessed on the same route. When this happens, Docusaurus will warn you about duplicate routes when you run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build"),", but the site will still be built successfully. The page that was created last will be accessible, but it will override other conflicting pages. To resolve this issue, you should modify or remove any conflicting routes."))}p.isMDXComponent=!0},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);