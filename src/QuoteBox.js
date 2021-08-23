import React from 'react';
import './QuoteBox.css';
import COLORS_ARRAY from './colorsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rand : Math.floor(5*Math.random()),
            quotes: [
                {text: "Hay que tener cuidado al elegir a los enemigos porque uno termina pareciéndose a ellos", autor: "J.L Borges"},
                {text: "Cada vez sospecho más que estar de acuerdo es la peor de las ilusiones", autor: "J. Cortázar"},
                {text: "Si amas a alguien, díselo… muchos corazones se rompen por palabras que no se escuchan", autor: "P. Coelho"},
                {text: "La juventud es feliz porque tiene la capacidad de ver la belleza. Cualquiera que conserve la capacidad de ver la belleza jamás envejece", autor: "F. Kafka"},
                {text: "The fault, dear Brutus, is not in our stars, but in ourselves", autor: "W. Shakespeare"}
            ],
            color : 'ffadad'
        }
        this.changeQuote = this.changeQuote.bind(this)
    }

    changeQuote () {
        let rand1 = this.state.rand;
        this.setState({
            rand: Math.floor(5*Math.random()),
            color: COLORS_ARRAY[Math.floor(8*Math.random())]
        })
        if(rand1 === this.state.rand){
            this.setState({
                rand: Math.floor(5*Math.random())
            })
        }
    }
    
    render() {
        return (
            <div id="quote-box" style={{backgroundColor: this.state.color}}>
                <div id="text">
                    <p>"{this.state.quotes[this.state.rand].text}."</p>
                </div>
                <div id="author">
                    <p>- {this.state.quotes[this.state.rand].autor}</p>
                </div>
                <a id="tweet-quote" 
                href={`http://www.twitter.com/intent/tweet?text="${this.state.quotes[this.state.rand].text}." 
                -${this.state.quotes[this.state.rand].autor}`}><FontAwesomeIcon icon={faTwitter} /></a>
                <button id="new-quote" onClick={this.changeQuote}>Nueva Frase</button>
            </div>
        );
    }
}

export default QuoteBox;