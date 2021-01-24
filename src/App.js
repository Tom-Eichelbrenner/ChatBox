import React, {Component} from 'react'
import './App.css'
import Message from "./components/Message"
import Formulaire from "./components/Formulaire";

// firebase
import base from "./base";

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages'
        })
    }

    render() {
        const messages = Object
            .keys(this.state.messages)
            .map(key => (
                <Message
                    key={key}
                    pseudo={this.state.messages[key].pseudo}
                    message={this.state.messages[key].message}/>
            ))
        return (
            <div className='box'>
                < div>
                    <div className="messages">
                        <div className="message">
                            {messages}
                        </div>
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
