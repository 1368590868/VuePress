## 冉林

- 学历：本科
- 专业：软件工程
- 年龄：26
- 期望职位：Web 前端开发
- 18166334475 | mumu@irlin.cn

### 专业技能


- 熟练使用 TypeScript，ES6+常用方法
- 熟练使用 Vue.js，Nuxt.js，Angular2，React + Umi + Dva
- 熟练使用RxJS响应式编程
- 熟悉 Nodejs,使用过 Nest.js 与 Koa2 框架
- 熟悉 MySQL，MongoDB 数据库

### 个人项目经历

#### Nuxt 博客系统(SSR)

- 时间：2020-08 - 2020-10
- 前端采用服务器渲染：Nuxt.js + Ant Design Vue + Less
- 后端：Node.js + Koa2 + MongoDB

博客系统主要用于个人纪录学习笔记，主要功能为：markdown 的文章写作，用户评论，图片储存，首页背景轮播图，以及基本的 SEO 优化，移动端适配，独立完成整个项目的开发与部署，并通过 Lighthouse 分析优化，首屏加载速度 0.6 秒，使用了图片懒加载及 cdn 加速，UI 组件按需引用，Nuxt 服务端渲染技术.

首页 Demo: [https://irlin.cn](https://irlin.cn)
项目源码 Demo：[github.com/nuxtBlog](https://github.com/1368590868/NuxtBlog)

#### 小程序版本

项目使用 Taro 多端开发框架开发小程序版：Taro + Taro-ui + React Hooks，后端接口使用个人博客
Restful 风格 Api。

![微信扫一扫进入小程序版](http://cdn.irlin.cn/f4f73c50-9131-11ea-9262-231f28fe50e4.png)

#### React 个人小站(SPA)

- 时间：2023-05 - 2023-07
- Demo: [https://react.irlin.cn](https://react.irlin.cn)
- 前端使用 Vite + React + Ant Design + SCSS 完成基本页面布局
- 封装 axios 统一错误请求处理，使用 React Hooks 完成页面逻辑，使用 ESLint + Prettier 项目代码统一风格
- 通过 Antd Token 完成主题色切换，及整体毛玻璃效果
---
- 后端使用 Nest.js + TS + TypeORM + MySQL
- 使用 Restful 风格 API，使用 TypeORM 完成数据库设计，使用 Nest.js 完成后端接口开发
- 通过依赖注入和中间件完成统一错误处理
- 使用 Nginx 反向代理统一部署同一域名，前端使用gzip压缩配合Nginx开启gzip压缩，并使用HTTP2协议加速请求
- 自建ChatGPT本地项目，完成后端查询优化及学习

### 社区贡献
#### 参与编程导航开源项目
- 时间：2023-05 - 2023-07
- 项目地址：[https://www.code-nav.cn](https://www.code-nav.cn)
- 参与github 2.5k Star 社区开源项目
- 负责编程导航前端页面开发，使用React + Antd + Umi
- 封装Modal Hooks函数，完成弹出登录，需要登录的内容进行复用
- 封装评论组件，完成评论功能复用
- 完成Rank排行榜组件及打卡功能，响应式布局
- 使用MarkdownToc插件完成文章目录生成，并通过修改源码支持动态配置目录级别
- 基于Umi动态可选路由，完成文章草稿箱功能，通过ahooks的useDebounce函数完成防抖，并自动保存草稿

#### 物业管理系统

- 时间：2022-01 - 2022-03
- 技术栈：React + Ant Design Pro + Umi + TS + qiankun

主要负责前端税盘申请管理，银行账户变更，币种维护等页面，使用 ES6 模块化封装提示信息，和 Modal 对话框减少重复代码，提高复用性；
使用ProTable组件完成表格数据展示，使用 ProForm 完成表单数据提交
使用 Dva 进行状态管理通信，减少 Props 多级传递；

#### 三块分期

- 时间：2022-04 - 2022-07
- 技术栈：uniapp + uView + Vuex
- 国内小程序、App、H5及一体化分期金融申请平台
- 负责多家资方对接前端UI，完成各端自适应
- 支持动态配置环境变量，打包不同平台及不同皮肤
- 使用策略模式优化，大量条件判断逻辑，适配多端业务逻辑


#### 数据表单配置生成器

- 时间：2022-08 - 2023-08
- 技术栈：Angular + PrimeNG + ngx-formly + PrimeFlex
- 国外数据表单生成器，通过可视化拖拽配置及低代码配置，快速生成表单页面，可视化维护数据库内表单信息
- 使用了 ESLint + Prettier + Husky 进行项目代码及 Git 提交规范；
- 使用 PrimeFlex CSS原子类简化样式；
- 通过阅读 ngx-formly 源码，进行了动态表单组件库完善，封装支持双向绑定及 ngx-formly 组件，如：文件上传、Table信息、Monaco Edit 代码展示、IconSelect等功能；
- 支持自定义表单验证配置，封装 eval 函数支持提供环境变量，用户使用环境变量进行复杂验证逻辑处理；
- 通过依赖注入实现Window登录和Micosoft登录切换
- 使用自定义指令实现动态按钮加弹出框功能

#### 石油管道GIS系统
- 时间：2023-06 - 2023-12
- 对Angular 12项目进行升级Angular16，并增加Eslint代码格式规范
- 将Kendo UI组件库进行替换Primeng组件库，完成统一风格
- 通过懒加载Module和Router，减少首屏渲染时间
- 通过Config.json配置文件，完成PDF Setting导出配置
- 封装Monaco编辑器，增强表单配置
