import{_ as s,c as a,o as n,U as e}from"./chunks/framework.TOizDqvi.js";const b=JSON.parse('{"title":"数组默认函数","description":"","frontmatter":{},"headers":[],"relativePath":"docs/文档/array_defaultFun.md","filePath":"docs/文档/array_defaultFun.md","lastUpdated":1705032948000}'),p={name:"docs/文档/array_defaultFun.md"},t=e(`<h1 id="数组默认函数" tabindex="-1">数组默认函数 <a class="header-anchor" href="#数组默认函数" aria-label="Permalink to &quot;数组默认函数&quot;">​</a></h1><h2 id="_1-at" tabindex="-1">1.at <a class="header-anchor" href="#_1-at" aria-label="Permalink to &quot;1.at&quot;">​</a></h2><p>获取特定索引处的元素。</p><p>负索引表示从末尾开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>const names = [&quot;Jhon&quot;, &quot;Bob&quot;, &quot;Alice&quot;, &quot;Joe&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const nameAtIndex1 = names.at(1);</span></span>
<span class="line"><span>const nameAtLastIndex = names.at(-1);</span></span>
<span class="line"><span>const nameAtBeforeLastIndex = names.at(-2);</span></span>
<span class="line"><span>const nameAtNonExistingIndex = names.at(10);</span></span>
<span class="line"><span>console.log(nameAtIndex1); // Output : Bob</span></span>
<span class="line"><span>console.log(nameAtLastIndex); // Output : Joe</span></span>
<span class="line"><span>console.log(nameAtBeforeLastIndex); // Output : Alice</span></span>
<span class="line"><span>console.log(nameAtNonExistingIndex); // Output : undefined</span></span></code></pre></div><h2 id="_2-concat" tabindex="-1">2.concat <a class="header-anchor" href="#_2-concat" aria-label="Permalink to &quot;2.concat&quot;">​</a></h2><p>将给定的数组元素添加到调用者数组的末尾。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const manNames = [&quot;Jhon&quot;, &quot;Bob&quot;];</span></span>
<span class="line"><span>const womanNames = [&quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const nameConcatenation = manNames.concat(womanNames);</span></span>
<span class="line"><span>console.log(nameConcatenation); // Output : [&quot;Jhon&quot;, &quot;Bob&quot;, &quot;Alice&quot;]</span></span></code></pre></div><h2 id="_3-copywithin" tabindex="-1">3.copyWithin <a class="header-anchor" href="#_3-copywithin" aria-label="Permalink to &quot;3.copyWithin&quot;">​</a></h2><p>将给定开始索引和结束索引之间的元素复制到目标索引。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   let letters = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // Copy to index 1, all elements form the index 3 to index 5 not included (&quot;d&quot; and &quot;e&quot;)</span></span>
<span class="line"><span>   letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;];</span></span>
<span class="line"><span>   letters.copyWithin(1, 3, 5);</span></span>
<span class="line"><span>   console.log(letters);</span></span>
<span class="line"><span>   // Output : [&quot;a&quot;, &quot;d&quot;, &quot;e&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // Copy to index 1, all elements form the index 3 to end (&quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot; and &quot;h&quot;)</span></span>
<span class="line"><span>   letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;];</span></span>
<span class="line"><span>   letters.copyWithin(1, 3);</span></span>
<span class="line"><span>   console.log(letters);</span></span>
<span class="line"><span>   // Output : [&quot;a&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;, &quot;g&quot;, &quot;h&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // Copy to index -7 (equivalent to 2), all elements from the index -6 (equivalent to 3) to index 5 not included (&quot;d&quot; and &quot;e&quot;)</span></span>
<span class="line"><span>   letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;];</span></span>
<span class="line"><span>   letters.copyWithin(-7, -6, 5);</span></span>
<span class="line"><span>   console.log(letters);</span></span>
<span class="line"><span>   // Output : [&quot;a&quot;, &quot;d&quot;, &quot;e&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;, &quot;g&quot;, &quot;h&quot;]</span></span></code></pre></div><h2 id="_4-entries" tabindex="-1">4.entries <a class="header-anchor" href="#_4-entries" aria-label="Permalink to &quot;4.entries&quot;">​</a></h2><p>返回一个迭代器，其中，包含每个数组元素的索引/值对的数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const iterator1 = letters.entries();</span></span>
<span class="line"><span>   console.log(iterator1.next().value); // Output [0, &#39;a&#39;]</span></span>
<span class="line"><span>   console.log(iterator1.next().value); // Output : [0, &#39;b&#39;]</span></span>
<span class="line"><span>   console.log(iterator1.next().value); // Output : undefined</span></span></code></pre></div><h2 id="_5-every" tabindex="-1">5.every <a class="header-anchor" href="#_5-every" aria-label="Permalink to &quot;5.every&quot;">​</a></h2><p>检查所有数组元素是否验证给定条件并返回 true。否则，返回 false。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [10, 15, 20, 25, 30];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const isAllNumbersBelow40 = numbers.every((number) =&gt; number &lt; 40);</span></span>
<span class="line"><span>   console.log(isAllNumbersBelow40); // Output : true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const isAllNumbersBelow20 = numbers.every((number) =&gt; number &lt; 20);</span></span>
<span class="line"><span>   console.log(isAllNumbersBelow20); // Output : false</span></span></code></pre></div><h2 id="_6-fill" tabindex="-1">6.fill <a class="header-anchor" href="#_6-fill" aria-label="Permalink to &quot;6.fill&quot;">​</a></h2><p>按给定值从开始索引到结束索引填充数组。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   let numbers = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Fill 0 on numbers start at index 1 to index 4 not included (3 elements) */</span></span>
<span class="line"><span>   numbers = [1, 1, 1, 1, 1];</span></span>
<span class="line"><span>   numbers.fill(0, 1, 4);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 0, 0, 0, ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Fill 0 on numbers start at index 1 to the end (4 elements) */</span></span>
<span class="line"><span>   numbers = [1, 1, 1, 1, 1];</span></span>
<span class="line"><span>   numbers.fill(0, 1);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 0, 0, 0, 0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Fill 0 on all numbers */</span></span>
<span class="line"><span>   numbers = [1, 1, 1, 1, 1];</span></span>
<span class="line"><span>   numbers.fill(0);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [0, 0, 0, 0, 0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Fill 0 on numbers start at index -4 (equivalent to 2) to index -1 (equivalent to 4) not included (3 elements) */</span></span>
<span class="line"><span>   numbers = [1, 1, 1, 1, 1];</span></span>
<span class="line"><span>   numbers.fill(0, -4, -1);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 0, 0, 0, 1]</span></span></code></pre></div><h2 id="_7-filter" tabindex="-1">7.filter <a class="header-anchor" href="#_7-filter" aria-label="Permalink to &quot;7.filter&quot;">​</a></h2><p>返回仅包含验证条件的元素的新数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const namesWith4LettersOrLess = names.filter((name) =&gt; name.length &lt;= 4);</span></span>
<span class="line"><span>   console.log(namesWith4LettersOrLess); // Output : [&quot;Joe&quot;, &quot;Jhon&quot;]</span></span></code></pre></div><h2 id="_8-find" tabindex="-1">8.find <a class="header-anchor" href="#_8-find" aria-label="Permalink to &quot;8.find&quot;">​</a></h2><p>找到第一个验证条件的元素并返回它。否则，返回未定义。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const firstNameMatchStartWithJ = names.find((name) =&gt; name.startsWith(&quot;J&quot;));</span></span>
<span class="line"><span>   console.log(firstNameMatchStartWithJ); // Output : Joe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const firstNameMatchStartWithK = names.find((name) =&gt; name.startsWith(&quot;K&quot;));</span></span>
<span class="line"><span>   console.log(firstNameMatchStartWithK); // Output : undefined</span></span></code></pre></div><h2 id="_9-findindex" tabindex="-1">9.findIndex <a class="header-anchor" href="#_9-findindex" aria-label="Permalink to &quot;9.findIndex&quot;">​</a></h2><p>找到第一个验证条件的元素并返回其索引。否则，返回-1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const firstNameMatchStartWithJ = names.findIndex((name) =&gt; name.startsWith(&quot;J&quot;));</span></span>
<span class="line"><span>   console.log(firstNameMatchStartWithJ); // Output : 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const firstNameMatchStartWithK = names.findIndex((name) =&gt; name.startsWith(&quot;K&quot;));</span></span>
<span class="line"><span>   console.log(firstNameMatchStartWithK); // Output : -1</span></span></code></pre></div><h2 id="_10-findlast" tabindex="-1">10.findLast <a class="header-anchor" href="#_10-findlast" aria-label="Permalink to &quot;10.findLast&quot;">​</a></h2><p>找到验证条件的最后一个元素并将其返回。否则，返回未定义。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const lastNameMatchStartWithJ = names.findLast((name) =&gt; name.startsWith(&quot;J&quot;));</span></span>
<span class="line"><span>   console.log(lastNameMatchStartWithJ); // Output : Jhon</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const lastNameMatchStartWithK = names.findLast((name) =&gt; name.startsWith(&quot;K&quot;));</span></span>
<span class="line"><span>   console.log(lastNameMatchStartWithK); // Output : undefined</span></span></code></pre></div><h2 id="_11-findlastindex" tabindex="-1">11.findLastIndex <a class="header-anchor" href="#_11-findlastindex" aria-label="Permalink to &quot;11.findLastIndex&quot;">​</a></h2><p>找到最后一个验证条件的元素并返回其索引。否则，返回-1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const lastNameMatchStartWithJ = names.findLastIndex((name) =&gt; name.startsWith(&quot;J&quot;));</span></span>
<span class="line"><span>   console.log(lastNameMatchStartWithJ); // Output : 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const lastNameMatchStartWithK = names.findLastIndex((name) =&gt; name.startsWith(&quot;K&quot;));</span></span>
<span class="line"><span>   console.log(lastNameMatchStartWithK); // Output : -1</span></span></code></pre></div><h2 id="_12-flat" tabindex="-1">12.flat <a class="header-anchor" href="#_12-flat" aria-label="Permalink to &quot;12.flat&quot;">​</a></h2><p>在每个元素中展开任何已建立的数组，并根据给定的深度级别继续展开嵌套的数组。返回新的平面数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [1, 2, [3, [4, [5, 6]]]];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const flatNumbersLevel1 = numbers.flat();</span></span>
<span class="line"><span>   console.log(flatNumbersLevel1); // Output : [1, 2, 3, [4, [5, 6]]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const flatNumbersLevel2 = numbers.flat(2);</span></span>
<span class="line"><span>   console.log(flatNumbersLevel2); // Output : [1, 2, 3, 4, [5, 6]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const flatNumbers = numbers.flat(Infinity);</span></span>
<span class="line"><span>   console.log(flatNumbers); // Output : [1, 2, 3, 4, 5, 6]</span></span></code></pre></div><h2 id="_13-flatmap" tabindex="-1">13.flatMap <a class="header-anchor" href="#_13-flatmap" aria-label="Permalink to &quot;13.flatMap&quot;">​</a></h2><p>返回一个新数组，其中所有元素均由给定回调修改，并按 1 深度级别展平。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const users = [</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      name: &quot;Jhon&quot;,</span></span>
<span class="line"><span>      votes: [3, 4]</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      name: &quot;Joe&quot;,</span></span>
<span class="line"><span>      votes: [4, 5]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const allVotes = users.flatMap((user) =&gt; user.votes);</span></span>
<span class="line"><span>   console.log(allVotes); // Output : [3, 4, 4, 5]</span></span></code></pre></div><h2 id="_14-foreach" tabindex="-1">14.forEach <a class="header-anchor" href="#_14-foreach" aria-label="Permalink to &quot;14.forEach&quot;">​</a></h2><p>迭代数组并对每个元素应用给定的回调。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const names = [&quot;Joe&quot;, &quot;Jhon&quot;, &quot;Alice&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   names.forEach((name, index, array) =&gt;</span></span>
<span class="line"><span>   console.log(\`\${name} at index \${index} in the array [\${array.join(&quot;, &quot;)}]\`)</span></span>
<span class="line"><span>   );</span></span>
<span class="line"><span>   // Output : Joe at index 0 in the array [Joe, Jhon, Alice]</span></span>
<span class="line"><span>   // Output : Jhon at index 1 in the array [Joe, Jhon, Alice]</span></span>
<span class="line"><span>   // Output : Alice at index 2 in the array [Joe, Jhon, Alice]</span></span></code></pre></div><h2 id="_15-from" tabindex="-1">15.from <a class="header-anchor" href="#_15-from" aria-label="Permalink to &quot;15.from&quot;">​</a></h2><p>从可迭代或类似数组创建数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Create an array from string */</span></span>
<span class="line"><span>   console.log(Array.from(&quot;hello&quot;));</span></span>
<span class="line"><span>   // Output : [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Create an array from an other array and apply map method */</span></span>
<span class="line"><span>   console.log(Array.from([1, 2, 3], (x) =&gt; x * 2));</span></span>
<span class="line"><span>   // Output : [2, 4, 6]</span></span></code></pre></div><h2 id="_16-fromasync" tabindex="-1">16.fromAsync <a class="header-anchor" href="#_16-fromasync" aria-label="Permalink to &quot;16.fromAsync&quot;">​</a></h2><p>从异步可迭代、可迭代或类数组创建数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Create an array from an array of async elements */</span></span>
<span class="line"><span>   const asyncArray = [</span></span>
<span class="line"><span>   new Promise((resolve) =&gt; resolve(0)),</span></span>
<span class="line"><span>   new Promise((resolve) =&gt; resolve(1))</span></span>
<span class="line"><span>   ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   (async () =&gt; {</span></span>
<span class="line"><span>   const array = await Array.fromAsync(asyncArray);</span></span>
<span class="line"><span>   console.log(array); // Output : [0, 1]</span></span>
<span class="line"><span>   })();</span></span></code></pre></div><h2 id="_17-includes" tabindex="-1">17.includes <a class="header-anchor" href="#_17-includes" aria-label="Permalink to &quot;17.includes&quot;">​</a></h2><p>检查数组是否包含给定元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(letters.includes(&quot;b&quot;)); // Output: true</span></span>
<span class="line"><span>   console.log(letters.includes(&quot;e&quot;)); // Output: false</span></span></code></pre></div><h2 id="_18-indexof" tabindex="-1">18.indexOf <a class="header-anchor" href="#_18-indexof" aria-label="Permalink to &quot;18.indexOf&quot;">​</a></h2><p>返回给定元素的第一个匹配项的索引。如果找到任何匹配项，则返回 -1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get index of existing letter &#39;b&#39; */</span></span>
<span class="line"><span>   console.log(letters.indexOf(&quot;b&quot;)); // Output: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get index of existing letter &#39;b&#39; but start searching from index 2 */</span></span>
<span class="line"><span>   console.log(letters.indexOf(&quot;b&quot;, 2)); // Output: -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get index of existing letter &#39;b&#39; but start searching from index -4 (equivalent to 0) */</span></span>
<span class="line"><span>   console.log(letters.indexOf(&quot;b&quot;, -4)); // Output: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get index of non existing letter &#39;e&#39; */</span></span>
<span class="line"><span>   console.log(letters.indexOf(&quot;e&quot;)); // Output: -1</span></span></code></pre></div><h2 id="_19-isarray" tabindex="-1">19.isArray <a class="header-anchor" href="#_19-isarray" aria-label="Permalink to &quot;19.isArray&quot;">​</a></h2><p>检查变量是否是数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const array = [];</span></span>
<span class="line"><span>   console.log(Array.isArray(array)); // Output : true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const object = {};</span></span>
<span class="line"><span>   console.log(Array.isArray(object)); // Output : false</span></span></code></pre></div><h2 id="_20-join" tabindex="-1">20.join <a class="header-anchor" href="#_20-join" aria-label="Permalink to &quot;20.join&quot;">​</a></h2><p>将所有数组元素连接到一个字符串，并用给定的分隔符将它们分开。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Join all letters together with default separator comma */</span></span>
<span class="line"><span>   console.log(letters.join());</span></span>
<span class="line"><span>   // Output : h,e,l,l,o</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Join all letters together with no separator */</span></span>
<span class="line"><span>   console.log(letters.join(&quot;&quot;));</span></span>
<span class="line"><span>   // Output : hello</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Join all letters together with dash separator */</span></span>
<span class="line"><span>   console.log(letters.join(&quot;-&quot;));</span></span>
<span class="line"><span>   // Output : h-e-l-l-o</span></span></code></pre></div><h2 id="_21-keys" tabindex="-1">21.keys <a class="header-anchor" href="#_21-keys" aria-label="Permalink to &quot;21.keys&quot;">​</a></h2><p>返回包含索引的迭代器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const letters = [&quot;a&quot;, &quot;b&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const iterator1 = letters.keys();</span></span>
<span class="line"><span>console.log(iterator1.next().value); // Output 0</span></span>
<span class="line"><span>console.log(iterator1.next().value); // Output : 1</span></span>
<span class="line"><span>console.log(iterator1.next().value); // Output : undefined</span></span></code></pre></div><h2 id="_22-lastindexof" tabindex="-1">22.lastIndexOf <a class="header-anchor" href="#_22-lastindexof" aria-label="Permalink to &quot;22.lastIndexOf&quot;">​</a></h2><p>返回给定元素的最后一个匹配项的索引。如果找到任何匹配项，则返回 -1。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;, &quot;b&quot;, &quot;a&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get last index of existing letter &#39;b&#39; */</span></span>
<span class="line"><span>   console.log(letters.lastIndexOf(&quot;b&quot;)); // Output: 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get index of non existing letter &#39;e&#39; */</span></span>
<span class="line"><span>   console.log(letters.lastIndexOf(&quot;e&quot;)); // Output: -1</span></span></code></pre></div><h2 id="_23-map" tabindex="-1">23.map <a class="header-anchor" href="#_23-map" aria-label="Permalink to &quot;23.map&quot;">​</a></h2><p>返回一个新数组，其中所有元素均由给定回调修改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const numbers = [1, 2, 3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** Double all numbers */</span></span>
<span class="line"><span>const doubleNumebrs = numbers.map((number) =&gt; number * 2);</span></span>
<span class="line"><span>console.log(doubleNumebrs);</span></span>
<span class="line"><span>// Output : [2, 3, 6]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** Get number array info */</span></span>
<span class="line"><span>const numberArrayInfo = numbers.map(</span></span>
<span class="line"><span>  (element, index, array) =&gt;</span></span>
<span class="line"><span>    \`\${element} at index \${index} in the array [\${array.join(&quot;, &quot;)}]\`</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>console.log(numberArrayInfo);</span></span>
<span class="line"><span>// Output : [</span></span>
<span class="line"><span>// &quot;1 at index 0 in the array [1, 2, 3]&quot;, </span></span>
<span class="line"><span>// &quot;2 at index 1 in the array [1, 2, 3]&quot;, </span></span>
<span class="line"><span>// &quot;3 at index 2 in the array [1, 2, 3]&quot;</span></span>
<span class="line"><span>//  ]</span></span></code></pre></div><h2 id="_24-of" tabindex="-1">24. of <a class="header-anchor" href="#_24-of" aria-label="Permalink to &quot;24. of&quot;">​</a></h2><p>从给定的元素创建一个数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Create an array from values */</span></span>
<span class="line"><span>   const numbers = Array.of(1, 2, 3, 4);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output: [1, 2, 3, 4]</span></span></code></pre></div><h2 id="_25-pop" tabindex="-1">25.pop <a class="header-anchor" href="#_25-pop" aria-label="Permalink to &quot;25.pop&quot;">​</a></h2><p>删除数组的最后一个元素并返回它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Create an array from values */</span></span>
<span class="line"><span>   const numbers = [1, 2, 3, 4];</span></span>
<span class="line"><span>   console.log(numbers.pop()); // Output : 4</span></span>
<span class="line"><span>   console.log(numbers); // Output : [1, 2, 3]</span></span></code></pre></div><h2 id="_26-push" tabindex="-1">26.push <a class="header-anchor" href="#_26-push" aria-label="Permalink to &quot;26.push&quot;">​</a></h2><p>将新元素添加到数组中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** add value or values to the end of array */</span></span>
<span class="line"><span>   const numbers = [1, 2, 3, 4];</span></span>
<span class="line"><span>   numbers.push(5);</span></span>
<span class="line"><span>   numbers.push(6, 7);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 2, 3, 4, 5, 6, 7]/** Create an array from values */</span></span></code></pre></div><h2 id="_27-reduce" tabindex="-1">27. reduce <a class="header-anchor" href="#_27-reduce" aria-label="Permalink to &quot;27. reduce&quot;">​</a></h2><p>通过应用给定的回调将数组减少到一个值。给定的回调应在每次迭代中返回更新的值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Reduce hello array to hello string */</span></span>
<span class="line"><span>   const letters = [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;];</span></span>
<span class="line"><span>   const word = letters.reduce((accWord, letter) =&gt; \`\${accWord}\${letter}\`);</span></span>
<span class="line"><span>   console.log(word);</span></span>
<span class="line"><span>   // Output : hello</span></span></code></pre></div><h2 id="_28-reduceright" tabindex="-1">28.reduceRight <a class="header-anchor" href="#_28-reduceright" aria-label="Permalink to &quot;28.reduceRight&quot;">​</a></h2><p>它类似于reduce方法，但从数组的最后一个元素开始迭代。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Reduce hello array to olleh string */</span></span>
<span class="line"><span>   const letters = [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;];</span></span>
<span class="line"><span>   const word = letters.reduceRight((accWord, letter) =&gt; \`\${accWord}\${letter}\`);</span></span>
<span class="line"><span>   console.log(word);</span></span>
<span class="line"><span>   // Output : olleh</span></span></code></pre></div><h2 id="_29-reverse" tabindex="-1">29.reverse <a class="header-anchor" href="#_29-reverse" aria-label="Permalink to &quot;29.reverse&quot;">​</a></h2><p>反转数组元素的顺序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Reverse hello array to olleh array */</span></span>
<span class="line"><span>   const letters = [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;];</span></span>
<span class="line"><span>   letters.reverse();</span></span>
<span class="line"><span>   console.log(letters);</span></span>
<span class="line"><span>   // Output : [&quot;o&quot;, &quot;l&quot;, &quot;l&quot;, &quot;e&quot;, &quot;h&quot;]</span></span></code></pre></div><h2 id="_30-shift" tabindex="-1">30.shift <a class="header-anchor" href="#_30-shift" aria-label="Permalink to &quot;30.shift&quot;">​</a></h2><p>删除数组的第一个元素并返回它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Reverse number order of number array */</span></span>
<span class="line"><span>   const numbers = [1, 2, 3];</span></span>
<span class="line"><span>   numbers.reverse();</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [3, 2, 1];</span></span></code></pre></div><h2 id="_31-slice" tabindex="-1">31.slice <a class="header-anchor" href="#_31-slice" aria-label="Permalink to &quot;31.slice&quot;">​</a></h2><p>返回从给定开始到结束索引的子数组。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get numbers from index 1 to index 4 not included (&quot;b&quot;, &quot;c&quot; and &quot;d&quot;) */</span></span>
<span class="line"><span>   console.log(numbers.slice(1, 4));</span></span>
<span class="line"><span>   // Output : [&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get numbers from index 1 to the end (&quot;b&quot;, &quot;c&quot;, &quot;d&quot; and &quot;e&quot;) */</span></span>
<span class="line"><span>   console.log(numbers.slice(1));</span></span>
<span class="line"><span>   // Output : [&quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Get numbers from index -4 (equivalent to 1) to index -1 (equivalent to 4) not included (&quot;b&quot;, &quot;c&quot; and &quot;d&quot;) */</span></span>
<span class="line"><span>   console.log(numbers.slice(-4, -1));</span></span>
<span class="line"><span>   // Output : [&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</span></span></code></pre></div><h2 id="_32-some" tabindex="-1">32.some <a class="header-anchor" href="#_32-some" aria-label="Permalink to &quot;32.some&quot;">​</a></h2><p>检查是否至少有一个元素验证给定条件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [10, 15, 20, 25, 30];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const isAtLeastOneBelow20 = numbers.some((number) =&gt; number &lt; 20);</span></span>
<span class="line"><span>   console.log(isAtLeastOneBelow20); // Output : true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const isAtLeastOneBelow5 = numbers.some((number) =&gt; number &lt; 5);</span></span>
<span class="line"><span>   console.log(isAtLeastOneBelow5); // Output : false</span></span></code></pre></div><h2 id="_33-sort" tabindex="-1">33.sort <a class="header-anchor" href="#_33-sort" aria-label="Permalink to &quot;33.sort&quot;">​</a></h2><p>通过给定的回调返回排序的数组。</p><p>如果回调返回正数，则将 a 排序在 b 之后。否则，将 b 排序在 a 之后。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   let numbers = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Sort number in ascendent order. Sort a after b. */</span></span>
<span class="line"><span>   numbers = [10, 100, 20, 25, 30];</span></span>
<span class="line"><span>   numbers.sort((a, b) =&gt; a - b);</span></span>
<span class="line"><span>   console.log(numbers); // Output : [10, 20, 25, 30, 100]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Sort number in descendant order. Sort b after a */</span></span>
<span class="line"><span>   numbers = [10, 100, 20, 25, 30];</span></span>
<span class="line"><span>   numbers.sort((a, b) =&gt; b - a);</span></span>
<span class="line"><span>   console.log(numbers); // Output : [100, 30, 25, 20, 10]</span></span></code></pre></div><h2 id="_34-splice" tabindex="-1">34.splice <a class="header-anchor" href="#_34-splice" aria-label="Permalink to &quot;34.splice&quot;">​</a></h2><p>删除或替换从给定开始索引到给定结束索引的子数组。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   let numbers = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Remove elements from index 1 to 3 elements further ([0, 0, 0]) */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(1, 3);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Remove elements from index 1 to the end ([0, 0, 0, 1]) */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(1);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Remove elements from index -4 (equivalent to 1) to the end ([0, 0, 0, 1]) */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(-4);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Replace elements by 2, 2, 2 from index 1 to index 3 included ([0, 0, 0]) */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(1, 3, 2, 2, 2);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 2, 2, 2, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Replace elements by 2, 2, 2 from index -4 (equivalent to 1) to 3 elements further ([0, 0, 0]) */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(-4, 3, 2, 2, 2);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 2, 2, 2, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Add elements 2, 2, 2 at index 1 */</span></span>
<span class="line"><span>   numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span>   numbers.splice(1, 0, 2, 2, 2);</span></span>
<span class="line"><span>   console.log(numbers);</span></span>
<span class="line"><span>   // Output : [1, 2, 2, 2, 0, 0, 0, 1]</span></span></code></pre></div><h2 id="_35-tolocalestring" tabindex="-1">35.toLocaleString <a class="header-anchor" href="#_35-tolocalestring" aria-label="Permalink to &quot;35.toLocaleString&quot;">​</a></h2><p>将所有元素转换为语言环境字符串，将所有元素连接为字符串，同时用逗号分隔每个元素并返回字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const date = [10.4, new Date(&quot;31 Aug 2022 22:00:00 UTC&quot;)];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(date.toLocaleString());</span></span>
<span class="line"><span>   // Output : 10.4,9/1/2022, 12:00:00 AM</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(date.toLocaleString(&quot;en&quot;));</span></span>
<span class="line"><span>   // Output : 10.4,9/1/2022, 12:00:00 AM</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(date.toLocaleString(&quot;es&quot;));</span></span>
<span class="line"><span>   // Output : 10,4,1/9/2022, 0:00:00</span></span></code></pre></div><h2 id="_36-toreversed" tabindex="-1">36.toReversed <a class="header-anchor" href="#_36-toreversed" aria-label="Permalink to &quot;36.toReversed&quot;">​</a></h2><p>创建一个新数组，其中，按相反顺序包含调用方数组的元素。</p><p>它类似于“reverse”方法，但它返回一个新数组而不修改调用者数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [1, 2, 3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const reversedNumbers = numbers.toReversed();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(reversedNumbers); // Output : [3, 2, 1]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [1, 2, 3]</span></span></code></pre></div><h2 id="_37-tosorted" tabindex="-1">37.toSorted <a class="header-anchor" href="#_37-tosorted" aria-label="Permalink to &quot;37.toSorted&quot;">​</a></h2><p>创建一个新数组，其中包含按给定回调排序的调用者数组的元素。</p><p>它类似于“sort”方法，但它返回一个新数组而不修改调用者数组。</p><p>const numbers = [10, 100, 20, 25, 30];</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /** Sort number in ascendent order. Sort a after b. */</span></span>
<span class="line"><span>   const numbersInAscOrder = numbers.toSorted((a, b) =&gt; a - b);</span></span>
<span class="line"><span>   console.log(numbersInAscOrder); // Output : [10, 20, 25, 30, 100]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [10, 100, 20, 25, 30]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Sort number in descendant order. Sort b after a */</span></span>
<span class="line"><span>   const numbersInDescOrder = numbers.toSorted((a, b) =&gt; b - a);</span></span>
<span class="line"><span>   console.log(numbersInDescOrder); // Output : [100, 30, 25, 20, 10]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [10, 100, 20, 25, 30]</span></span></code></pre></div><h2 id="_38-tospliced" tabindex="-1">38.toSpliced <a class="header-anchor" href="#_38-tospliced" aria-label="Permalink to &quot;38.toSpliced&quot;">​</a></h2><p>创建一个新数组，其中包含调用方数组的元素以及已替换或删除的元素。</p><p>它类似于“splice”方法，但它返回一个新数组而不修改调用者数组。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   let numbers = [1, 0, 0, 0, 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Remove elements from index 1 to 3 elements further ([0, 0, 0]) */</span></span>
<span class="line"><span>   const splicedNumbers1 = numbers.toSpliced(1, 3);</span></span>
<span class="line"><span>   console.log(splicedNumbers1); // Output : [1, 1]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [1, 0, 0, 0, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Replace elements by 2, 2, 2 from index 1 to index 3 included ([0, 0, 0]) */</span></span>
<span class="line"><span>   const splicedNumbers2 = numbers.toSpliced(1, 3, 2, 2, 2);</span></span>
<span class="line"><span>   console.log(splicedNumbers2); // Output : [1, 2, 2, 2, 1]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [1, 0, 0, 0, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Add elements 2, 2, 2 at index 1 */</span></span>
<span class="line"><span>   const splicedNumbers3 = numbers.toSpliced(1, 0, 2, 2, 2);</span></span>
<span class="line"><span>   console.log(splicedNumbers3); // Output : [1, 2, 2, 2, 0, 0, 0, 1]</span></span>
<span class="line"><span>   console.log(numbers); // Output : [1, 0, 0, 0, 1]</span></span></code></pre></div><h2 id="_39-tostring" tabindex="-1">39.toString <a class="header-anchor" href="#_39-tostring" aria-label="Permalink to &quot;39.toString&quot;">​</a></h2><p>通过将所有元素连接到字符串，同时用逗号分隔每个元素并返回字符串，将所有元素转换为区域设置字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** Join all letters together with default separator comma */</span></span>
<span class="line"><span>   console.log(letters.toString());</span></span>
<span class="line"><span>   // Ouput : a,b,c,d</span></span></code></pre></div><h2 id="_40-unshift" tabindex="-1">40.unshift <a class="header-anchor" href="#_40-unshift" aria-label="Permalink to &quot;40.unshift&quot;">​</a></h2><p>将元素添加到数组中第一个元素之前。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const numbers = [3, 4];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   numbers.unshift(0, 1, 2);</span></span>
<span class="line"><span>   console.log(numbers); // Output : [0, 1, 2, 3, 4]</span></span></code></pre></div><h2 id="_41-values" tabindex="-1">41.values <a class="header-anchor" href="#_41-values" aria-label="Permalink to &quot;41.values&quot;">​</a></h2><p>返回一个迭代器，该迭代器迭代数组中每个项目的值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;b&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const letterIterator = letters.values();</span></span>
<span class="line"><span>   console.log(letterIterator.next().value); // Output : a</span></span>
<span class="line"><span>   console.log(letterIterator.next().value); // Output : b</span></span>
<span class="line"><span>   console.log(letterIterator.next().value); // Output : undefined</span></span></code></pre></div><h2 id="_42-with" tabindex="-1">42.with <a class="header-anchor" href="#_42-with" aria-label="Permalink to &quot;42.with&quot;">​</a></h2><p>创建一个新数组，其中包含调用方数组的元素以及给定索引处替换的给定值。</p><p>负索引表示从最后一个开始计数（例如：-1 是最后一个元素）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   const letters = [&quot;a&quot;, &quot;k&quot;, &quot;c&quot;, &quot;d&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** replace k at index 1 with b */</span></span>
<span class="line"><span>   console.log(letters.with(1, &quot;b&quot;));</span></span>
<span class="line"><span>   // Output : [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /** replace k at index -3 (equivalent to 1) with b */</span></span>
<span class="line"><span>   console.log(letters.with(-3, &quot;b&quot;));</span></span>
<span class="line"><span>   // Output : [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</span></span></code></pre></div>`,139),l=[t];function o(i,c,u,r,d,h){return n(),a("div",null,l)}const m=s(p,[["render",o]]);export{b as __pageData,m as default};
