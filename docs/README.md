# 这是一个使用Vuepress搭建的文章博客系统
---

这是一个完全使用Markdown作为写作的平台，无需多余设置即可安心写作。

==看看高亮==

看看代码
```js
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '一个简单的文档',
    description: '关于nuxt博客的制作',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        nav: [{
            text: '技术文章',
            ariaLabel: 'article Menu',
            items: [{
                text: '技术文章',
                link: '/foo/'
            },
            //添加文章路由
            ]
        },
            // 添加菜单栏
            {
                text: 'nuxt博客',
                link:'https://irlin.cn'
            },
            {
            text: '联系作者',
            link: '/person/'
        }],
        logo: 'https://irlin.cn/_nuxt/img/c5414e3.png',
        sidebar: 'auto',
        darkMode: true,
    },
}
```
::: details 点击查看代码
```json
{
   "name" : "zs",
   "age" : "18",
   "time" : "day"
}
```

:::

::: tip
这是一个详情块，在 IE / Edge 中不生效
:::

::: tip 提示
这是一个详情块，在 IE / Edge 中不生效
:::