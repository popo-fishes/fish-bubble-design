import{I as t}from"./chunks/index.150N6eiL.js";import{c as l,t as h}from"./chunks/index.Vn4aF7lt.js";import{c as p,I as s,m as a,U as i,o as k}from"./chunks/framework.AAizdM9x.js";const e=i(`<h1 id="icon-图标" tabindex="-1">Icon 图标🎉🎉🎉 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标:tada::tada::tada:&quot;">​</a></h1><p>语义化的矢量图形。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # NPM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @fish-bubble/icons</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @fish-bubble/icons</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @fish-bubble/icons</span></span></code></pre></div><h2 id="图标列表" tabindex="-1">图标列表 <a class="header-anchor" href="#图标列表" aria-label="Permalink to &quot;图标列表&quot;">​</a></h2><p>双击图标即可选中</p>`,6),F=i(`<h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>你可以设置<code>color</code>和<code>size</code>控制icon</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script setup lang=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Close</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CloseIcon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@fish-bubble/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @fish-bubble/icons自带的图标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CloseIcon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size=&quot;20px&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color=&quot;red&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class=&quot;custom-class&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/template&gt;</span></span></code></pre></div><h2 id="设置属性" tabindex="-1">设置属性 <a class="header-anchor" href="#设置属性" aria-label="Permalink to &quot;设置属性&quot;">​</a></h2><p>你可以设置<code>color</code>和<code>size</code>控制icon; 注意：size为number时不需要接上px</p>`,5),r=i(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script setup lang=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Close</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CloseIcon,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Thumb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@fish-bubble/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @fish-bubble/icons自带的图标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CloseIcon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size=&quot;20px&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color=&quot;red&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class=&quot;custom-class&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Thumb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color=&quot;#000&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  size=&quot;20px&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style=&quot;margin-left: 8px;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/template&gt;</span></span></code></pre></div><h2 id="使用-iconfont-cn" tabindex="-1">使用 iconfont.cn <a class="header-anchor" href="#使用-iconfont-cn" aria-label="Permalink to &quot;使用 iconfont.cn&quot;">​</a></h2><p>对于使用<code> iconfont.cn</code> 的用户，通过设置 <code>createFromIconfont</code> 方法参数对象中的 <code>scriptUrl</code>字段， 即可轻松地使用已有项目中的图标</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script setup lang=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createFromIconfont</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@fish-bubble/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IconFont</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createFromIconfont</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    scriptUrl:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;//at.alicdn.com/t/c/font_4341410_dda0iswbxhsbicccccc.js&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   /**</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用createFromIconfont时:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SVG图标自带颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ：某些SVG图标可能已经自带颜色这会导致您在CSS中设置的样式无效</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IconFont</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type=&quot;ccc-fangda&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size=&quot;22px&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color=&quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/template&gt;</span></span></code></pre></div><h2 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h2><p>利用 <code>Icon</code> 组件封装一个可复用的自定义图标。可以通过插槽传入一个 svg 组件来渲染最终的图标，以满足特定的需</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script setup lang=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Icon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@fish-bubble/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size为number时不需要接上px</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Icon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :size=&quot;22&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color=&quot;red&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> width=&quot;1em&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=&quot;1em&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fill=&quot;currentColor&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> viewBox=&quot;0 0 1024 1024&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">path</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/Icon&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/template&gt;</span></span></code></pre></div>`,7),u=JSON.parse('{"title":"Icon","description":"","frontmatter":{"title":"Icon","lang":"cn-ZH"},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}'),o={name:"components/icon.md"},B=Object.assign(o,{setup(d){return(c,g)=>{const n=t;return k(),p("div",null,[e,s(n),F,s(a(l),{size:"20px",color:"red"}),s(a(h),{size:20,color:"#000",style:{"margin-left":"8px"}}),r])}}});export{u as __pageData,B as default};
