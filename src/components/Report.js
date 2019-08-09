import React from 'react'
import {Input, Button} from 'antd'

export default class extends React.Component {
    state = {
        text: '',
        url: undefined,
        file: undefined
    };

    handleTextChange = e => this.setState({text: e.value});

    handleFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (file) {
                this.setState({
                    url: URL.createObjectURL(file),
                    file: reader.result
                })
            }
        };
        reader.readAsDataURL(file);
    };

    render() {
        return (
            <div>
                <Input onChange={this.handleTextChange} value={this.state.text}/>
                <input type="file" onChange={this.handleFileChange}/>
                {this.state.url && <img src={this.state.url} alt="uploaded file"/>}
                <Button type="primary"> Отправить </Button>
            </div>
        )
    }
}