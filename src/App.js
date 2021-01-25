import React, {Component, createRef} from 'react'
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

    messagesRef = createRef()

    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages'
        })
    }

    componentDidUpdate() {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
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
                    <div className="messages" ref={this.messagesRef}>
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

        Object
            .keys(messages)
            .slice(0,-10)
            .forEach(key => {
                messages[key] = null
            })

        this.setState({messages})
    };
}

export default App
