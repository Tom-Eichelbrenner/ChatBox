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
                    onKeyUp={this.handleKeyUp}
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

    handleKeyUp = event => {
        if (event.key === "Enter"){
            this.createMessage();
        }
    };

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
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        this.setState({message:'', length})
    }
}

export default Formulaire;