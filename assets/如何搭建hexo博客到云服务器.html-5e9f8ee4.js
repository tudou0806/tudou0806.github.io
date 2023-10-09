import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as a}from"./app-3d9c16e2.js";const d={},l=a(`<p>一直想拥有一个自己的个人博客，但是由于自己的懒惰，拖拖拉拉，到现在才动手搭建；话不多说，直接切入正题。</p><h2 id="博客选择" tabindex="-1"><a class="header-anchor" href="#博客选择" aria-hidden="true">#</a> 博客选择</h2><p>在开始搭建的时候，在网上简单的调研了一下，目前大家常用的有hexo和vuepress，hexo相对比较容易一下，对于不喜欢折腾的人应该是首选；vuepress更灵活，喜欢自定义的和折腾的人可以选择；对于个人而言，主要的目的是写写写文章，要求不高，而且重心不在博客本身，而是记录；因此自己选择了相对容易的hexo。</p><h2 id="云服务器选择" tabindex="-1"><a class="header-anchor" href="#云服务器选择" aria-hidden="true">#</a> 云服务器选择</h2><ul><li>阿里云</li><li>腾讯云</li><li>青云</li></ul><p>个人参与了阿里云的活动，因为有购买返现；纯搭建博客的话，对配置要求不高</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>因为不想把文章传到三方仓库托管(github)，并不是因为自己的文章有多么牛逼，而是还不太会使用github和自己的云服务器打通一键部署。</p><ul><li><p>创建用于管理博客的用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ useradd git
$ chmod 740 /etc/sudoers
$ vim /etc/sudoers

修改权限为
git        ALL=(ALL)     ALL

设置git 密码
$ passwd git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建git仓库</p><p>可以将仓库放在 /home/git/repo下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init --bare hexo_blog.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置nginx托管文件目录</p><p>创建 /var/www/hexo目录，用于博客托管</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /var/www/hexo
修改目录权限和所有权为git
chown -R git:git /var/www/hexo
chmod -R 755 /var/www/hexo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置nginx</p><p>我使用的centos,默认nginx安装目录<br> /etc/nginx/sites-available</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ vim default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nginx对应root修改nginx托管博客目录<br> root /var/www/hexo;</p></li><li><p>创建git钩子</p><p>在云服务器上的裸仓库 hexo 创建一个钩子，在满足特定条件时将静态 HTML 文件传送到 Web 服务器的目录下，即 /var/www/hexo</p><p>在自动生成的 hooks 目录下创建一个新的钩子文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /home/git/repo/hexo_blog.git/hooks/post-receive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在该文件中添加两行代码，指定 Git 的工作树（源代码）和 Git 目录（配置文件等）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
git --work-tree=/var/www/hexo --git-dir=/home/git/repo/hexo_blog.git checkout -f

退出后
chmod +x /var/repo/hexo_static.git/hooks/post-receive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此云服务器配置结束</p></li></ul><h2 id="本地配置" tabindex="-1"><a class="header-anchor" href="#本地配置" aria-hidden="true">#</a> 本地配置</h2><ul><li><p>配置_config.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url: x.x.x.x  -- 域名或者ip
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过git部署<br> 配置_config.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deploy:
    type: git
    repo: git@x.x.x.x:/home/git/repo/hexo_blog.git
    branch: master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>发布博客</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ hexo g &amp;&amp; hexo deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,11),s=[l];function t(r,c){return i(),n("div",null,s)}const u=e(d,[["render",t],["__file","如何搭建hexo博客到云服务器.html.vue"]]);export{u as default};
