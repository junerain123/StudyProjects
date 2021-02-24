import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

//在父元素中使用state去控制子元素的props，从而达到父元素传递给子元素
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childData : null
        }
    }

    render() {
        return (
            <div>
                <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData} />
            </div>
        )
    }

    setChildData = (data) => {
        this.setState({
            childData:data
        })
    }
}


class ChildCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello world"
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.sendData}>传递helloworld给父元素</button>
                <button onClick={() => { this.props.setChildData('直接调用props函数') }}>传递helloworld给父元素</button>
            </div>
        )
    }

    sendData=()=> {
        console.log(this.state.msg)
        // 将子元素传递给父元素，实际是调用父元素传递进来的父元素函数
        this.props.setChildData(this.state.msg)
    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);