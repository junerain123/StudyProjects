import React from 'react';
import ReactDOM from 'react-dom';


function UserGreet(props) {
    return (<h1>欢迎光临</h1>)
}

function UserLogin(props) {
    return (<h1>请先登录</h1>)
}

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: false
        }
    }

    render() {
        //if (this.state.islogin) {
        //    return (<UserGreet />)
        //}
        //else {
        //    return (<UserLogin />)
        //}

        let element = null
        if (this.state.islogin) {
            element = <UserGreet />
        }
        else {
            element = <UserLogin />
        }
        return (
            <div>
                <h2>头部</h2>
                {element}
                <h2>尾部</h2>
                <h2>三元运算符</h2>
                {this.state.islogin ? <UserGreet /> : <UserLogin/>}
            </div>
        )
    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);