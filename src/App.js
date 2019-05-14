import React, { Component, Fragment } from 'react';

//Assets
import 'bulma/css/bulma.css';
import './global.css';

//Components
import Header from './components/Header';
import Progress from './components/Progress';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: {
        info: {},
        results: []
      }
    };
  }

  componentDidMount() {
    const apiURL = `https://rickandmortyapi.com/api/character`;
    this.fetchCharactes(apiURL);
  }

  fetchCharactes = async page => {
    this.setState({
      loading: true,
      error: false
    });

    try {
      const response = await fetch(page);
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        }
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  };

  handleNext = event => {
    event.preventDefault();
    this.fetchCharactes(this.state.data.info.next);
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="hero">
          <div className="hero-body">
            <div className="container">
              {this.state.error && (
                <h2 className="title has-text-danger">Error!</h2>
              )}

              {!this.state.error && (
                <div className="columns is-multiline">
                  {this.state.data.results.map(character => {
                    return (
                      <div key={character.id} className="column is-one-third">
                        <Card {...character} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {this.state.loading && <Progress />}

            {!this.state.loading && this.state.data.info.next && (
              <div className="section">
                <div className="container">
                  <div
                    onClick={this.handleNext}
                    className="button is-large is-primary is-fullwidth"
                  >
                    Load More
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
