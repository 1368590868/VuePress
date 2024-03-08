# vue3 使用 Vuex

## 在 src 文件下新建 vuex.js

```js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
});
```

## 在 main.js 文件内添加

```js
import { createApp } from 'vue';
import { store } from './vuex';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.use(store);
app.mount('#app');
```

## 在组件里面使用 vue3 新特性

```js
<script setup>
import {useStore} from 'vuex'
import {ref,defineProps} from 'vue'
const props = defineProps({
  msg:String
})
const store = useStore()
const count = ref(1)
const add = () => {
  store.commit('add')
  count.value = store.state.count
}

</script>

```

# 拆分成 modules 使用

## 新建 store.js

```js
const state = () => ({
  count: 5,
});
const mutations = {
  add(state) {
    state.count += 5;
  },
};
// 创建异步的方法
const actions = {
  incrementRoot(context) {
    setTimeout(() => {
      context.commit('add');
      console.log(context.state.count);
    }, 2000);
    console.log(context);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
```

## 改变原来的 vuex.js

```js
import { createStore } from 'vuex';
import store from './store';
import car from './car';

export default createStore({
  modules: {
    store,
    car,
  },
  // state() {
  //     return {
  //         count: 1
  //     }
  // },
  // mutations: {
  //     add (state) {
  //         state.count++
  //     }
  // }
});
```

把原先的状态拆分成 modules 放入，在组件中使用store.state.store.count ,因为拆分成模块后需要再深入一成进行访问，`mutations`里面的同步方法可以正常通过`commit`进行调用，`actions`异步方法则使用`store.dispatch`进行调用。
