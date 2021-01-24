import React, {Component} from 'react';

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="form">
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    required={true}
                    maxLength={this.props.length}/>
                <div className="info">
                    {this.state.length}
                </div>
                <button type={"submit"}>
                    Envoyer !
                </button>
            </form>
        );
    }

    handleChange = (event) => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.createMessage()
    };

    createMessage = () => {
        const { addMessage, pseudo } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        this.setState({message:''})
    }
}

export default Formulaire;