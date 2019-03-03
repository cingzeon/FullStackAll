import React, { PureComponent, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'; 

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      show:true //动画显示 
    }
  }

  handleToggle = () => {
    this.setState({
      show:this.state.show ? false : true
    })
  }

  render() {
    return (
      <Fragment>
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
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
