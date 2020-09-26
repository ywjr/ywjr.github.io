(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),i=(n(0),n(299)),r={id:"configuration",title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Docusaurus has a unique take on configurations. We encourage you to congregate information of your site into one place. We guard the fields of this file, and facilitate making this data object accessible across your site.",source:"@site/docs\\configuration.md",slug:"/configuration",permalink:"/docs/next/configuration",editUrl:"http://ywjr.github.io/docs/configuration.md",version:"current"},s=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",children:[{value:"Site metadata",id:"site-metadata",children:[]},{value:"Deployment configurations",id:"deployment-configurations",children:[]},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",children:[]},{value:"Custom configurations",id:"custom-configurations",children:[]}]},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",children:[]},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information of your site into one place. We guard the fields of this file, and facilitate making this data object accessible across your site."),Object(i.b)("p",null,"Keeping a well-maintained ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors be able to focus on documentation while still being able to customize the site."),Object(i.b)("h2",{id:"what-goes-into-a-docusaurusconfigjs"},"What goes into a ",Object(i.b)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),Object(i.b)("p",null,"You should not have to write your ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),Object(i.b)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),Object(i.b)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#what-goes-into-a-docusaurusconfigjs"}),"What goes into a ",Object(i.b)("inlineCode",{parentName:"a"},"docusaurus.config.js"),"?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#site-metadata"}),"Site metadata")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#deployment-configurations"}),"Deployment configurations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#theme-plugin-and-preset-configurations"}),"Theme, plugin, and preset configurations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#custom-configurations"}),"Custom configurations")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#customizing-babel-configuration"}),"Customizing Babel Configuration"))),Object(i.b)("p",null,"For exact reference to each of the configurable fields, you may refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/docusaurus.config.js"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),Object(i.b)("h3",{id:"site-metadata"},"Site metadata"),Object(i.b)("p",null,"Site metadata contains the essential global metadata such as ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", ",Object(i.b)("inlineCode",{parentName:"p"},"url"),", ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," and ",Object(i.b)("inlineCode",{parentName:"p"},"favicon"),"."),Object(i.b)("p",null,"They are used in a number of places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),Object(i.b)("h3",{id:"deployment-configurations"},"Deployment configurations"),Object(i.b)("p",null,"Deployment configurations such as ",Object(i.b)("inlineCode",{parentName:"p"},"projectName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"organizationName")," are used when you deploy your site with the ",Object(i.b)("inlineCode",{parentName:"p"},"deploy")," command."),Object(i.b)("p",null,"It is recommended to check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/deployment"}),"deployment docs")," for more information."),Object(i.b)("h3",{id:"theme-plugin-and-preset-configurations"},"Theme, plugin, and preset configurations"),Object(i.b)("p",null,"List the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/using-themes"}),"theme"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/using-plugins"}),"plugins"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/presets"}),"presets")," for your site in the ",Object(i.b)("inlineCode",{parentName:"p"},"themes"),", ",Object(i.b)("inlineCode",{parentName:"p"},"plugins"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),Object(i.b)("p",null,"They can also be loaded from local directories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),Object(i.b)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    '@docusaurus/plugin-content-pages',\n  ],\n};\n")),Object(i.b)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",Object(i.b)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," refers to ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," refers to ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n  ],\n};\n")),Object(i.b)("p",null,"For further help configuring themes, plugins, and presets, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/using-themes"}),"Using Themes"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/using-plugins"}),"Using Plugins"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/presets"}),"Using Presets"),"."),Object(i.b)("h3",{id:"custom-configurations"},"Custom configurations"),Object(i.b)("p",null,"Docusaurus guards ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",Object(i.b)("inlineCode",{parentName:"p"},"customFields"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),Object(i.b)("h2",{id:"accessing-configuration-from-components"},"Accessing configuration from components"),Object(i.b)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",Object(i.b)("inlineCode",{parentName:"p"},"siteConfig"),"."),Object(i.b)("p",null,"Basic example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."))),Object(i.b)("h2",{id:"customizing-babel-configuration"},"Customizing Babel Configuration"),Object(i.b)("p",null,"For new Docusaurus projects, we automatically generated a ",Object(i.b)("inlineCode",{parentName:"p"},"babel.config.js")," in project root."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),Object(i.b)("p",null,"Most of the times, this configuration will work just fine. If you want to customize it, you can directly edit this file to customize babel configuration. For your changes to take effect, you need to restart Docusaurus devserver."))}l.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);