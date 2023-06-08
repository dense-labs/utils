import{_ as s,o as a,c as n,V as t}from"./chunks/framework.79c01284.js";const C=JSON.parse('{"title":"身份证相关函数","description":"","frontmatter":{},"headers":[],"relativePath":"utils/idcard/idcard.md","filePath":"utils/idcard/idcard.md","lastUpdated":1686203952000}'),o={name:"utils/idcard/idcard.md"},l=t(`<h1 id="身份证相关函数" tabindex="-1">身份证相关函数 <a class="header-anchor" href="#身份证相关函数" aria-label="Permalink to &quot;身份证相关函数&quot;">​</a></h1><h2 id="isvalididnumber" tabindex="-1">isValidIdNumber <a class="header-anchor" href="#isvalididnumber" aria-label="Permalink to &quot;isValidIdNumber&quot;">​</a></h2><p>判断给定的身份证号码是否合法</p><p>返回值 <code>(idCard: string): boolean</code></p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td><code>idCard</code></td><td>身份证号码</td><td><code>string</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isValidIdNumber</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isValidIdNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4300001291</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isValidIdNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">240398198307073144</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><h2 id="getbirthdate" tabindex="-1">getBirthDate <a class="header-anchor" href="#getbirthdate" aria-label="Permalink to &quot;getBirthDate&quot;">​</a></h2><p>根据身份证号获取出生日期</p><p>返回值 <code>(idCard: string): string</code></p><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td><code>idCard</code></td><td>身份证号码</td><td><code>string</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">getBirthDate</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getBirthDate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">240398198307073144</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 1983-07-07</span></span></code></pre></div><h2 id="getgender" tabindex="-1">getGender <a class="header-anchor" href="#getgender" aria-label="Permalink to &quot;getGender&quot;">​</a></h2><p>根据身份证号获取性别</p><p>返回值 <code>(idCard: string): string</code></p><h3 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td><code>idCard</code></td><td>身份证号码</td><td><code>string</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">getGender</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getGender</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">654840197808216447</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 女</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getGender</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">422553200104090554</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 男</span></span></code></pre></div><h2 id="getage" tabindex="-1">getAge <a class="header-anchor" href="#getage" aria-label="Permalink to &quot;getAge&quot;">​</a></h2><p>根据身份证号获取年龄</p><p>返回值 <code>(idCard: string): number</code></p><h3 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th><strong>参数属性</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td><code>idCard</code></td><td>身份证号码</td><td><code>string</code></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">getAge</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dense-labs/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getAge</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">800205200308218662</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 19</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getAge</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">766822194112202013</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 81</span></span></code></pre></div>`,25),e=[l];function p(r,c,d,i,y,D){return a(),n("div",null,e)}const F=s(o,[["render",p]]);export{C as __pageData,F as default};