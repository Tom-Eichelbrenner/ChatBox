import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Connexion extends Component {
    state = {
        pseudo: "",
        goToChat: false
    }
    render() {
        if (this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className={'connexionBox'}>
                <form
                    onSubmit={this.handleSubmit}
                    className={'connexion'}
                >
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        placeholder={'Pseudo'}
                        type="text"
                        required={true}
                    />
                    <button type={"submit"}>GO</button>
                </form>
            </div>
        );
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const goToChat = !this.state.goToChat
        this.setState({goToChat})
    };
}

export default Connexion;