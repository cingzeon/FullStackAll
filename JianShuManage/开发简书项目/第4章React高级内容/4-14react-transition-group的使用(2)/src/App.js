import React, { PureComponent, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'; 

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

   render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                    key={index}
                    // in={this.state.show}  // in 进场还是出场， 在子级这里就不用 in 这个属性了
                    timeout={1000}        // timeout 动画的切换 为 1 秒
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => {  // 入场动画样式事件
                        el.style.color='blue'
                    }}      
                    appear={true}  
                    
                >
                    <div >{item}</div>
                </CSSTransition>               
              )
            })
          }
        </TransitionGroup>
        
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  handleAddItem = () => {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App;
