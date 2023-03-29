# React+Dva+Umi的使用

## 定义modal
```js
app.model({
  namespace: 'count',
  state: {
    record : 0,
    current: 0,
  },
});
```
## 编写compoennets
```jsx
import styles from './index.less';
const CountApp = ({count, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};
```
## 更新state
state更新通过reduces处理，reduces接受两个参数`state`，`action`，返回新的state，通过语句表达式：`(state,action) => newState`
通过add和minus两个action操作
```js
 reducers: {
   add(state) {
     const newCurrent = state.current + 1;
     return { ...state,
	//当有大于当前值时，变更为大值
       record: newCurrent > state.record ? newCurrent : state.record,
       current: newCurrent,
     };
   },
   minus(state) {
     return { ...state, current: state.current - 1};
   },
 },
```
## 在compoent页面中绑定数据

将modal和页面连接起来后，页面通过props获取`dispatch`来操作modal的action，既可以获取新的state
在这之前都是同步操作，需要完成异步操作dva对modal新增effects来处理异步任务，generator语法。