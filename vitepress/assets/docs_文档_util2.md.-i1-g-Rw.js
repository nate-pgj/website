import{_ as n,c as a,o as s,V as e}from"./chunks/framework.meLkqabe.js";const f=JSON.parse('{"title":"util2","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文档/util2.md","filePath":"docs/文档/util2.md","lastUpdated":1705911118000}'),p={name:"docs/文档/util2.md"},t=e(`<h1 id="util2" tabindex="-1">util2 <a class="header-anchor" href="#util2" aria-label="Permalink to &quot;util2&quot;">​</a></h1><h2 id="_1-防抖" tabindex="-1">1.防抖 <a class="header-anchor" href="#_1-防抖" aria-label="Permalink to &quot;1.防抖&quot;">​</a></h2><h4 id="防抖的基本思想是-一定时间内-如果事件持续触发-那么只执行最后一次-忽略中间多次。常用于输入搜索、窗口调整大小等情况" tabindex="-1">防抖的基本思想是：一定时间内，如果事件持续触发，那么只执行最后一次，忽略中间多次。常用于输入搜索、窗口调整大小等情况 <a class="header-anchor" href="#防抖的基本思想是-一定时间内-如果事件持续触发-那么只执行最后一次-忽略中间多次。常用于输入搜索、窗口调整大小等情况" aria-label="Permalink to &quot;防抖的基本思想是：一定时间内，如果事件持续触发，那么只执行最后一次，忽略中间多次。常用于输入搜索、窗口调整大小等情况&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function debounce(func, wait) {  </span></span>
<span class="line"><span>  let timeout;  </span></span>
<span class="line"><span>  return function() {  </span></span>
<span class="line"><span>    const context = this;  </span></span>
<span class="line"><span>    const args = arguments;  </span></span>
<span class="line"><span>    clearTimeout(timeout);  </span></span>
<span class="line"><span>    timeout = setTimeout(function() {  </span></span>
<span class="line"><span>      func.apply(context, args);  </span></span>
<span class="line"><span>    }, wait);  </span></span>
<span class="line"><span>  };  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const myEfficientFn = debounce(function() {  </span></span>
<span class="line"><span>  // 你的高开销代码  </span></span>
<span class="line"><span>}, 250);</span></span></code></pre></div><h2 id="_2-节流" tabindex="-1">2.节流 <a class="header-anchor" href="#_2-节流" aria-label="Permalink to &quot;2.节流&quot;">​</a></h2><h4 id="节流的基本思想是-一定时间内-只执行一次事件-忽略中间多次。常用于滚动加载、页面缩放、连续触发事件等情况。" tabindex="-1">节流的基本思想是：一定时间内，只执行一次事件，忽略中间多次。常用于滚动加载、页面缩放、连续触发事件等情况。 <a class="header-anchor" href="#节流的基本思想是-一定时间内-只执行一次事件-忽略中间多次。常用于滚动加载、页面缩放、连续触发事件等情况。" aria-label="Permalink to &quot;节流的基本思想是：一定时间内，只执行一次事件，忽略中间多次。常用于滚动加载、页面缩放、连续触发事件等情况。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function throttle(func, limit) {  </span></span>
<span class="line"><span>  let inThrottle;  </span></span>
<span class="line"><span>  return function() {  </span></span>
<span class="line"><span>    const context = this;  </span></span>
<span class="line"><span>    const args = arguments;  </span></span>
<span class="line"><span>    if (!inThrottle) {  </span></span>
<span class="line"><span>      func.apply(context, args);  </span></span>
<span class="line"><span>      inThrottle = true;  </span></span>
<span class="line"><span>      setTimeout(() =&gt; inThrottle = false, limit);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  };  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const myEfficientFn = throttle(function() {  </span></span>
<span class="line"><span>  // 你的高开销代码  </span></span>
<span class="line"><span>}, 250);</span></span></code></pre></div>`,7),l=[t];function i(c,o,r,u,h,d){return s(),a("div",null,l)}const m=n(p,[["render",i]]);export{f as __pageData,m as default};
