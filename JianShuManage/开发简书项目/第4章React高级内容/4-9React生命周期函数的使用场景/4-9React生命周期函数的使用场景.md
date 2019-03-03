#### 4-9React生命周期函数的使用场景
```jsx
    安装 axios 用来请求数据使用
    yarn add axios 

    import axios from 'axios';
    
    // 在组件被挂载到页面上之后。被执行。
    componentDidMount(){
        // 获取请求数据
        /*let result = {};
        this.ajax().then((res) => {
            result = res;
        })*/

        axios.get('/api/todolist')
        .then((res) => {
            // 成功调用 .then 的方法
            alert('succes', res);
        }).catch((error) => {
            // 失败调用 .catch 的方法
            alert('error',error);
        })
    }
```