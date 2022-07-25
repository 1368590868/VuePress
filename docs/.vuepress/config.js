module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '首页',
  description: '关于nuxt博客的制作',
  markdown: {
    lineNumbers: true,
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    nav: [
      {
        text: '全部文章',
        ariaLabel: 'article Menu',
        items: [
          {
            text: '技术文章',
            link: '/foo/',
          },
          //添加文章路由
          {
            text: '国考资料',
            link: '/guokao/',
          },
          {
            text: 'vue3使用Vuex',
            link: '/vuex/',
          },
          {
            text: 'vue3使用VueRouter',
            link: '/VueRouter/',
          },
          {
            text: 'PLA西部旧事',
            link: '/lifeArticle/',
          },
        ],
      },
      // 添加菜单栏
      {
        text: 'nuxt博客',
        link: 'https://irlin.cn',
      },
      {
        text: '联系作者',
        link: '/person/',
      },
    ],
    logo: 'https://irlin.cn/_nuxt/img/c5414e3.png',
    sidebar: {
      '/': [
        {
          title: '个人简历',
          children: ['/person/'],
        },
        {
          title: '文章',
          children: ['/', '/foo/', '/vuex/', '/VueRouter/', '/foo/http.md'],
        },
        //侧边栏配置层叠标题
        {
          title: '朝花夕拾',
          children: ['/lifeArticle/'],
        },
        {
          title: '资源分享',
          children: ['/guokao/'],
        },
      ],
    },
    sidebarDepth: 2,
  },
};
