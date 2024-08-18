import{_ as s,c as i,o as a,U as t}from"./chunks/framework.AAizdM9x.js";const g=JSON.parse('{"title":"暗黑模式","description":"","frontmatter":{"title":"暗黑模式"},"headers":[],"relativePath":"guide/dark.md","filePath":"guide/dark.md"}'),l={name:"guide/dark.md"},n=t(`<h2 id="暗黑模式" tabindex="-1">暗黑模式 <a class="header-anchor" href="#暗黑模式" aria-label="Permalink to &quot;暗黑模式&quot;">​</a></h2><p>暗黑模式是指把所有 <code>UI</code> 换成黑色或者深色的一个主题模式。</p><ol><li>暗黑模式下避免使用对比很强的色彩或内容，长时间使用会带来疲劳感</li><li>我们提取并整理了所有的设计变量，并通过 CSS Vars 技术实现动态更新主题。</li></ol><h3 id="如何开启" tabindex="-1">如何开启？ <a class="header-anchor" href="#如何开启" aria-label="Permalink to &quot;如何开启？&quot;">​</a></h3><p>首先你可以创建一个开关来控制 暗黑模式 的 class 类名。</p><blockquote><p>如果您只需要暗色模式，只需在 html 上添加一个名为 dark 的类 。</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;暗黑模式&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>只需要如下在项目入口文件修改一行代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果只想导入css变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fish-bubble-design/dist/dark-vars.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,9),e=[n];function h(p,k,d,r,E,o){return a(),i("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
