# 这是一个使用Vuepress搭建的文档系统
---
:::tip 提示
一个通过vuepress搭建的文档，无需多余设置即可安心写作。
:::
## 选择vuepress
引用官方的话
> `简洁至上`
以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

>`Vue 驱动`
享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。

>`高性能`
VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。


简单来说只需要专注编写`markdown`文档，通过简单配置config文件，即可高效拥有一个写作平台。

## vuepress的搭建
通过npm或yarn方式
```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 警告
请确保你的 Node.js 版本 >= 8.6。
:::

此时打开网页即可看见一个`h1`标签包裹的标题，我们通过编写`README.MD`文档来实现写作，其中文档还支持`Vue`的模板语法
>每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 vue-loader，这意味着你可以在文本中使用 Vue 风格的插值

添加一个命令脚本来自动完成部署

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
#在dist文件内新建一个pull.sh 脚本，功能：强制与仓库代码一致
 echo ' git fetch --all &&  git reset --hard origin/master' > pull.sh

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  
#  git push -f git@github.com:1368590868/1368590868.github.io.git master

#发布到gitee地址
 git push -f git@gitee.com:ranlin/vueperss.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
每次完成开发时，可以通过执行脚本来自动上传build后的代码，然后在服务器上`clone`代码，然后再服务器执行
```sh
sh pull.sh
```
## 为何需要执行两次命令脚本
第一次脚本实现了把打包后的文件腹部到git仓库，第二次脚本是将git服务器内的文件与git仓库代码一致，这样每次写好东西以后就可以，实现服务器端部署文件与仓库代码一致，能够有效及时更新。


