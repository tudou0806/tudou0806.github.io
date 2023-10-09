---
icon: pen-to-square
title: 如何搭建hexo博客到云服务器
date: 2021-11-27 15:29:50
category:
  - 教程
tag:
  - hexo
  - 部署
---

一直想拥有一个自己的个人博客，但是由于自己的懒惰，拖拖拉拉，到现在才动手搭建；话不多说，直接切入正题。

## 博客选择
    
在开始搭建的时候，在网上简单的调研了一下，目前大家常用的有hexo和vuepress，hexo相对比较容易一下，对于不喜欢折腾的人应该是首选；vuepress更灵活，喜欢自定义的和折腾的人可以选择；对于个人而言，主要的目的是写写写文章，要求不高，而且重心不在博客本身，而是记录；因此自己选择了相对容易的hexo。

## 云服务器选择

- 阿里云
- 腾讯云
- 青云
    
个人参与了阿里云的活动，因为有购买返现；纯搭建博客的话，对配置要求不高

## 部署

因为不想把文章传到三方仓库托管(github)，并不是因为自己的文章有多么牛逼，而是还不太会使用github和自己的云服务器打通一键部署。

- 创建用于管理博客的用户
    ```
    $ useradd git
    $ chmod 740 /etc/sudoers
    $ vim /etc/sudoers

    修改权限为
    git        ALL=(ALL)     ALL

    设置git 密码
    $ passwd git
    ```

- 创建git仓库
    
    可以将仓库放在 /home/git/repo下
    ```
    git init --bare hexo_blog.git
    ```

- 配置nginx托管文件目录
    
    创建 /var/www/hexo目录，用于博客托管
    ```
    mkdir -p /var/www/hexo
    修改目录权限和所有权为git
    chown -R git:git /var/www/hexo
    chmod -R 755 /var/www/hexo
    ```

 - 配置nginx

    我使用的centos,默认nginx安装目录
    /etc/nginx/sites-available
    ```
    $ vim default
    ```
    nginx对应root修改nginx托管博客目录
    root /var/www/hexo;

- 创建git钩子

    在云服务器上的裸仓库 hexo 创建一个钩子，在满足特定条件时将静态 HTML 文件传送到 Web 服务器的目录下，即 /var/www/hexo

    在自动生成的 hooks 目录下创建一个新的钩子文件
    ```
    vim /home/git/repo/hexo_blog.git/hooks/post-receive
    ```

    在该文件中添加两行代码，指定 Git 的工作树（源代码）和 Git 目录（配置文件等）。

    ```
    #!/bin/bash
    git --work-tree=/var/www/hexo --git-dir=/home/git/repo/hexo_blog.git checkout -f

    退出后
    chmod +x /var/repo/hexo_static.git/hooks/post-receive
    ```
    到此云服务器配置结束

## 本地配置
- 配置_config.yml

    ```
    url: x.x.x.x  -- 域名或者ip
    root: /
    permalink: :year/:month/:day/:title/
    permalink_defaults:
    ```

- 通过git部署
    配置_config.yml
    ```
    deploy:
        type: git
        repo: git@x.x.x.x:/home/git/repo/hexo_blog.git
        branch: master
    ```
- 发布博客
    ```
    $ hexo g && hexo deploy
    ```