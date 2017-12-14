import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.data.picture} alt="Placeholder"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.props.data.user}</p>
                        <p className="subtitle is-6">{this.props.data.twitter}</p>
                    </div>
                    </div>
                
                    <div className="content">
                        {this.props.data.title}
                        <br/>
                        <a>Read more...</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;