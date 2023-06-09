import{_ as s,o as a,c as n,V as o}from"./chunks/framework.79c01284.js";const F=JSON.parse('{"title":"其他相关函数","description":"","frontmatter":{},"headers":[],"relativePath":"utils/object/object.md","filePath":"utils/object/object.md","lastUpdated":1686280996000}'),l={name:"utils/object/object.md"},t=o(`<h1 id="其他相关函数" tabindex="-1">其他相关函数 <a class="header-anchor" href="#其他相关函数" aria-label="Permalink to &quot;其他相关函数&quot;">​</a></h1><h2 id="maskstring" tabindex="-1">maskString <a class="header-anchor" href="#maskstring" aria-label="Permalink to &quot;maskString&quot;">​</a></h2><p>将字符串脱敏处理</p><p>返回值 <code>(str: string, start = 0, end: number = str.length, mask = &#39;*&#39;): string</code></p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td><code>str</code></td><td>要脱敏的字符串</td><td><code>string</code></td><td><code>*</code></td></tr><tr><td><code>start</code></td><td>脱敏开始的位置，默认为 0</td><td><code>string</code></td><td><code>0</code></td></tr><tr><td><code>end</code></td><td>脱敏结束的位置，默认为字符串的末尾</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>mask</code></td><td>脱敏使用的掩码字符，默认为*</td><td><code>string</code></td><td><code>*</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">maskString</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maskString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1234567890</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result) </span><span style="color:#676E95;font-style:italic;">// &#39;12****7890&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maskString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1234567890</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result) </span><span style="color:#676E95;font-style:italic;">// **********</span></span></code></pre></div><h2 id="shufflearray" tabindex="-1">shuffleArray <a class="header-anchor" href="#shufflearray" aria-label="Permalink to &quot;shuffleArray&quot;">​</a></h2><p>打乱数组</p><p>返回值 <code>(arr: any[], allowSame = false): any[]</code></p><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td><code>arr</code></td><td>要打乱的数组</td><td><code>any[]</code></td><td><code>*</code></td></tr><tr><td><code>allowSame</code></td><td>打乱后的书数组是否能和原数组一致</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">shuffleArray</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> shuffled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shuffleArray</span><span style="color:#A6ACCD;">(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(shuffled) </span><span style="color:#676E95;font-style:italic;">// [3, 2, 1, 5, 4]</span></span></code></pre></div><h2 id="shuffleobject" tabindex="-1">shuffleObject <a class="header-anchor" href="#shuffleobject" aria-label="Permalink to &quot;shuffleObject&quot;">​</a></h2><p>打乱一个对象</p><p>返回值 <code>&lt;T extends Record&lt;string, any&gt;&gt;(obj: T, allowSame = true): T</code></p><h3 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td><code>arr</code></td><td>需要打乱的对象</td><td><code>Record&lt;string, any&gt;</code></td></tr><tr><td><code>allowSame</code></td><td>是否允许与原对象相同</td><td><code>boolean</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">shuffleObject</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">email</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alice@example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> shuffledObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shuffleObject</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 不能和原来的对象一致</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(shuffledObj) </span><span style="color:#676E95;font-style:italic;">// {age: 30, name: &#39;Alice&#39;, email: &#39;alice@example.com&#39;}</span></span></code></pre></div><h2 id="formatcurrency" tabindex="-1">formatCurrency <a class="header-anchor" href="#formatcurrency" aria-label="Permalink to &quot;formatCurrency&quot;">​</a></h2><p>将数字转换成千位分隔符格式的字符串</p><p>返回值 <code>(num: number, symbol = &#39;,&#39;): string</code></p><h3 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th><th><strong>默认值</strong></th></tr></thead><tbody><tr><td><code>num</code></td><td>需要格式化的数字</td><td><code>number</code></td><td><code>-</code></td></tr><tr><td><code>symbol</code></td><td>分隔符，默认使用逗号</td><td><code>string</code></td><td><code>,</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">formatCurrency</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formatted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatCurrency</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234567.89</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formatted) </span><span style="color:#676E95;font-style:italic;">// 1,234,567.89</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formatted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatCurrency</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1234567.89</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formatted) </span><span style="color:#676E95;font-style:italic;">// -1,234,567.89</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formatted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatCurrency</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234567.891</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formatted) </span><span style="color:#676E95;font-style:italic;">// 1,234,567.891</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formatted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatCurrency</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234567</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formatted) </span><span style="color:#676E95;font-style:italic;">// 1,234,567</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formatted </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatCurrency</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formatted) </span><span style="color:#676E95;font-style:italic;">// 0</span></span></code></pre></div>`,25),e=[t];function p(r,c,y,D,C,d){return a(),n("div",null,e)}const i=s(l,[["render",p]]);export{F as __pageData,i as default};