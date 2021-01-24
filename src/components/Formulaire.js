import React, {Component} from 'react';

class Formulaire extends Component {
    state = {
        message: ''
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
                    maxLength={'140'}/>
                <div className="info">
                    140
                </div>
                <button type={"submit"}>
                    Envoyer !
                </button>
            </form>
        );
    }

    handleChange = (event) => {
        const message = event.target.value
        this.setState({message})
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