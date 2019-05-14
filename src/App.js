import React, { Component, Fragment } from 'react';

//Assets
import 'bulma/css/bulma.css';
import './global.css';

//Components
import Header from './components/Header';
import Progress from './components/Progress';
import Card from './components/Card';
import { async } from 'q';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      page: 1,
      data: {
        info: {},
        results: []
      }
    };
  }

  componentDidMount() {
    this.fetchCharactes();
  }

  fetchCharactes = async () => {
    const apiURL = 'https://rickandmortyapi.com/api/character/?page=';
    this.setState({
      loading: true,
      error: false
    });

    try {
      const response = await fetch(`${apiURL}${this.state.page}`);
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

  render() {
    return (
      <Fragment>
        <Header />

        {this.state.loading && <Progress />}

        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">Card</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
