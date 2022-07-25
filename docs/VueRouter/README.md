# vue3使用路由
## 新建文件夹VueRouter，新建index.js
```js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import UserDetail from '../components/UserDetail.vue';

//路由配置
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/UserDetail/:id',
    component: UserDetail,
    //可以添加props:true  可以通过组件props获取id
  },
];

const router = createRouter({
  history: createWebHashHistory(),//使用的hash模式
  routes,   //等于router:routers
});
export default router;

```

## main.js中添加index.js并挂在
```js
import router from './router/index'

app.use(router)
```
## 动态路由使用
```js
//在script setup内使用import可以直接在模板中使用
<template>
<div>
    UserId:{{route.params.id}}
    <button @click="goHome">go home</button>
</div>
</template>
<script setup>

import {useRoute,useRouter} from 'vue-router'

//route || useRoute 等于vue2中this.$route，router等于router的实例，页面跳转等
const route = useRoute()
const router = useRouter()
const goHome = () => {
    router.push('/')
}
</script>
```

## 此时并没有结束，还需要再app页面加上路由相关显示，再template内最后面添加`<router-view />`

