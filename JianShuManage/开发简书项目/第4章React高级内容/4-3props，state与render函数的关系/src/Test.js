import React, { PureComponent, Fragment } from 'react';
 
class Test extends PureComponent {

    // 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次
    render(){
        console.log('Test Render');
        return (
            <Fragment>
                {this.props.content}
            </Fragment>
        )
    }
}
export default Test;