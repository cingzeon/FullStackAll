#### 5-9Redux知识点复习补充
```jsx
    Redux 设计和使用的三项原则
        1. store 必须是唯一的
        2. 只有store 能够改变自己的内容
        3. reducer 必须是纯函数，什么是纯函数呢。纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用

    Redux 的核心 API
        createStore     可以帮助我们创建 store
        store.dispatch  帮我们派发 action, 这个action传递给store
        store.getState  获取到 store 的所有内容
        store.subscribe 可以让我们定义store的改变，指定 store 它是改变的。store.subscribe这个函数接收的这个回调函数，就被执行
```