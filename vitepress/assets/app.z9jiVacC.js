import{j as o,aR as p,aS as u,aT as l,aU as c,aV as f,aW as d,aX as m,aY as h,aZ as A,a_ as g,X as v,d as P,u as C,l as R,z as w,a$ as y,b0 as _,b1 as b,aC as E}from"./chunks/framework.TOizDqvi.js";import{R as T}from"./chunks/theme.pfgK7zZ7.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),D=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=C();return R(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),_(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function S(){const e=L(),a=j();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function j(){return h(D)}function L(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
