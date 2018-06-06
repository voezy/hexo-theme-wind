## 特性    
Wind
>轻量，素净。   

<img style="display: block; margin: 20px auto;" alt="hexo-theme-wind" src="http://p0iviide2.bkt.clouddn.com/wind-summer-render.jpg"/>

<h2 align="center"><a href="https://blog.voezy.com/" target="_blank">Hexo-Theme-Wind</a></h1>    

## Contents 目录  

- [预览](#预览)
- [安装](#安装)
- [使用](#使用)
- [更多](#更多)
- [集成服务](#集成服务)

## 预览   
### 主页    
![wind-summer-home](http://p0iviide2.bkt.clouddn.com/doc/sm/wind-summer-home-sm.png)    
### 文章   
![wind-summer-article](http://p0iviide2.bkt.clouddn.com/doc/sm/wind-summer-article-img-sm.png)
### 关于   
![wind-summer-about](http://p0iviide2.bkt.clouddn.com/doc/sm/wind-summer-about-sm.png)    
### 画廊   
![wind-summer-gallery](http://p0iviide2.bkt.clouddn.com/doc/sm/wind-summer-gallery-sm.png)
### 分类    
![wind-summer-category](http://p0iviide2.bkt.clouddn.com/doc/sm/wind-summer-categories-sm.png)
## 安装
### 下载release包解压安装(用于稳定版)
在wind主题的release页面[release-hexo-theme-wind](https://github.com/voezy/hexo-theme-wind/releases)，下载需要的release，解压到Hexo的主题目录theme之下，并将其重命名为wind。
### 下载压缩包安装(用于快速版)  
在wind主题的github页面[hexo-theme-wind](https://github.com/voezy/hexo-theme-wind)点击Clone or download，下载主题的压缩包，解压到Hexo的主题目录theme之下，并将其重命名为wind。  
### clone主题仓库进行安装(用于快速版)   
在终端进入Hexo的主题目录themes，输入命令下载主题文件到wind目录中  
```
git clone https://github.com/voezy/hexo-theme-wind.git wind
```

## 使用
本文假设你的hexo安装目录名称为hexo。  
站点配置文件即hexo/_config.yml。主题配置文件即hexo/themes/wind/_config.yml。  
在站点配置文件中把主题配置改为wind，并且将 `highlight` 中的 `enable` 设置为 `false` （因为主题中使用了google/code-prettify这个代码高亮js库），即可完成最简洁的安装。下面是更多内容。

### 添加归档页面  
如果想建立archives页面的入口，请在主题配置文件中的pages部分添加  （link的值即站点配置文件中archive_dir的值，archives是默认值）  
```
archives:
  link: "/archives"    
  icon: "fa fa-file-text-o"
```

之后，即可生成archives的入口。  
archives入口的图标来源于fontawesome。  
详情见[自定义图标](#自定义图标)。    

## 更多  
### 新建独立页面  
本主题所谓独立页面，是独立于博客文章，由顶部图形菜单所指向的页面。

#### 修改主题配置文件  
在主题配置文件(hexo/themes/wind/_config.yml)的pages部分添加相关配置(其中的icon，所指的就是下一点所说的fontawesome图标名称。  )  
```
page的名称:  
  link: "pages的相对路径"  
  icon: "pages入口的图标类名"
```

#### 自定义图标  
在fontawesome的图标库中找到想要添加的图标，点击之后可以看到它的名称以及使用代码。  
比如envelope的图标，点击之后可以看到它的名称是fa-envelope。  
要把这个图标作为page的入口图标，只需要将图标名称'fa-envelope'填到page配置的icon中即可。  

#### 建立独立页面目录  
在hexo/source目录新建与该page的相对路径（也就是之前所设置page的link值）同名的目录，并在其中建立index.md文件。最后在这个index.md文件中添加相关信息以及你想要显示在该page的内容。  

### 画廊

建立独立页面，在index.md文件的front-matter中把layout设置为post(必选，否则不会生成画廊)，把图片链接放到photos之下。这个文件的头部应该类似于下面所示：  
```
---
title: 画廊
layout: post
photos:
- http://example1.com/example1.jpg
- http://example2.com/example3.jpg
---
```

在主题配置文件新增pages配置，link值填写刚才新建独立页面目录的名称，icon值填上喜欢的fontawesome图标名。  

### 分类  

如果是新建category，记得在主题配置文件中的pages字段添加(fontawesome图标可自定义)  
```
category:
  link: "/categories"
  icon: "fa fa-th-list"
```

并且在source目录建立与站点配置文件中category_dir值同名的目录（比如，如果没有改变站点配置文件的默认值`category_dir: categories`，则应按照此值在`/hexo/source`中建立`categories`目录），在其中创建`index.md`，并且在`front-matter`中加入  
```
type:
  categories
```

### 关于  
#### 关于页面   

如果希望利用自带的简单模板来建立about页面，
在主题配置文件中的pages字段添加  
```
about:
  link: "/about"
  icon: "fa fa-user-circle"
```

在source中建立about目录，在其中新建index.md文件  
并且在它的front-matter中加入  
```
type:
  about
```

#### 头像卡片  
即主题自带的头像小卡片。  
在主题配置文件的info中填写好slogan，并且将avatarCard改为true，在hexo/source/img目录中放置一张图片，并且在主题配置文件img部分的avatar变量中填写avatar图片的文件名。　   
这样，在建立了about页面的情况下，就可以看到about页面的头像卡片了。  

### 添加SNS  
即about页面顶部的SNS图标栏。  
在主题配置文件的SNS字段增加相应sns的名称以及它的链接和fontawesome图标名称即可 (SNS中的link记得要加上`https://`或`http://` )。   
比如  
```
weibo:   
  link: "http://www.weibo.com"
  icon: "fa fa-weibo"
```   
### 主题配置解释
#### Layout部分
- divisionLine, 博客各处的分割线    
true，显示   
false， 不显示
- articleImgInCenter, 文章中的图片    
true， 水平居中    
false， 靠左    
**emoji相关**: 如果使用hexo-filter-github-emojis，在开启了图片居中的情况下，要在站点配置中把githubEmojis中的unicode设为true，不然表情也会被居中。
- showTags, 文末文章标签    
true， 显示    
false， 不显示
- showCategories, 文末文章分类    
true， 显示    
false， 不显示
- toTop, 到达顶部按钮   
true， 显示    
false， 不显示
- catalogBtn, 博客顶部目录按钮    
true， 显示    
false， 不显示
- excerpt, 博客首页文章预览的字数    
- footer, 博客底部的信息及声明    
true， 显示    
false， 不显示    
- pages, 即独立页面的设置: [新建独立页面](#新建独立页面)    
- color, 博客部分字体颜色   
deactive, 链接、按钮未聚焦时的颜色    
active, 链接、按钮聚焦时的颜色   
可用RGB或16进制颜色值。    

#### Blog Info部分    
- head中的keywords    
即博客的关键词，用于网页描述。文章的标签会自动加入keywords中。    

#### Author Info部分    
- info和img    
主要是"关于"页面头像卡片所需信息。    
slogan是avatar图片之下的文字。   
avatarCard是头像卡片控制选项，true为开启，false为关闭。   
avatar是头像卡片中的图片。建立关于页面，开启头像卡片之后，根据默认值会显示一张来自flaticon的图片，要更改图片，请加入另一张图片，并修改此值。参看：[头像卡片](#头像卡片)。    
site_logo是博客在浏览器标签页上所显示的图标。   

- sns   
即关于页面顶部的社交网站按钮。参看：[添加sns](#添加sns)   
余下的Widget及comment即为以下集成服务选项。      

## 集成服务
### 评论系统  
#### disqus  
在主题配置文件comment部分的use变量中填入`disqus`，并在shortname中填入你的disqus shortname。   
#### livere  
在主题配置文件comment部分的use变量中填入`livere`，并在livereuid中填入你的livere代码的data-uid值。一般在登录livere后，在管理页面的代码管理选项卡中可以找到。   
#### 关闭文章的评论功能  
在该独立页面文件夹下的index.md文件的front-matter中，加入`comments:  false`    

### 分析服务  
#### Google Analytics  
在主题配置文件analytics部分的use变量中填入`google_analytics`，并在site_id中填入你的google analytics的tracking_id。    

### 网易云音乐外链播放器
在文章的front-matter部分加入neteasemusic: '[音乐链接]'即可。如    
```
neteasemusic: 'http://music.163.com/#/m/song?id=38358217'
```   
音乐链接一般可以通过在歌单页面右击目标单曲，点击复制链接来获得。    
**需要注意的是，有版权限制的歌曲生成的外链播放器是无法播放的**。所以如果出现某首歌在文章中无法播放，很有可能是因为这首歌有版权限制。
