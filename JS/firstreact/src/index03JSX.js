import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

// JSX中的运算，如拼接
//let time = new Date().toLocaleTimeString()
//let str = '当前时间为：'
//let elementTime = (
//    <div>
//        <h1>helloworld</h1>
//        <h2>{str + time}</h2>
//    </div>
//)

//let elementSleepStyle = (
//    <div>
//        <span>横着躺</span>
//        <span>竖着躺</span>
//    </div>
//    )

//let man = '正常';
// JSX判断
//let elementLive = (
//    <div>
//        <h1>今天是否隔离</h1>
//        <h2>{man === "发热" ? <button>"隔离"</button> : elementSleepStyle}</h2>
//        {/*这里是注释 <h2> {man == "发热" ? <button>"隔离"</button> : "躺床上"}</h2>*/ }
//    </div>
//)

//JSX包含样式
let color = 'bgRed'
//let logo = 'http://128.96.214.11/Citrix/XDWeb/media/CitrixXenApp.png'
let elementBgColor = (
    <div className={color}>
        { /*<img src={logo}/>*/ }
        红色的背景颜色
    </div>
)

//页面变化
ReactDOM.render(
    elementBgColor,
    document.getElementById('root')
)