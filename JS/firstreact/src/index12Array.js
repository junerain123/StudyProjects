import React from 'react';
import ReactDOM from 'react-dom';


//let arr = ["小明", "小黑", "小白"]
let arrHtml = [<li>小明</li>, <li>小黑</li>, <li>小白</li>, ]

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: false
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {arrHtml}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
);