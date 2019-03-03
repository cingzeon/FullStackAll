#### 4-8React的生命周期函数

```jsx
    生命周期函数指在某一个时刻组件会自动调用执行的函数

    
    // 1. 在组件即将被挂载到页面之前的时刻自动执行
    componentWillMount(){
        console.log('1. component Will Mount 正在加载中.....');
    }

    // 2. 在组件即将被挂载到页面之后的时刻自动执行
    componentDidMount(){
        console.log('2. component Did Mount 加载完毕.....');
    }


    // 3. 组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('3. should Component Update 组件被更新之前');
        return true; // return 是里面要更新
        // return false // false 组件是不需要更新
    } 

    // 4. 组件被更新之前，它会自动执行，但是他在 shouldComponentUpdate 之后被执行，
        /*如果 shouldComponentUpdate 返回 true 它才执行
        如果 shouldComponentUpdate 返回 false 这个函数就不会被执行了。*/   
    componentWillUpdate(){
        console.log('4. component Will Update 组件被更新之前，它会自动执行')
    }

    // 5. 组件更新完成之后，他会被执行
    componentDidUpdate(){
        console.log('5. component Did Update 组件更新完成后');
    }

    // 6. 一个组件要从父组件接受参数，
       /*
        只有父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行 
        如果这个组件第一次存在于父组件中，不会执行
        如果这个组件之前已经存在于父组件中，才会被执行
       */
    componentWillReceiveProps(){
        console.log('6. component Will Receive Props  一个组件要从父组件接受参数');
    }

    // 7. 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('7. component Will Unmount');
    }

```