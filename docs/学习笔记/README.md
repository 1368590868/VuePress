# ECMAScript数组栈方法与队列方法
## 栈方法：
:::tip 提示
ECMAScript数组可以表现就像栈一样。栈是一种LIFO（Last In First Out，后进先出）数据结构。而栈中项的插入(叫做推入)和移除（叫做弹出），ECMAScript专门为数组提供了push()和pop()方法以便实现类似栈的行为。
:::
```js
const colors = new Array();                  //创建一个数组
const count = colors.push('black','red');    //推入两项
alert(count);      //2

count = colors.push('green');               //推入另一项
alert(count);                                //3
const item = colors.pop();                     //取出最后一项
alert(item);       			     //green
alert(colors.length)			     //2
```
## 队列方法:
:::tip 提示
队列的数据访问规则是FIFO（First In First Out，先进先出），队列是在列表末端添加`push()`，从列表前端移除项`shift()`方法反之使用unshift()方法列表前端添加项，但由于模拟队列方法遵循FIFO故在列表末端添加使用Push()方法 PS:unshift()配合pop()可以模拟反向队列，列表前端添加项，末端删除项。
:::
```js
const colors = new Array();
const count = colors.push('red','green');
alert(count);                             //2

count = colors.push('black');
alert(count);                             //3
alert(colors);                            //red,green,black

const item = colors.shift();                //取走第一项
alert(item);                              //red
alert(colors.length);                     //2
alert(colors);                            //green,black
```
简单的理解栈与队列的区别