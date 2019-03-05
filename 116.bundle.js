webpackJsonp([116],{375:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='<p>The following sections contain all you need to know about editing and formatting the content within this site. Make sure to do some research before starting your edits or additions. Sometimes the toughest part is finding where the content should live and determining whether or not it already exists.</p>\n<h2 id="process">Process<a href="#process" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ol>\n<li>Check related issue if an article links to one.</li>\n<li>Hit <code>edit</code> and expand on the structure.</li>\n<li>PR changes.</li>\n</ol>\n<h2 id="yaml-frontmatter">YAML Frontmatter<a href="#yaml-frontmatter" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Each article contains a small section at the top written in <a href="https://jekyllrb.com/docs/frontmatter/">YAML Frontmatter</a>:</p>\n<pre><code class="hljs language-yaml"><span class="token punctuation">---</span>\n<span class="token key atrule">title</span><span class="token punctuation">:</span> My Article\n<span class="token key atrule">group</span><span class="token punctuation">:</span> My Sub<span class="token punctuation">-</span>Section\n<span class="token key atrule">sort</span><span class="token punctuation">:</span> <span class="token number">3</span>\n<span class="token key atrule">contributors</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">[</span>github username<span class="token punctuation">]</span>\n<span class="token key atrule">related</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Title of Related Article\n    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>url of related article<span class="token punctuation">]</span>\n<span class="token punctuation">---</span></code></pre>\n<p>Let\'s break these down:</p>\n<ul>\n<li><code>title</code>: The name of the article.</li>\n<li><code>group</code>: The name of the sub-section</li>\n<li><code>sort</code>: The order of the article within its section (or) sub-section if it is present.</li>\n<li><code>contributors</code>: A list of GitHub usernames who have contributed to this article.</li>\n<li><code>related</code>: Any related reading or useful examples.</li>\n</ul>\n<p>Note that <code>related</code> will generate a <strong>Further Reading</strong> section at the bottom of the page and <code>contributors</code> will yield a <strong>Contributors</strong> section below it. If you edit an article and would like recognition, don\'t hesitate to add your GitHub username to the <code>contributors</code> list.</p>\n<h2 id="article-structure">Article Structure<a href="#article-structure" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ol>\n<li>Brief Introduction - a paragraph or two so you get the basic idea about the what and why.</li>\n<li>Outline Remaining Content – how the content will be presented.</li>\n<li>Main Content - tell what you promised to tell.</li>\n<li>Conclusion - tell what you told and recap the main points.</li>\n</ol>\n<h2 id="typesetting">Typesetting<a href="#typesetting" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>webpack should always be written in lower-case letters. Even at the beginning of a sentence. (<a href="https://github.com/webpack/media#name">source</a>)</li>\n<li>loaders are enclosed in backticks and <a href="https://en.wikipedia.org/w/index.php?title=Kebab_case">kebab-cased</a>: <code>css-loader</code>, <code>ts-loader</code>, …</li>\n<li>plugins are enclosed in backticks and <a href="https://en.wikipedia.org/wiki/Camel_case">camel-cased</a>: <code>BannerPlugin</code>, <code>NpmInstallWebpackPlugin</code>, …</li>\n<li>Use "webpack 2" to refer to a specific webpack version (<del>"webpack v2"</del>)</li>\n<li>Use ES5; ES2015, ES2016, … to refer to the ECMAScript standards (<del>ES6</del>, <del>ES7</del>)</li>\n</ul>\n<h2 id="formatting">Formatting<a href="#formatting" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="code">Code<a href="#code" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>Syntax: ```javascript … ```</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'bar\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="lists">Lists<a href="#lists" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Boo</li>\n<li>Foo</li>\n<li>Zoo</li>\n</ul>\n<p>Lists should be ordered alphabetically.</p>\n<h3 id="tables">Tables<a href="#tables" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Explanation</th>\n<th>Input Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input Type</p><p>Default Value</p></div>\n<div class="content"><p>--debug<p class="description mobile">Switch loaders to debug mode</p></p></div></td>\n<td class="description desktop">Switch loaders to debug mode</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input Type</p><p>Default Value</p></div>\n<div class="content"><p>--devtool<p class="description mobile">Define source map type for the bundled resources</p></p></div></td>\n<td class="description desktop">Define source map type for the bundled resources</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input Type</p><p>Default Value</p></div>\n<div class="content"><p>--progress<p class="description mobile">Print compilation progress in percentage</p></p></div></td>\n<td class="description desktop">Print compilation progress in percentage</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<p>Tables should also be ordered alphabetically.</p>\n<h3 id="configuration-properties">Configuration Properties<a href="#configuration-properties" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The <a href="/configuration">configuration</a> properties should be ordered alphabetically as well:</p>\n<ul>\n<li><code>devServer.compress</code></li>\n<li><code>devServer.contentBase</code></li>\n<li><code>devServer.hot</code></li>\n</ul>\n<h3 id="quotes">Quotes<a href="#quotes" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="blockquote">Blockquote<a href="#blockquote" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>Syntax: ></strong></p>\n<blockquote>\n<p>This is a blockquote.</p>\n</blockquote>\n<h4 id="tip">Tip<a href="#tip" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>Syntax: T></strong></p>\n<blockquote class="tip">\n<p>This is a tip.</p>\n</blockquote>\n<p><strong>Syntax: W></strong></p>\n<blockquote class="warning">\n<p>This is a warning.</p>\n</blockquote>\n<p><strong>Syntax: ?></strong></p>\n<blockquote class="todo">\n<p>This is a todo.</p>\n</blockquote>\n<h3 id="assumptions-and-simplicity">Assumptions and simplicity<a href="#assumptions-and-simplicity" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Do not make assumptions when writing the documentation.</p>\n<pre><code class="hljs language-diff"><span class="token deleted">- You might already know how to optimize bundle for production...</span>\n<span class="token inserted">+ As we\'ve learned in [production guide](/guides/production/)...</span></code></pre>\n<p>Please do not assume things are simple. Avoid words like \'just\', \'simply\'.</p>\n<pre><code class="hljs language-diff"><span class="token deleted">- Simply run command...</span>\n<span class="token inserted">+ Run the `command-name` command...</span></code></pre>\n'}});