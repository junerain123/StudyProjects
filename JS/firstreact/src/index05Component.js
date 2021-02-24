import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

function Childcom(props) {
    console.log(props)

    let weather = props.weather
    let isGo = weather === '下雨' ? '不出门' : '出门玩'

    return (
        <div>
            <h1>
                函数式组件 是否出门玩？
            </h1>
            <div>
                <span>{isGo}</span>
            </div>
        </div>
    )
}

class Helloworld extends React.Component {
    render() {
        console.log(this)
        return (
            <div>
                <h1>类组件定义HelloWorld</h1>
                <h1>你好！{this.props.name}</h1>
                <Childcom weather={this.props.weather} />
            </div>
        )
    }
}

ReactDOM.render(
    <Helloworld name='王浩' weather='没下雨'/>,
    document.querySelector('#root')
)