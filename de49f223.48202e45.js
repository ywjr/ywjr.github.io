(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{265:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(2),o=a(6),c=(a(0),a(299)),s=a(304),i=a(305),r={id:"using-themes",title:"Themes"},l={unversionedId:"using-themes",id:"version-1.1.0/using-themes",isDocsHomePage:!1,title:"Themes",description:"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes.",source:"@site/versioned_docs\\version-1.1.0\\using-themes.md",slug:"/using-themes",permalink:"/docs/1.1.0/using-themes",editUrl:"http://ywjr.github.io/versioned_docs/version-1.1.0/using-themes.md",version:"1.1.0"},u=[{value:"Using themes",id:"using-themes",children:[]},{value:"Theme components",id:"theme-components",children:[]},{value:"Swizzling theme components",id:"swizzling-theme-components",children:[]},{value:"Official themes by Docusaurus",id:"official-themes-by-docusaurus",children:[{value:"<code>@docusaurus/theme-classic</code>",id:"docusaurustheme-classic",children:[]},{value:"<code>@docusaurus/theme-bootstrap</code>",id:"docusaurustheme-bootstrap",children:[]},{value:"<code>@docusaurus/theme-search-algolia</code>",id:"docusaurustheme-search-algolia",children:[]},{value:"<code>@docusaurus/theme-live-codeblock</code>",id:"docusaurustheme-live-codeblock",children:[]}]},{value:"Themes design",id:"themes-design",children:[]},{value:"Writing customized Docusaurus themes",id:"writing-customized-docusaurus-themes",children:[]}],b={rightToc:u};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes."),Object(c.b)("h2",{id:"using-themes"},"Using themes"),Object(c.b)("p",null,"To use themes, specify the themes in your ",Object(c.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". You may use multiple themes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n")),Object(c.b)("h2",{id:"theme-components"},"Theme components"),Object(c.b)("p",null,"Most of the time, theme is used to provide a set of React components, e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"Navbar"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Layout"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Footer"),"."),Object(c.b)("p",null,"Users can use these components in their code by importing them using the ",Object(c.b)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Navbar from '@theme/Navbar';\n")),Object(c.b)("p",null,"The alias ",Object(c.b)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"A user's ",Object(c.b)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),Object(c.b)("li",{parentName:"ol"},"A Docusaurus theme packages's ",Object(c.b)("inlineCode",{parentName:"li"},"theme")," directory."),Object(c.b)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),Object(c.b)("p",null,"Given the following structure"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 docusaurus-theme\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",Object(c.b)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. In iOS, method swizzling is the process of changing the implementation of an existing selector (method). In the context of a website, component swizzling means providing an alternative component that takes precedence over the component provided by the theme."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Themes are for providing UI components to present the content.")," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, so it makes it easy to swap out the themes for other designs (i.e., Bootstrap)."),Object(c.b)("p",null,"For example, a Docusaurus blog consists of a blog plugin and a blog theme."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"{\n  theme: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n}\n")),Object(c.b)("p",null,"And if you want to use Bootstrap styling, you can swap out the theme with ",Object(c.b)("inlineCode",{parentName:"p"},"theme-blog-bootstrap")," (fictitious non-existing theme):"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"{\n  theme: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n}\n")),Object(c.b)("p",null,"The content plugin remains the same and the only thing you need to change is the theme."),Object(c.b)("h2",{id:"swizzling-theme-components"},"Swizzling theme components"),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We would like to discourage swizzling of components until we've minimally reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future."))),Object(c.b)("p",null,"Docusaurus Themes' components are designed to be replaceable. To make it easier for you, we created a command for you to replace theme components called ",Object(c.b)("inlineCode",{parentName:"p"},"swizzle"),"."),Object(c.b)("p",null,"To swizzle a component for a theme, run the following command in your doc site:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docusaurus swizzle <theme name> [component name]\n")),Object(c.b)("p",null,"As an example, to swizzle the ",Object(c.b)("inlineCode",{parentName:"p"},"<Footer />")," component in ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," for your site, run:"),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer\n")))),Object(c.b)("p",null,"This will copy the current ",Object(c.b)("inlineCode",{parentName:"p"},"<Footer />")," component used by the theme to a ",Object(c.b)("inlineCode",{parentName:"p"},"src/theme/Footer")," directory under the root of your site, which is where Docusaurus will look for swizzled components. Docusaurus will then use swizzled component in place of the original one from the theme."),Object(c.b)("p",null,"Although we highly discourage swizzling of all components, if you wish to do that, run:"),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic\n")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": You need to restart your webpack dev server in order for Docusaurus to know about the new component."),Object(c.b)("h2",{id:"official-themes-by-docusaurus"},"Official themes by Docusaurus"),Object(c.b)("h3",{id:"docusaurustheme-classic"},Object(c.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-classic")),Object(c.b)("p",null,"The classic theme for Docusaurus. You can refer to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.1.0/theme-classic"}),"classic theme configuration")," for more details on the configuration."),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-classic\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-classic\n")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you have installed ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency."))),Object(c.b)("h3",{id:"docusaurustheme-bootstrap"},Object(c.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-bootstrap")),Object(c.b)("p",null,"The bootstrap theme for Docusaurus. You can refer to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.1.0/theme-bootstrap"}),"bootstrap theme configuration")," for more details on the configuration."),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-bootstrap\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-bootstrap\n")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you have installed ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-bootstrap"),", you don't need to install it as a dependency."))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This theme is a work in progress."))),Object(c.b)("h3",{id:"docusaurustheme-search-algolia"},Object(c.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-search-algolia")),Object(c.b)("p",null,"This theme provides a ",Object(c.b)("inlineCode",{parentName:"p"},"@theme/SearchBar")," component that integrates with Algolia DocSearch easily. Combined with ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),", it provides a very easy search integration. You can read more on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.1.0/search"}),"search")," documentation."),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-search-algolia\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-search-algolia\n")))),Object(c.b)("p",null,"This theme also adds search page available at ",Object(c.b)("inlineCode",{parentName:"p"},"/search")," path with OpenSearch support."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you have installed ",Object(c.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency."))),Object(c.b)("h3",{id:"docusaurustheme-live-codeblock"},Object(c.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-live-codeblock")),Object(c.b)("p",null,"This theme provides a ",Object(c.b)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.1.0/markdown-features#interactive-code-editor"}),"interactive code editor")," documentation."),Object(c.b)(s.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-live-codeblock\n"))),Object(c.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-live-codeblock\n")))),Object(c.b)("h2",{id:"themes-design"},"Themes design"),Object(c.b)("p",null,"While themes share the exact same lifecycle methods with plugins, their implementations can look very different from those of plugins based on themes' designed objectives."),Object(c.b)("p",null,"Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. So a typical theme implementation would look like a ",Object(c.b)("inlineCode",{parentName:"p"},"src/index.js")," file that hooks it up to the lifecycle methods. Most likely they would not use ",Object(c.b)("inlineCode",{parentName:"p"},"loadContent"),", which plugins would use. And it is typically accompanied by a ",Object(c.b)("inlineCode",{parentName:"p"},"src/theme")," directory full of components."),Object(c.b)("p",null,"To summarize:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Themes share the same lifecycle methods with Plugins"),Object(c.b)("li",{parentName:"ul"},"Themes are run after all existing Plugins"),Object(c.b)("li",{parentName:"ul"},"Themes exist to add component aliases by extending the webpack config")),Object(c.b)("h2",{id:"writing-customized-docusaurus-themes"},"Writing customized Docusaurus themes"),Object(c.b)("p",null,"A Docusaurus theme normally includes an ",Object(c.b)("inlineCode",{parentName:"p"},"index.js")," file where you hook up to the lifecycle methods, alongside with a ",Object(c.b)("inlineCode",{parentName:"p"},"theme/")," directory of components. A typical Docusaurus ",Object(c.b)("inlineCode",{parentName:"p"},"theme")," folder looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"{5-7}","{5-7}":!0}),"website\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.js\n    \u2514\u2500\u2500 theme\n        \u251c\u2500\u2500 MyThemeComponent\n        \u2514\u2500\u2500 AnotherThemeComponent.js\n")),Object(c.b)("p",null,"There are two lifecycle methods that are essential to theme implementation:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/lifecycle-apis#getthemepath"}),Object(c.b)("inlineCode",{parentName:"a"},"getThemePath()"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/lifecycle-apis#getclientmodules"}),Object(c.b)("inlineCode",{parentName:"a"},"getClientModules()")))),Object(c.b)("p",null,"These lifecycle method are not essential but recommended:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/lifecycle-apis#validatethemeconfigthemeconfigvalidate"}),Object(c.b)("inlineCode",{parentName:"a"},"validateThemeConfig({themeConfig,validate})"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.1.0/lifecycle-apis#validateoptionsoptionsvalidate"}),Object(c.b)("inlineCode",{parentName:"a"},"validateOptions({options,validate})")))))}m.isMDXComponent=!0},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,d=b["".concat(s,".").concat(p)]||b[p]||m[p]||c;return a?o.a.createElement(d,i(i({ref:t},l),{},{components:a})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,s=new Array(c);s[0]=p;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},300:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},302:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},303:function(e,t,a){"use strict";var n=a(0),o=a(302);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,t,a){"use strict";var n=a(0),o=a.n(n),c=a(303),s=a(300),i=a(49),r=a.n(i),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,b=e.values,m=e.groupId,p=Object(c.a)(),d=p.tabGroupChoices,h=p.setTabGroupChoices,j=Object(n.useState)(i),O=j[0],g=j[1],v=Object(n.useState)(!1),f=v[0],y=v[1];if(null!=m){var N=d[m];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&g(N)}var w=function(e){g(e),null!=m&&h(m,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},z=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",z)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",r.a.tabItem,{"tabs__item--active":O===t}),style:f?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return w(t)},onClick:function(){w(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},305:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);