# http与https的区别
## 基本概念
> HTTP（HyperText Transfer Protocol：超文本传输协议）
就是一种发布和接收 HTML 页面的方法，被用于在 Web 浏览器和网站服务器之间传递信息。
HTTPS（Hypertext Transfer Protocol Secure：超文本传输安全协议）
是一种透过计算机网络进行安全通信的传输协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。

- 首先这两者的差异在于：`HTTPS`比`HTTP`多了一个`SSL/TLS`，就是通过`SSL`证书来验证服务器的身份，并为浏览器和服务器进行加密。

- 二者`HTTP`默认工作在TCP协议80端口，用户以`http://`打头访问， `HTTPS`默认工作在TCP协议443端口，用户以`https://`访问

- 因为`HTTPS`构建在`http`+SSL/TSL上面，所以会更耗费服务器资源。

# 深克隆
```js
function deepClone(obj) {
    // 如果是 值类型 或 null，则直接return
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    // 定义结果对象
    let copy = {}

    // 如果对象是数组，则定义结果数组
    if (obj.constructor === Array) {
        copy = []
    }
  
    // 遍历对象的key
    for (let key in obj)
     {
        // 如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法

            copy[key] = deepClone(obj[key])
        }
    }

    return copy
}

const value = { a: 1, b: 2 }
const deepCloneValue = deepClone(value)

console.log(value);             //{a:1,b:2}
console.log(deepCloneValue);    //{a:1,b:2}

value.a = 100
//如果不是深拷贝，value和deepCloneValue将共用一个堆内存，只是将value地址指向deepCloneValue
console.log(value);             //{a:100,b:2}
console.log(deepCloneValue);    //{a:1,b:2}
```