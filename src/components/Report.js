import React from 'react'
import {Input, Button, Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Report extends React.Component {
    state = {
        text: '',
        url: undefined,
        file: undefined,
        number: '',
        loading: false
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

    handleNumberChange = e => {
        this.setState({ number: e.target.value });
    };

    handleReport = () => {
        if (this.state.text !== '' && this.state.number !== '') {
            this.setState({ loading: true });
            axios.post(
                '/cars', {
                    nember: this.state.number,
                    sender: this.props.name,
                    file: this.state.file,
                    message: this.state.text
                }
            ).then( response => {
                this.props.history.push('/');
            }).catch( e => {
                this.props.history.push('/');
            })
        }
    };

    render() {
        return (
            <div className = "input-styles">
                <Input onChange={this.handleNumberChange} value={this.state.number}/>
                <br/>
                <Input onChange={this.handleTextChange} value={this.state.text}/>
                <br/>
                <input type="file" onChange={this.handleFileChange} className = "btn-file"/>
                <div className = "file-pic">Виберіть файл</div>
                {this.state.url && <img src={this.state.url} alt="Файл прикріплений"/>}
                {this.state.loading ? <Icon type="loading" /> : <Button type="primary" onClick={this.handleReport}> Відправити </Button>}
            </div>
        )
    }
}

export default withRouter(props => <Report {...props} />);