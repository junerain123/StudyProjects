import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

//style样式中，如果存在多个单词的属性组合，第二个单词开始，首字母大写，或者用引号引起来
let exampleStyle = {
    background: "skyblue",
    borderBottom: "4px solid red",
    'background-image':"url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
}

//let element = (
//    <div>
//        <h1 style={exampleStyle}>helloworld</h1>
//    </div>
//)

//let className = 'redBg'
//let element2 = (
//        <div>
//            <h1 className ={className}>helloworld</h1>
//        </div>
//    )

//多个样式
let classNameList = ['abc2', 'redBg2'].join(' ')
let element3 = (
    <div>
        <h1 className={classNameList} style={exampleStyle}>helloworld</h1>
    </div>
)


ReactDOM.render(
    element3,
    document.querySelector('#root')
)