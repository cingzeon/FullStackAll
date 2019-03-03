import React, { PureComponent, Fragment } from 'react';

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
        <div className={this.state.show ? 'show' : 'hide'}> hello world!</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
