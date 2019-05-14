import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={this.props.image} alt="Personaje" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <th>
                    <small>Name</small>
                  </th>
                  <td>
                    <small>{this.props.name}</small>
                  </td>
                </tr>

                <tr>
                  <th>
                    <small>Species</small>
                  </th>
                  <td>
                    <small>{this.props.species}</small>
                  </td>
                </tr>

                <tr>
                  <th>
                    <small>Gender</small>
                  </th>
                  <td>
                    <small>{this.props.gender}</small>
                  </td>
                </tr>

                <tr>
                  <th>
                    <small>Origin</small>
                  </th>
                  <td>
                    <small>{this.props.origin.name}</small>
                  </td>
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
