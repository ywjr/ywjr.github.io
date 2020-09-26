(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{299:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return p}));var r=n(0),o=n.n(r);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),h=function(e){var a=o.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},b=function(e){var a=h(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},d=o.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=h(n),d=r,p=b["".concat(c,".").concat(d)]||b[d]||u[d]||t;return n?o.a.createElement(p,i(i({ref:a},s),{},{components:n})):o.a.createElement(p,i({ref:a},s))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,c=new Array(t);c[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<t;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return h}));var r=n(2),o=n(6),t=(n(0),n(299)),c={id:"search",title:"Search",keywords:["algolia","search"]},i={unversionedId:"search",id:"version-1.1.0/search",isDocsHomePage:!1,title:"Search",description:"Docusaurus' own @docusaurus/preset-classic supports a search integration.",source:"@site/versioned_docs\\version-1.1.0\\search.md",slug:"/search",permalink:"/docs/1.1.0/search",editUrl:"http://ywjr.github.io/versioned_docs/version-1.1.0/search.md",version:"1.1.0"},l=[{value:"Using Algolia DocSearch",id:"using-algolia-docsearch",children:[{value:"Connecting Algolia",id:"connecting-algolia",children:[]},{value:"Styling your Algolia search",id:"styling-your-algolia-search",children:[]},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",children:[]},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",children:[]}]},{value:"Using your own search",id:"using-your-own-search",children:[]}],s={rightToc:l};function h(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(t.b)("wrapper",Object(r.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Docusaurus' own ",Object(t.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," supports a search integration."),Object(t.b)("p",null,"There are two main options, you can use ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"https://docsearch.algolia.com"}),"Algolia DocSearch")," or bring in your own ",Object(t.b)("inlineCode",{parentName:"p"},"SearchBar")," component."),Object(t.b)("h2",{id:"using-algolia-docsearch"},"Using Algolia DocSearch"),Object(t.b)("p",null,"Algolia DocSearch works by crawling the content of your website every 24 hours and putting all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API. Note that your website needs to be publicly available for this to work (i.e., not behind a firewall). The service is free."),Object(t.b)("h3",{id:"connecting-algolia"},"Connecting Algolia"),Object(t.b)("p",null,"To connect your docs with Algolia, add an ",Object(t.b)("inlineCode",{parentName:"p"},"algolia")," field in your ",Object(t.b)("inlineCode",{parentName:"p"},"themeConfig"),". ",Object(t.b)("strong",{parentName:"p"},Object(t.b)("a",Object(r.a)({parentName:"strong"},{href:"https://docsearch.algolia.com/apply/"}),"Apply for DocSearch"))," to get your Algolia index and API key."),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      searchParameters: {}, // Optional (if provided by Algolia)\n    },\n    // highlight-end\n  },\n};\n")),Object(t.b)("div",{className:"admonition admonition-info alert alert--info"},Object(t.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(t.b)("h5",{parentName:"div"},Object(t.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(t.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(t.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(t.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(t.b)("p",{parentName:"div"},"The ",Object(t.b)("inlineCode",{parentName:"p"},"searchParameters")," option used to be named ",Object(t.b)("inlineCode",{parentName:"p"},"algoliaOptions")," in Docusaurus v1."))),Object(t.b)("h3",{id:"styling-your-algolia-search"},"Styling your Algolia search"),Object(t.b)("p",null,"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."),Object(t.b)("p",null,"Still, you can reuse the ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"styling-layout#styling-your-site-with-infima"}),"Infima CSS variables")," from Docusaurus to style DocSearch by editing the ",Object(t.b)("inlineCode",{parentName:"p"},"/src/css/custom.css")," file."),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"html[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\nhtml[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n")),Object(t.b)("h3",{id:"customizing-the-algolia-search-behavior"},"Customizing the Algolia search behavior"),Object(t.b)("p",null,"Algolia DocSearch supports a ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"https://autocomplete-experimental.netlify.app/docs/DocSearchModal#reference"}),"list of options")," that you can pass to the ",Object(t.b)("inlineCode",{parentName:"p"},"algolia")," field in the ",Object(t.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file."),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n")),Object(t.b)("h3",{id:"editing-the-algolia-search-component"},"Editing the Algolia search component"),Object(t.b)("p",null,"If you prefer to edit the Algolia search React component, swizzle the ",Object(t.b)("inlineCode",{parentName:"p"},"SearchBar")," component in ",Object(t.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-search-algolia"),":"),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n")),Object(t.b)("h2",{id:"using-your-own-search"},"Using your own search"),Object(t.b)("p",null,"To use your own search, swizzle the ",Object(t.b)("inlineCode",{parentName:"p"},"SearchBar")," component in ",Object(t.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic SearchBar\n")),Object(t.b)("p",null,"This will create a ",Object(t.b)("inlineCode",{parentName:"p"},"src/themes/SearchBar")," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",Object(t.b)("inlineCode",{parentName:"p"},"SearchBar")," component now."),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Notes"),": You can alternatively ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"#editing-the-algolia-search-component"}),"swizzle from Algolia SearchBar")," and create your own search component from there."))}h.isMDXComponent=!0}}]);