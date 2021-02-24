import React from 'react';
import ReactDOM from 'react-dom';


//let arr = ["小明", "小黑", "小白"]
//let arrHtml = [<li>小明</li>, <li>小黑</li>, <li>小白</li>,]

function ListItem(props) {

    return (
        <li>
            <h3>{props.index + 1}:ListItem:{props.data.title}</h3>
            <p>{props.data.content}</p>
        </li>
    )
}

class ListItem2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li onClick={(event) => { this.clickEvent(this.props.index, this.props.data.title, event) }}>
                <h3>{this.props.index + 1}:ListItem:{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li >
        )
    }

    clickEvent = (index, title, event) => {
        alert(index + 1 + "-" + title)
    }
}


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    title: "第一节课",
                    content: "React事件"
                },
                {
                    title: "第二节课",
                    content: "数据传递"
                },
                {
                    title: "第三节课",
                    content: "列表渲染"
                }
            ]
        }
    }

    render() {
        let listArr = this.state.list.map((item, index) => {
            return (
                //<li key={index}>
                //    <h3>{index}:{item.title}</h3>
                //    <p>{item.content}</p>
                //</li>

                <ListItem2 key={index} data={item} index={index} />

            )
        })

        console.log(listArr)

        return (
            <div>
                <h1>
                    今天课程内容
                    </h1>
                <ul>
                    {listArr}
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li onClick={(event) => { this.clickEvent(index, item.title, event) }}>
                                    <h3>{index + 1}:堆一起:{item.title}</h3>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    clickEvent = (index, title, event) => {
        alert(index + 1 + "-" + title)
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
);