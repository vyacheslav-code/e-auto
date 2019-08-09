import React from 'react'
import {Input, Button} from 'antd'

export default class extends React.Component {
    state = {
        text: '',
        url: undefined,
        file: undefined
    };

    handleTextChange = e => {
        this.setState({text: e.target.value})
    };

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
            <div className = "input-styles">
                <Input onChange={this.handleTextChange} value={this.state.text}/>
                <br/>
                <Input onChange={this.handleTextChange} value={this.state.text}/>
                <br/>
                <input type="file" onChange={this.handleFileChange} className = "btn-file"/>
                <div className = "file-pic">Виберіть файл</div>
                {this.state.url && <img src={this.state.url} alt="Файл прикріплений"/>}
                <Button type="primary"> Відправити </Button>
            </div>
        )
    }
}