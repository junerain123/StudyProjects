import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

class Clock extends React.Component {
    constructor(props) {
        // 初始化props
        super(props)
        //状态（数据）==> view
        //构造函数初始化数据，将需要改变的数据初始化到state中
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    render() {
        //this.state.time = new Date().toLocaleTimeString();
        return (
            <div>
                <h1>当前系统时间：{this.state.time}</h1>
            </div>
        )
    }

    //生命周期函数，组件渲染完成时的函数
    componentDidMount() {
        console.log('组件加载后');
        setInterval(() => {
            console.log(this.state.time)

            this.setState({
                time: new Date().toLocaleTimeString()
            })

            //this.state.time = new Date().toLocaleTimeString(); 错误方法
            //ReactDOM.render(
            //    <Clock />,
            //    document.querySelector('#root')
            //)

        }, 1000)
    }
}

ReactDOM.render(
    <Clock />,
    document.querySelector('#root')
)