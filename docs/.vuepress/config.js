module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '帅气的木木',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://irlin.cn/_nuxt/img/c5414e3.png',
        sidebar: [
            '/',
            ['/foo/','yuan']
        ],
         darkMode:true,
    },
}