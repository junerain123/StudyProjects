import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//let app = <App />;    //JS普通对象
//let root = document.getElementById('root');    //元素（节点）
//let h1 = <h1>helloworld</h1>;    //元素（节点）只能有一个根节点，错误：<h1>helloworld</h1><span>副标题</span>
//ReactDOM.render(h1, root);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function clock() {
//    let time = new Date().toLocaleTimeString()
//    let element = <h1>现在的时间是：{time}</h1>
//    let root = document.querySelector('#root')
//    ReactDOM.render(element, root)
//}
//setInterval(clock, 1000)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//react函数组件
function Clock(props) {
    return (
        <div>
            <h1>现在的时间是：{props.date.toLocaleTimeString()}</h1>
            <h2>副标题</h2>
        </div>
    )
}

function run() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.querySelector('#root')
        )
}

setInterval(run, 1000)