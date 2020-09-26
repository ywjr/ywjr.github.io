(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(299)),r={id:"lifecycle-apis",title:"Lifecycle APIs"},c={unversionedId:"lifecycle-apis",id:"lifecycle-apis",isDocsHomePage:!1,title:"Lifecycle APIs",description:"This section is a work in progress.",source:"@site/docs\\lifecycle-apis.md",slug:"/lifecycle-apis",permalink:"/docs/next/lifecycle-apis",editUrl:"http://ywjr.github.io/docs/lifecycle-apis.md",version:"current"},s=[{value:"<code>validateOptions({options,validate})</code>",id:"validateoptionsoptionsvalidate",children:[{value:"<code>options</code>",id:"options",children:[]},{value:"<code>validate</code>",id:"validate",children:[]}]},{value:"<code>validateThemeConfig({themeConfig,validate})</code>",id:"validatethemeconfigthemeconfigvalidate",children:[{value:"<code>themeConfig</code>",id:"themeconfig",children:[]},{value:"<code>validate</code>",id:"validate-1",children:[]}]},{value:"<code>getPathsToWatch()</code>",id:"getpathstowatch",children:[]},{value:"<code>async loadContent()</code>",id:"async-loadcontent",children:[]},{value:"<code>async contentLoaded({content, actions})</code>",id:"async-contentloadedcontent-actions",children:[{value:"<code>content</code>",id:"content",children:[]},{value:"<code>actions</code>",id:"actions",children:[]}]},{value:"<code>configureWebpack(config, isServer, utils)</code>",id:"configurewebpackconfig-isserver-utils",children:[{value:"<code>config</code>",id:"config",children:[]},{value:"<code>isServer</code>",id:"isserver",children:[]},{value:"<code>utils</code>",id:"utils",children:[]},{value:"Merge strategy",id:"merge-strategy",children:[]}]},{value:"<code>postBuild(props)</code>",id:"postbuildprops",children:[]},{value:"<code>extendCli(cli)</code>",id:"extendclicli",children:[]},{value:"<code>injectHtmlTags()</code>",id:"injecthtmltags",children:[]},{value:"<code>getThemePath()</code>",id:"getthemepath",children:[]},{value:"<code>getTypeScriptThemePath()</code>",id:"gettypescriptthemepath",children:[]},{value:"<code>getSwizzleComponentList()</code>",id:"getswizzlecomponentlist",children:[]},{value:"<code>getClientModules()</code>",id:"getclientmodules",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("p",null,"Lifecycle APIs are shared by Themes and Plugins."),Object(o.b)("h2",{id:"validateoptionsoptionsvalidate"},Object(o.b)("inlineCode",{parentName:"h2"},"validateOptions({options,validate})")),Object(o.b)("p",null,"Return validated and normalized options for the plugin. This method is called before the plugin is initialized.You must return options since the returned options will be passed to plugin during intialization."),Object(o.b)("h3",{id:"options"},Object(o.b)("inlineCode",{parentName:"h3"},"options")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",Object(o.b)("inlineCode",{parentName:"p"},"options")," passed to plugin for validation and normalization."),Object(o.b)("h3",{id:"validate"},Object(o.b)("inlineCode",{parentName:"h3"},"validate")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," function which takes a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi"))," schema and options as argument, returns validated and normalized options. ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi")," is recommended for validation and normalization of options."))),Object(o.b)("p",null,"If you don't use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options and return options in case of success."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{8-11} title="my-plugin/src/index.js"',"{8-11}":!0,title:'"my-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n};\n\nmodule.exports.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n")),Object(o.b)("p",null,"You can also use ES modules style exports."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{8-11} title="my-plugin/src/index.ts"',"{8-11}":!0,title:'"my-plugin/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n}\n")),Object(o.b)("h2",{id:"validatethemeconfigthemeconfigvalidate"},Object(o.b)("inlineCode",{parentName:"h2"},"validateThemeConfig({themeConfig,validate})")),Object(o.b)("p",null,"Return validated and normalized configuration for the theme."),Object(o.b)("h3",{id:"themeconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"themeConfig")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",Object(o.b)("inlineCode",{parentName:"p"},"themeConfig")," provided in ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," for validation and normalization."),Object(o.b)("h3",{id:"validate-1"},Object(o.b)("inlineCode",{parentName:"h3"},"validate")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," function which takes a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi"))," schema and ",Object(o.b)("inlineCode",{parentName:"p"},"themeConfig")," as argument, returns validated and normalized options. ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi")," is recommended for validation and normalization of theme config."))),Object(o.b)("p",null,"If you don't use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/@hapi/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{8-11} title="my-theme/src/index.js"',"{8-11}":!0,title:'"my-theme/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n};\n\nmodule.exports.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n")),Object(o.b)("p",null,"You can also use ES modules style exports."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{8-11} title="my-theme/src/index.ts"',"{8-11}":!0,title:'"my-theme/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n")),Object(o.b)("h2",{id:"getpathstowatch"},Object(o.b)("inlineCode",{parentName:"h2"},"getPathsToWatch()")),Object(o.b)("p",null,"Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",Object(o.b)("inlineCode",{parentName:"p"},"context")," and ",Object(o.b)("inlineCode",{parentName:"p"},"options")," from Node, which you may use to find the necessary directory information about the site."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{5-7} title="docusaurus-plugin/src/index.js"',"{5-7}":!0,title:'"docusaurus-plugin/src/index.js"'}),"const path = require('path');\nmodule.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"async-loadcontent"},Object(o.b)("inlineCode",{parentName:"h2"},"async loadContent()")),Object(o.b)("p",null,"Plugins should use this lifecycle to fetch from data sources (filesystem, remote API, headless CMS, etc) or doing some server processing."),Object(o.b)("p",null,"For example, this plugin below return a random integer between 1 to 10 as content;"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{5-6} title="docusaurus-plugin/src/index.js"',"{5-6}":!0,title:'"docusaurus-plugin/src/index.js"'}),"const path = require('path');\nmodule.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    async loadContent() {\n      return 1 + Math.floor(Math.random() * 10);\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"async-contentloadedcontent-actions"},Object(o.b)("inlineCode",{parentName:"h2"},"async contentLoaded({content, actions})")),Object(o.b)("p",null,"Plugins should use the data loaded in ",Object(o.b)("inlineCode",{parentName:"p"},"loadContent")," and construct the pages/routes that consume the loaded data (optional)."),Object(o.b)("h3",{id:"content"},Object(o.b)("inlineCode",{parentName:"h3"},"content")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"contentLoaded")," will be called ",Object(o.b)("em",{parentName:"p"},"after")," ",Object(o.b)("inlineCode",{parentName:"p"},"loadContent")," is done, the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"loadContent()")," will be passed to ",Object(o.b)("inlineCode",{parentName:"p"},"contentLoaded")," as ",Object(o.b)("inlineCode",{parentName:"p"},"content"),"."),Object(o.b)("h3",{id:"actions"},Object(o.b)("inlineCode",{parentName:"h3"},"actions")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"actions")," contain two functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"addRoute(config: RouteConfig): void"))),Object(o.b)("p",null,"Create a route to add to the website."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface RouteConfig {\n  path: string;\n  component: string;\n  modules?: RouteModule;\n  routes?: RouteConfig[];\n  exact?: boolean;\n  priority?: number;\n}\ninterface RouteModule {\n  [module: string]: Module | RouteModule | RouteModule[];\n}\ntype Module =\n  | {\n      path: string;\n      __import?: boolean;\n      query?: ParsedUrlQueryInput;\n    }\n  | string;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createData(name: string, data: any): Promise<string>"))),Object(o.b)("p",null,"A function to help you create static data (generally json or string), that you can provide to your routes as props."),Object(o.b)("p",null,"For example, this plugin below create a ",Object(o.b)("inlineCode",{parentName:"p"},"/friends")," page which display ",Object(o.b)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'}),"import React from 'react';\n\nexport default function FriendsComponent({friends}) {\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-23} title="docusaurus-friends-plugin/src/index.js"',"{4-23}":!0,title:'"docusaurus-friends-plugin/src/index.js"'}),"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    async contentLoaded({content, actions}) {\n      const {createData, addRoute} = actions;\n      // Create friends.json\n      const friends = ['Yangshun', 'Sebastien'];\n      const friendsJsonPath = await createData(\n        'friends.json',\n        JSON.stringify(friends),\n      );\n\n      // Add the '/friends' routes, and ensure it receives the friends props\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        modules: {\n          // propName -> json file path\n          friends: friendsJsonPath,\n        },\n        exact: true,\n      });\n    },\n  };\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setGlobalData(data: any): void"))),Object(o.b)("p",null,"This function permits to create some global plugin data, that can be read from any page, including the pages created by other plugins, and your theme layout."),Object(o.b)("p",null,"This data become accessible to your client-side/theme code, through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/docusaurus-core#useglobaldata"}),Object(o.b)("inlineCode",{parentName:"a"},"useGlobalData"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/docusaurus-core#useplugindatapluginname-string-pluginid-string"}),Object(o.b)("inlineCode",{parentName:"a"},"usePluginData"))),Object(o.b)("p",null,"One this data is created, you can access it with the global data hooks APIs"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Global data is... global: its size affects the loading time of all pages of your site, so try to keep it small."),Object(o.b)("p",{parentName:"div"},"Prefer ",Object(o.b)("inlineCode",{parentName:"p"},"createData")," and page-specific data whenever possible."))),Object(o.b)("p",null,"For example, this plugin below create a ",Object(o.b)("inlineCode",{parentName:"p"},"/friends")," page which display ",Object(o.b)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'}),"import React from 'react';\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nexport default function FriendsComponent() {\n  const {friends} = usePluginData('my-friends-plugin');\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-14} title="docusaurus-friends-plugin/src/index.js"',"{4-14}":!0,title:'"docusaurus-friends-plugin/src/index.js"'}),"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    async contentLoaded({content, actions}) {\n      const {setGlobalData, addRoute} = actions;\n      // Create friends global data\n      setGlobalData({friends: ['Yangshun', 'Sebastien']});\n\n      // Add the '/friends' routes\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        exact: true,\n      });\n    },\n  };\n}\n")),Object(o.b)("h2",{id:"configurewebpackconfig-isserver-utils"},Object(o.b)("inlineCode",{parentName:"h2"},"configureWebpack(config, isServer, utils)")),Object(o.b)("p",null,"Modifies the internal webpack config. If the return value is a JavaScript object, it will be merged into the final config using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge"}),Object(o.b)("inlineCode",{parentName:"a"},"webpack-merge")),". If it is a function, it will be called and receive ",Object(o.b)("inlineCode",{parentName:"p"},"config")," as the first argument and an ",Object(o.b)("inlineCode",{parentName:"p"},"isServer")," flag as the argument argument."),Object(o.b)("h3",{id:"config"},Object(o.b)("inlineCode",{parentName:"h3"},"config")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"configureWebpack")," is called with ",Object(o.b)("inlineCode",{parentName:"p"},"config")," generated according to client/server build. You may treat this as the base config to be merged with."),Object(o.b)("h3",{id:"isserver"},Object(o.b)("inlineCode",{parentName:"h3"},"isServer")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"configureWebpack")," will be called both in server build and in client build. The server build receives ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and the client build receives ",Object(o.b)("inlineCode",{parentName:"p"},"false")," as ",Object(o.b)("inlineCode",{parentName:"p"},"isServer"),"."),Object(o.b)("h3",{id:"utils"},Object(o.b)("inlineCode",{parentName:"h3"},"utils")),Object(o.b)("p",null,"The initial call to ",Object(o.b)("inlineCode",{parentName:"p"},"configureWebpack")," also receives a util object consists of three functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getStyleLoaders(isServer: boolean, cssOptions: {[key: string]: any}): Loader[]")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getCacheLoader(isServer: boolean, cacheOptions?: {}): Loader | null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getBabelLoader(isServer: boolean, babelOptions?: {}): Loader"))),Object(o.b)("p",null,"You may use them to return your webpack configures conditionally."),Object(o.b)("p",null,"For example, this plugin below modify the webpack config to transpile ",Object(o.b)("inlineCode",{parentName:"p"},".foo")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-11} title="docusaurus-plugin/src/index.js"',"{4-11}":!0,title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      const {getCacheLoader} = utils;\n      return {\n        module: {\n          rules: [\n            {\n              test: /\\.foo$/,\n              use: [getCacheLoader(isServer), 'my-custom-webpack-loader'],\n            },\n          ],\n        },\n      };\n    },\n  };\n};\n")),Object(o.b)("h3",{id:"merge-strategy"},"Merge strategy"),Object(o.b)("p",null,"We merge the Webpack configuration parts of plugins into the global Webpack config using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge"}),"webpack-merge"),"."),Object(o.b)("p",null,"It is possible to specify the merge strategy. For example, if you want a webpack rule to be prepended instead of appended:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-11} title="docusaurus-plugin/src/index.js"',"{4-11}":!0,title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      return {\n        mergeStrategy: {'module.rules': 'prepend'},\n        module: {rules: [myRuleToPrepend]},\n      };\n    },\n  };\n};\n")),Object(o.b)("p",null,"Read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge#merging-with-strategies"}),"webpack-merge strategy doc")," for more details."),Object(o.b)("h2",{id:"postbuildprops"},Object(o.b)("inlineCode",{parentName:"h2"},"postBuild(props)")),Object(o.b)("p",null,"Called when a (production) build finishes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type Props = {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n  headTags: string;\n  preBodyTags: string;\n  postBodyTags: string;\n  routesPaths: string[];\n  plugins: Plugin<any>[];\n};\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-9} title="docusaurus-plugin/src/index.js"',"{4-9}":!0,title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {\n      // Print out to console all the rendered routes.\n      routesPaths.map((route) => {\n        console.log(route);\n      });\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"extendclicli"},Object(o.b)("inlineCode",{parentName:"h2"},"extendCli(cli)")),Object(o.b)("p",null,"Register an extra command to enhance the CLI of docusaurus. ",Object(o.b)("inlineCode",{parentName:"p"},"cli")," is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/commander"}),"commander")," object."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-11} title="docusaurus-plugin/src/index.js"',"{4-11}":!0,title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"injecthtmltags"},Object(o.b)("inlineCode",{parentName:"h2"},"injectHtmlTags()")),Object(o.b)("p",null,"Inject head and/or body HTML tags to Docusaurus generated HTML."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function injectHtmlTags(): {\n  headTags?: HtmlTags;\n  preBodyTags?: HtmlTags;\n  postBodyTags?: HtmlTags;\n};\n\ntype HtmlTags = string | HtmlTagObject | (string | HtmlTagObject)[];\n\ninterface HtmlTagObject {\n  /**\n   * Attributes of the HTML tag\n   * E.g. `{'disabled': true, 'value': 'demo', 'rel': 'preconnect'}`\n   */\n  attributes?: {\n    [attributeName: string]: string | boolean;\n  };\n  /**\n   * The tag name e.g. `div`, `script`, `link`, `meta`\n   */\n  tagName: string;\n  /**\n   * The inner HTML\n   */\n  innerHTML?: string;\n}\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4-28} title="docusaurus-plugin/src/index.js"',"{4-28}":!0,title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    injectHtmlTags() {\n      return {\n        headTags: [\n          {\n            tagName: 'link',\n            attributes: {\n              rel: 'preconnect',\n              href: 'https://www.github.com',\n            },\n          },\n        ],\n        preBodyTags: [\n          {\n            tagName: 'script',\n            attributes: {\n              charset: 'utf-8',\n              src: '/noflash.js',\n            },\n          },\n        ],\n        postBodyTags: [`<div> This is post body </div>`],\n      };\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"getthemepath"},Object(o.b)("inlineCode",{parentName:"h2"},"getThemePath()")),Object(o.b)("p",null,"Returns the path to the directory where the theme components can be found. When your users calls ",Object(o.b)("inlineCode",{parentName:"p"},"swizzle"),", ",Object(o.b)("inlineCode",{parentName:"p"},"getThemePath")," is called and its returned path is used to find your theme components."),Object(o.b)("p",null,"If you use the folder directory above, your ",Object(o.b)("inlineCode",{parentName:"p"},"getThemePath")," can be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{6-8} title="my-theme/src/index.js"',"{6-8}":!0,title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'name-of-my-theme',\n    getThemePath() {\n      return path.resolve(__dirname, './theme');\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"gettypescriptthemepath"},Object(o.b)("inlineCode",{parentName:"h2"},"getTypeScriptThemePath()")),Object(o.b)("p",null,"Similar to ",Object(o.b)("inlineCode",{parentName:"p"},"getThemePath()"),", it should return the path to the directory where the source code of TypeScript theme components can be found. Theme components under this path will ",Object(o.b)("strong",{parentName:"p"},"not")," be resolved by Webpack. Therefore, it is not a replacement of ",Object(o.b)("inlineCode",{parentName:"p"},"getThemePath()"),". Instead, this path is purely for swizzling TypeScript theme components."),Object(o.b)("p",null,"If you want to support TypeScript component swizzling for your theme, you can make the path returned by ",Object(o.b)("inlineCode",{parentName:"p"},"getTypeScriptThemePath()")," be your source directory, and make path returned by ",Object(o.b)("inlineCode",{parentName:"p"},"getThemePath()")," be the compiled JavaScript output."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{6-13} title="my-theme/src/index.js"',"{6-13}":!0,title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'name-of-my-theme',\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return path.join(__dirname, '..', 'lib', 'theme');\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return path.resolve(__dirname, './theme');\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"getswizzlecomponentlist"},Object(o.b)("inlineCode",{parentName:"h2"},"getSwizzleComponentList()")),Object(o.b)("p",null,"Return a list of stable component that are considered as safe for swizzling. These components will be listed in swizzle component without ",Object(o.b)("inlineCode",{parentName:"p"},"--danger"),". All the components are considers unstable by default. If an empty array is returned then all components are considered unstable, if ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," is returned then all component are considered stable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{0-12} title="my-theme/src/index.js"',"{0-12}":!0,title:'"my-theme/src/index.js"'}),"const swizzleAllowedComponents = [\n  'CodeBlock',\n  'DocSidebar',\n  'Footer',\n  'NotFound',\n  'SearchBar',\n  'hooks/useTheme',\n  'prism-include-languages',\n];\n\nmodule.exports.getSwizzleComponentList = () => swizzleAllowedComponents;\n")),Object(o.b)("h2",{id:"getclientmodules"},Object(o.b)("inlineCode",{parentName:"h2"},"getClientModules()")),Object(o.b)("p",null,"Returns an array of paths to the modules that are to be imported in the client bundle. These modules are imported globally before React even renders the initial UI."),Object(o.b)("p",null,"As an example, to make your theme load a ",Object(o.b)("inlineCode",{parentName:"p"},"customCss")," object from ",Object(o.b)("inlineCode",{parentName:"p"},"options")," passed in by the user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{7-9} title="my-theme/src/index.js"',"{7-9}":!0,title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  const {customCss} = options || {};\n  return {\n    name: 'name-of-my-theme',\n    getClientModules() {\n      return [customCss];\n    },\n  };\n};\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Here's a mind model for a presumptuous plugin implementation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const DEFAULT_OPTIONS = {\n  // Some defaults.\n};\n\n// A JavaScript function that returns an object.\n// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.\n// `opts` is the user-defined options.\nmodule.exports = function (context, opts) {\n  // Merge defaults with user-defined options.\n  const options = {...DEFAULT_OPTIONS, ...options};\n\n  return {\n    // A compulsory field used as the namespace for directories to cache\n    // the intermediate data for each plugin.\n    // If you're writing your own local plugin, you will want it to\n    // be unique in order not to potentially conflict with imported plugins.\n    // A good way will be to add your own project name within.\n    name: 'docusaurus-my-project-cool-plugin',\n\n    async loadContent() {\n      // The loadContent hook is executed after siteConfig and env has been loaded.\n      // You can return a JavaScript object that will be passed to contentLoaded hook.\n    },\n\n    async contentLoaded({content, actions}) {\n      // The contentLoaded hook is done after loadContent hook is done.\n      // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)\n    },\n\n    async postBuild(props) {\n      // After docusaurus <build> finish.\n    },\n\n    // TODO\n    async postStart(props) {\n      // docusaurus <start> finish\n    },\n\n    // TODO\n    afterDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverbefore\n    },\n\n    // TODO\n    beforeDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverafter\n    },\n\n    configureWebpack(config, isServer) {\n      // Modify internal webpack config. If returned value is an Object, it\n      // will be merged into the final config using webpack-merge;\n      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.\n    },\n\n    getPathsToWatch() {\n      // Paths to watch.\n    },\n\n    getThemePath() {\n      // Returns the path to the directory where the theme components can\n      // be found.\n    },\n\n    getClientModules() {\n      // Return an array of paths to the modules that are to be imported\n      // in the client bundle. These modules are imported globally before\n      // React even renders the initial UI.\n    },\n\n    extendCli(cli) {\n      // Register an extra command to enhance the CLI of Docusaurus\n    },\n\n    injectHtmlTags() {\n      // Inject head and/or body HTML tags.\n    },\n  };\n};\n")))}d.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);