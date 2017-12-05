# 特性
轻量，素净，纯粹

# 安装
1. 下载压缩包安装  
在wind主题的github页面[hexo-theme-wind](https://github.com/Lonezj/hexo-theme-wind)点击Clone or download，下载主题的压缩包，解压到Hexo的主题目录theme之下，并将其重命名为wind。  
2. clone主题仓库进行安装   
在终端进入Hexo的主题目录themes，输入命令下载主题文件到wind目录中  
```
git clone https://github.com/Lonezj/hexo-theme-wind.git wind
```

# 使用
本文假设你的hexo安装目录名称为hexo。  
站点配置文件即hexo/_config.yml。主题配置文件即hexo/themes/wind/_config.yml
1. 在站点配置文件中把主题配置改为wind。即可完成最简洁的安装。下面是更多内容。
2. 独立页面  
  - 新建独立页面  
    本主题所谓独立页面，是独立于博客文章，由顶部图形菜单所指向的页面。 
    1. 修改主题配置文件  
    在主题配置文件(hexo/themes/wind/_config.yml)的pages部分添加相关配置：  
    ```
    page的名称:  
      link: "pages的相对路径"  
      icon: "pages入口的图标类名"
    ```
    上面的icon，所指的就是下一点所说的fontawesome图标名称。  

    2. 自定义图标  
    在fontawesome的图标库中找到想要添加的图标，点击之后可以看到它的名称以及使用代码。  
    比如envelope的图标，点击之后可以看到它的名称是fa-envelope。  
    要把这个图标作为page的入口图标，只需要将图标名称'fa-envelope'填到page配置的icon中即可。  

    3. 建立独立页面目录  
    在hexo/source目录新建与该page的相对路径（也就是之前所设置page的link值）同名的目录，并在其中建立index.md文件。最后在这个index.md文件中添加相关信息以及你想要显示在该page的内容。  

  - 画廊  
  建立独立页面，在index.md文件的front-matter中把layout设置为post(必选，否则不会生成画廊)，把图片链接放到photos之下。这个文件的头部应该类似于下面所示：  
  ```
  ---
  title:
    画廊
  layout: 
    post
  photos:
  - http://example1.com/example1.jpg
  - http://example2.com/example3.jpg
---
```  
  在主题配置文件新增pages配置，link值填写刚才新建独立页面目录的名称，icon值填上喜欢的fontawesome图标名。  

  - 分类  
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

  - 归档  
    如果想建立archives页面的入口，请在主题配置文件中的pages部分添加  （link的值即站点配置文件中archive_dir的值，archives是默认值）  
    ```
    archives:
      link: "/archives"
      icon: "fa fa-file-text-o"
    ```  
    之后，不必在source中新建archives目录，即可生成archives的入口。  
    page入口的图标都可以自定义，以上所述的page都是如此，它们的图标来源于fontawesome。  

  - 关于  
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

    + 添加SNS  
    about页面顶部的sns图标：  
    在主题配置文件的sns字段增加相应sns的名称以及它的链接和fontawesome图标名称即可 (sns中的link记得要加上https://或http:// )。   
    比如  
    ```
    weibo:   
      link: "http://www.weibo.com"
      icon: "fa fa-weibo"
    ```   

    + 头像卡片  
    即主题自带的头像小卡片：  
    在主题配置文件的info中填写好slogan，并且将avatarCard改为true，在hexo/source/img目录中放置一张图片，并且在主题配置文件img部分的avatar变量中填写avatar图片的文件名。　   
    这样，在建立了about页面的情况下，就可以看到about页面的头像卡片了。  

# 集成服务
1. 评论系统  
  - disqus  
在主题配置文件comment部分的use变量中填入`disqus`，并在shortname中填入你的disqus shortname。  
  - livere  
在主题配置文件comment部分的use变量中填入`livere`，并在livereuid中填入你的livere代码的data-uid值。一般在登录livere后，在管理页面的代码管理选项卡中可以找到。
  - 关闭文章的评论功能  
在该独立页面文件夹下的index.md文件的front-matter中，加入`comments:  false`

2. 分析服务  
  - Google Analytics  
  在主题配置文件analytics部分的use变量中填入`google_analytics`，并在site_id中填入你的google analytics的tracking_id。
