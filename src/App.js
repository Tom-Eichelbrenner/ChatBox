import React, {Component} from 'react'
import './App.css'
import Formulaire from "./components/Formulaire";
import Message from "./components/Message"

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    render() {
        return (
            <div className='box'>
                <div>
                    <div className="messages">
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                    </div>
                </div>
                <Formulaire
                    addMessage={this.addMessage}
                    pseudo={this.state.pseudo}
                    length={140}
                />
            </div>
        )
    }

    addMessage = message => {
        const messages = {...this.state.messages}
        messages[`messages-${Date.now()}`] = message
        this.setState({messages})
    };
}

export default App
