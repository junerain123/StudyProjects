import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

//在父元素中使用state去控制子元素的props，从而达到父元素传递给子元素
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childData: null
        }
    }

    render() {
        return (
            <div>
                <form action="https://www.baidu.com">
                    <div className="child" >
                        <h1>Helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>    {/*这里没有传参数，如果传了，不点击按钮，parentEvent会直接执行完毕，导致onClick得到是字符串 */}
                    </div>
                </form>
                { /* 使用ES6箭头函数传递多个参数的方式 */}
                <button onClick={(e) => { this.parentEvent1("msg:使用ES6", e) }}>提交</button>
                { /* 不使用 */}
                <button onClick={function (e) { this.parentEvent1("msg:不使用ES6", e) }.bind(this)}>提交</button>
            </div>
        )
    }

    parentEvent = (e) => {
        console.log(e)
        e.preventDefault()
    }

    parentEvent1 = (msg, e) => {
        console.log(msg)
        console.log(e)
        e.preventDefault()
    }
}



ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);