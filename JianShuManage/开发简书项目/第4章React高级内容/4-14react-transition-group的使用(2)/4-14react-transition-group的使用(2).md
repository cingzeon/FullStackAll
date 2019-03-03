### 4-14react-transition-group的使用(2)
```jsx

    <CSSTransition
        in={this.state.show}  // in 进场还是出场
        timeout={1000}        // timeout 动画的切换 为 1 秒
        classNames='fade'
        unmountOnExit
        onEntered={(el) => {  // 入场动画样式事件
        el.style.color='blue'
        }}      
        appear={true}  
        
    >
        <div> hello world!</div>
    </CSSTransition>


```