"use strict";(self.webpackChunkawesome_idea=self.webpackChunkawesome_idea||[]).push([[4309],{1270:(e,a,n)=>{n.r(a),n.d(a,{data:()=>i});const i={key:"v-18f1252d",path:"/tips/efficient-use-guide.html",title:"IDEA 高效使用教程",lang:"zh-CN",frontmatter:{title:"IDEA 高效使用教程",category:["IDEA 指南"],tag:["IDEA","IDEA 教程","高效使用"],summary:"大家好，我是 Guide! 昨晚刷到一篇知乎 370 多点赞的 IDEA 高效使用教程，带着好奇心，点击去一看，好家伙，又是盗用别人原创为自己引流的恶心行为。 让我纳闷的是，这篇文章的内容质量非常差，而且内容已经过时了（原文是 2018 年写的），竟然还能获得 370 多点赞。我自己非常多文章别人盗发几百点赞，我自己发个位数的点赞，就很奇葩，说多了都是泪..",head:[["meta",{property:"og:url",content:"https://codingdocs.github.io/awesome-idea/tips/efficient-use-guide.html"}],["meta",{property:"og:site_name",content:"IDEA 高效使用指南"}],["meta",{property:"og:title",content:"IDEA 高效使用教程"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"IDEA"}],["meta",{property:"article:tag",content:"IDEA 教程"}],["meta",{property:"article:tag",content:"高效使用"}]]},excerpt:"",headers:[{level:2,title:"01 高效设置",slug:"_01-高效设置",children:[{level:3,title:"调整窗口字体显示大小",slug:"调整窗口字体显示大小",children:[]},{level:3,title:"字体设置",slug:"字体设置",children:[]},{level:3,title:"配置类注释模板",slug:"配置类注释模板",children:[]},{level:3,title:"优化 Live Templates",slug:"优化-live-templates",children:[]},{level:3,title:"全局设置 SDK",slug:"全局设置-sdk",children:[]},{level:3,title:"自动导包&删除无用包",slug:"自动导包-删除无用包",children:[]},{level:3,title:"显示方法分割线",slug:"显示方法分割线",children:[]},{level:3,title:"显示某个文件的提交记录",slug:"显示某个文件的提交记录",children:[]}]},{level:2,title:"02 必备插件",slug:"_02-必备插件",children:[{level:3,title:"jclasslib: 字节码查看神器",slug:"jclasslib-字节码查看神器",children:[]},{level:3,title:"Tabnine: 基于 AI 的代码提示",slug:"tabnine-基于-ai-的代码提示",children:[]},{level:3,title:"Key Promoter X:快捷键提示",slug:"key-promoter-x-快捷键提示",children:[]},{level:3,title:"Alibaba Java Code Guidelines: 阿里巴巴 Java 代码规范",slug:"alibaba-java-code-guidelines-阿里巴巴-java-代码规范",children:[]},{level:3,title:"SequenceDiagram: 一键生成时序图",slug:"sequencediagram-一键生成时序图",children:[]},{level:3,title:"Save Actions: 优化文件保存",slug:"save-actions-优化文件保存",children:[]},{level:3,title:"Rainbow Brackets: 彩虹括号",slug:"rainbow-brackets-彩虹括号",children:[]}]},{level:2,title:"03 主题优化",slug:"_03-主题优化",children:[]},{level:2,title:"04 IDEA 源码阅读技巧",slug:"_04-idea-源码阅读技巧",children:[]}],git:{createdTime:1648642351e3,updatedTime:1648642351e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:7.72,words:2315},filePathRelative:"tips/efficient-use-guide.md"}},7805:(e,a,n)=>{n.r(a),n.d(a,{default:()=>C});var i=n(6252);const t=(0,i.uE)('<p><img src="https://img-blog.csdnimg.cn/5a114e95857440b293ad7d297906a1e2.JPG" alt="2021/12/07 - Guide的书桌"></p><p>大家好，我是 Guide!</p><p>昨晚刷到一篇知乎 370 多点赞的 IDEA 高效使用教程，带着好奇心，点击去一看，好家伙，又是盗用别人原创为自己引流的恶心行为。</p><p>让我纳闷的是，这篇文章的内容质量非常差，而且内容已经过时了（原文是 2018 年写的），竟然还能获得 370 多点赞。我自己非常多文章别人盗发几百点赞，我自己发个位数的点赞，就很奇葩，说多了都是泪......</p><p>于是，我利用昨天晚上和早起的这会时间总结了这篇 <strong>IDEA 高效使用教程</strong> 。希望对大家有帮助！</p><p>本文分为下面 4 部分内容:</p><ol><li>IDEA 高效设置指南</li><li>必备的一些插件推荐</li><li>主题优化</li><li>IDEA 源码阅读技巧</li></ol><h2 id="_01-高效设置" tabindex="-1"><a class="header-anchor" href="#_01-高效设置" aria-hidden="true">#</a> 01 高效设置</h2><p>我们先来讲讲有哪些设置调整之后 IDEA 会更好用。先说明一点: <strong>这里只是根据我个人喜好和习惯的建议，IDEA 的默认配置已经很好用了，具体要不要修改还是要看个人喜好和习惯了。</strong></p><h3 id="调整窗口字体显示大小" tabindex="-1"><a class="header-anchor" href="#调整窗口字体显示大小" aria-hidden="true">#</a> 调整窗口字体显示大小</h3><p>巨好用的一个功能！强烈安利！</p><p>勾选上 <em>Preferences / Settings | Editor | General</em> 下的 <em>Change font size with Command + Mouse Wheel</em> 选项之后，我们就可以直接使用 <code>⌘+鼠标滚轮</code>（Mac）/ <code>Ctrl+鼠标滚轮</code>(Windows&amp;Linux)来更改窗口字体的大小</p><p><img src="https://img-blog.csdnimg.cn/90540bf7b6a94f2da9a50bd6587d1e58.png" alt="开启更改所有选项卡的字体大小功能"></p><h3 id="字体设置" tabindex="-1"><a class="header-anchor" href="#字体设置" aria-hidden="true">#</a> 字体设置</h3><p>修改 <em>Preferences / Settings | Editor | Font</em> 选项下的字体设置，字体推荐使用 JetBrains Mono ，字体大小建议 16/18，根据个人需要选择是否需要开启连字。</p><p><img src="https://img-blog.csdnimg.cn/348b7d381322420383d0c4fc502b4068.png" alt="字体设置"></p><p>连字开启之后，代码可读性会更强。</p><p><img src="https://img-blog.csdnimg.cn/9f7faa76ecbc4865b44460e506cb2f30.png" alt="开启连字之前&amp;之后"></p><h3 id="配置类注释模板" tabindex="-1"><a class="header-anchor" href="#配置类注释模板" aria-hidden="true">#</a> 配置类注释模板</h3><p>修改 <em>Preferences / Settings | Editor | File adn Code Templates</em> 下的 <code>Class</code> 和 <code>Enum</code> 的模板。</p><p><img src="https://img-blog.csdnimg.cn/a17b77401ea743c2bbd84441bf458d15.png" alt="配置类注释模板."></p><p>我的日常项目的类注释模板配置为:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 微信搜 JavaGuide 回复&quot;面试突击&quot;即可免费领取个人原创的 Java 面试手册\n * <span class="token keyword">@author</span> Guide哥\n * <span class="token keyword">@date</span> $<span class="token punctuation">{</span>YEAR<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>MONTH<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>DAY<span class="token punctuation">}</span> $<span class="token punctuation">{</span>HOUR<span class="token punctuation">}</span>:$<span class="token punctuation">{</span>MINUTE<span class="token punctuation">}</span>\n **/</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span>NAME<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="优化-live-templates" tabindex="-1"><a class="header-anchor" href="#优化-live-templates" aria-hidden="true">#</a> 优化 Live Templates</h3><p>IDEA 自带的编码模板我们平时在编码的时候就会经常用到，不知道大家有没有注意。就比如说你输入一个 <code>sout</code> 就可以直接输出一行输出语句 <code>System.out.println();</code> 。</p><p><img src="https://img-blog.csdnimg.cn/0fcc5dec656b424898223014864e54a5.png" alt="配置LiveTemplates"></p><p>你可以根据自己的习惯对 IDEA 自带的编码模板进行修改，并且，你还可以添加新的编码模板来提高编码速度。非常使用！</p><h3 id="全局设置-sdk" tabindex="-1"><a class="header-anchor" href="#全局设置-sdk" aria-hidden="true">#</a> 全局设置 SDK</h3><p>修改 <em>File -&gt; New Projects Setup -&gt; Structure...| Project</em> 下的 Project SDK 选项，将其更改为你最常用的 Java 版本。</p><p><img src="https://img-blog.csdnimg.cn/4136768ead774bd197a6323f726fdcf7.png" alt="全局jdk配置"></p><p>这样的话，你新导入的项目或者新建的项目都会默认使用这个版本的 SDK。</p><h3 id="自动导包-删除无用包" tabindex="-1"><a class="header-anchor" href="#自动导包-删除无用包" aria-hidden="true">#</a> 自动导包&amp;删除无用包</h3><p>勾选上 <em>Preferences / Settings | Editor | General | Auto Import</em> 下的指定选项即可！</p><p><img src="https://img-blog.csdnimg.cn/77d3f95095a94db4b27bcdcc35cc90a2.png" alt="自动导包&amp;删除无用包"></p><p>这样设置之后，IDEA 会自动帮你导包（唯一确定的时候才会生效）以及删除代码中没用到的包。</p><h3 id="显示方法分割线" tabindex="-1"><a class="header-anchor" href="#显示方法分割线" aria-hidden="true">#</a> 显示方法分割线</h3><p>勾选上 <em>Preferences / Settings | Editor | General | Appearance</em> 下的 Show method separators 选项之后，方法分割线就有了，这会小幅提高代码的可读性。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/显示方法分割线.png" alt="显示方法分割线"></p><h3 id="显示某个文件的提交记录" tabindex="-1"><a class="header-anchor" href="#显示某个文件的提交记录" aria-hidden="true">#</a> 显示某个文件的提交记录</h3><p>在界面左侧空白区域邮件，勾选上 <em>Annotate with Git Blame</em> 即可显示对应文件详细代码提交记录，包括提交信息、提交人、变更文件等信息，非常强大！</p><p><img src="https://img-blog.csdnimg.cn/img_convert/8a33b15770b464d9673063f00da8b6ca.png" alt=""></p><h2 id="_02-必备插件" tabindex="-1"><a class="header-anchor" href="#_02-必备插件" aria-hidden="true">#</a> 02 必备插件</h2>',42),s=(0,i.Uk)("好用的插件太多了，我这里只推荐 6 个我最常用的 IDEA 插件。更多插件推荐可以看我写的"),l={href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg2OTA0Njk0OA==&action=getalbum&album_id=1319419426898329600&scene=173&from_msgid=2247505133&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("《IDEA 专题》"),c=(0,i.Uk)("。"),p=(0,i.uE)('<h3 id="jclasslib-字节码查看神器" tabindex="-1"><a class="header-anchor" href="#jclasslib-字节码查看神器" aria-hidden="true">#</a> jclasslib: 字节码查看神器</h3><p>使用 <code>jclasslib</code> 不光可以直观地查看某个类对应的字节码文件，还可以查看类的基本信息、常量池、接口、属性、函数等信息。</p><p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/2020-10/image-20201012145646086.png" alt="字节码查看神器"></p><h3 id="tabnine-基于-ai-的代码提示" tabindex="-1"><a class="header-anchor" href="#tabnine-基于-ai-的代码提示" aria-hidden="true">#</a> Tabnine: 基于 AI 的代码提示</h3><p>Tabnine 的前身是大名鼎鼎的 Codota。我一直在用的一个插件，可以说非常好用了。</p><p>Tabnine 这个插件用于智能代码补全，它基于数百万 Java 程序，能够根据程序上下文提示补全代码。Tabnine 和 IDEA 自带的智能提示两者互补。</p><p>如果你觉得 IDEA 插件安装的太多比较卡顿的话，不用担心！Tabnine 插件还有一个对应的在线网站，在这个网站上你可以根据代码关键字搜索相关代码示例，非常不错！网站地址: https://www.tabnine.com/ 。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/Tabnine.png" alt="Tabnine网页版示意图"></p><h3 id="key-promoter-x-快捷键提示" tabindex="-1"><a class="header-anchor" href="#key-promoter-x-快捷键提示" aria-hidden="true">#</a> Key Promoter X:快捷键提示</h3><p>这个插件的功能主要是<strong>在你本可以使用快捷键操作的地方提醒你用快捷键操作。</strong></p><p>举个例子。我直接点击 tab 栏下的菜单打开 Version Control(版本控制) 的话，这个插件就会提示你可以用快捷键 <code>command+9</code>或者<code>shift+command+9</code>打开。如下图所示。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/Key-Promoter-X1.png" alt="快捷键提示"></p><p>它还可以展示出哪些快捷键你忘记使用的次数最多！</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/Key-Promoter-X2.png" alt="遗忘的快捷键次数统计"></p><h3 id="alibaba-java-code-guidelines-阿里巴巴-java-代码规范" tabindex="-1"><a class="header-anchor" href="#alibaba-java-code-guidelines-阿里巴巴-java-代码规范" aria-hidden="true">#</a> Alibaba Java Code Guidelines: 阿里巴巴 Java 代码规范</h3>',15),d=(0,i.Uk)("阿里巴巴 Java 代码规范，对应的 Github 地址为: "),o={href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("https://github.com/alibaba/p3c (opens new window)"),g=(0,i.Uk)(" 。非常推荐安装！"),m=(0,i._)("p",null,"安装完成之后建议将与语言替换成中文，提示更加友好一点。",-1),u=(0,i._)("p",null,[(0,i._)("img",{src:"https://javaguide.cn/assets/img/Alibaba-Java-Code-Guidelines2.933b7a93.png",alt:"阿里巴巴 Java 代码规范"})],-1),b=(0,i._)("p",null,"根据官方描述:",-1),f=(0,i.Uk)("目前这个插件实现了开发手册中的的 53 条规则，大部分基于 PMD 实现，其中有 4 条规则基于 IDEA 实现，并且基于 IDEA "),k={href:"https://www.jetbrains.com/help/idea/code-inspection.html",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("Inspection (opens new window)"),_=(0,i.Uk)("实现了实时检测功能。部分规则实现了 Quick Fix 功能，对于可以提供 Quick Fix 但没有提供的，我们会尽快实现，也欢迎有兴趣的同学加入进来一起努力。 目前插件检测有两种模式: 实时检测、手动触发。"),A=(0,i.uE)('<p>上述提到的开发手册也就是在 Java 开发领域赫赫有名的《阿里巴巴 Java 开发手册》。</p><p>这个插件会实时检测出我们的代码不匹配它的规则的地方，并且会给出修改建议。比如我们按照下面的方式去创建线程池的话，这个插件就会帮我们检测出来,如下图所示。</p><p><img src="https://javaguide.cn/assets/img/Alibaba-Java-Code-Guidelines1.76918fbe.png" alt=""></p><h3 id="sequencediagram-一键生成时序图" tabindex="-1"><a class="header-anchor" href="#sequencediagram-一键生成时序图" aria-hidden="true">#</a> SequenceDiagram: 一键生成时序图</h3><p><strong>通过 SequenceDiagram 这个插件，我们一键可以生成时序图。</strong> 并且，你还可以:</p><ol><li>点击时序图中的类/方法即可跳转到对应的地方。</li><li>从时序图中删除对应的类或者方法。</li><li>将生成的时序图导出为 PNG 图片格式。</li></ol><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20201021171623809-20211010211828759.png" alt="一键生成时序图"></p><h3 id="save-actions-优化文件保存" tabindex="-1"><a class="header-anchor" href="#save-actions-优化文件保存" aria-hidden="true">#</a> Save Actions: 优化文件保存</h3><p>这个插件可以帮助我们在保存文件的时候:</p><ol><li>优化导入；</li><li>格式化代码；</li><li>执行一些 quick fix</li><li>......</li></ol><h3 id="rainbow-brackets-彩虹括号" tabindex="-1"><a class="header-anchor" href="#rainbow-brackets-彩虹括号" aria-hidden="true">#</a> Rainbow Brackets: 彩虹括号</h3><p>使用各种鲜明的颜色来展示你的括号，效果图如下。可以看出代码层级变得更加清晰了，可以说非常实用友好了！</p><p><img src="https://javaguide.cn/assets/img/rainbow-brackets.4eff901b.png" alt="彩虹括号"></p><h2 id="_03-主题优化" tabindex="-1"><a class="header-anchor" href="#_03-主题优化" aria-hidden="true">#</a> 03 主题优化</h2>',14),E=(0,i.Uk)("在"),D={href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247495661&idx=1&sn=3e0b33b4dc41985344c8aafcccc6bb13&chksm=cea1a026f9d62930b88711da89145080ca653f692bd8b42fed8c2cc1e8381abf76f797813fde&scene=178&cur_album_id=1319419426898329600#rd",target:"_blank",rel:"noopener noreferrer"},I=(0,i.Uk)("这几款 IDEA 主题也太好看了吧！！"),w=(0,i.Uk)("这篇文章中，我精选了几个比较适合 Java 编码的 IDEA 主题供小伙伴们选择（我自己用的是 One Dark theme 这款）。"),x=(0,i._)("p",null,[(0,i._)("img",{src:"https://img-blog.csdnimg.cn/4577a98272094d1d96f092e50d3d6d5e.png",alt:"One Dark theme "})],-1),j=(0,i._)("p",null,"挺难受的，本着一片好意发这篇文章，结果还被喷了，很多小伙伴说我审美不行，还有一些小伙伴说花里胡哨的，没有原本自带的主题好看。",-1),y=(0,i._)("p",null,"萝卜白菜各有所爱吧！保持一个包容的心态不是很难吧？你可以不装任何插件，但不要认为别人装插件就是多余，IDEA 的插件就是 IDEA 的一大灵魂所在，这点事无法否认的事实。",-1),T=(0,i._)("h2",{id:"_04-idea-源码阅读技巧",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#_04-idea-源码阅读技巧","aria-hidden":"true"},"#"),(0,i.Uk)(" 04 IDEA 源码阅读技巧")],-1),S=(0,i.Uk)("在 "),U={href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247505133&idx=1&sn=5f722cb29c655203b27cb38684503390&chksm=cea19b26f9d61230d87df97c8efd892ff6e3f7be77e6ec104c8f823a9a0c7dc7232f03b8351b&scene=178&cur_album_id=1319419426898329600#rd",target:"_blank",rel:"noopener noreferrer"},J=(0,i.Uk)("真香！用 IDEA 神器看源码，效率真高！"),q=(0,i.Uk)(" 这篇文章中，我介绍了自己平时看源码的时候常用的快捷键/小技巧！非常好用！"),G=(0,i._)("p",null,[(0,i._)("img",{src:"https://img-blog.csdnimg.cn/8a9024040e8c431796aa5427efcf35e5.png",alt:"IDEA源码阅读技巧"})],-1),P=(0,i._)("p",null,"掌握这些快捷键/小技巧，使用 IDEA 看源码的效率提升一个等级！",-1),z={},C=(0,n(3744).Z)(z,[["render",function(e,a){const n=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,(0,i._)("p",null,[s,(0,i._)("a",l,[r,(0,i.Wm)(n)]),c]),p,(0,i._)("p",null,[d,(0,i._)("a",o,[h,(0,i.Wm)(n)]),g]),m,u,b,(0,i._)("blockquote",null,[(0,i._)("p",null,[f,(0,i._)("a",k,[v,(0,i.Wm)(n)]),_])]),A,(0,i._)("p",null,[E,(0,i._)("a",D,[I,(0,i.Wm)(n)]),w]),x,j,y,T,(0,i._)("p",null,[S,(0,i._)("a",U,[J,(0,i.Wm)(n)]),q]),G,P],64)}]])}}]);