import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Personaje"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Desc</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Desc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
