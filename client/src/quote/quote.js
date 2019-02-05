import React, {Component} from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: null,
    };
  }

  render() {
    if (this.props.privLevel < 3) {
      return null;
    }
    function setQuote(quote){
        return (
            <div key={quote.id} className="jumbotron">
                <h1>{quote.value}</h1>
            </div>
        )
    }
    return (
      <div className="container">
        <div className="row">
          {this.state.quotes === null && <p>Loading hilarious joke...</p>}
          {this.state.quotes && setQuote(this.state.quotes)}
        </div>
      </div>
    )
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ': ' + response.statusText);
    return response;
}

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random?category=food")
        .then(response => this.handleHTTPErrors(response))
        .then(response => response.json())
        .then(result => {
            this.setState({
                quotes: result
            });
        })
        .catch(error => {
            console.log(error);
        })
}

}

export default Quote;