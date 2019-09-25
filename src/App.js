import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guests: [],
      name: '',
      surname: ''
    }
  }
  addName = e => { this.setState({ name: e.target.value }) };
  addSurname = e => { this.setState({ surname: e.target.value }) };

  createGuest = (e) => {
    e.preventDefault();
    if (this.state.name !== '' && this.state.surname !== '') {
      this.setState(state => {
        const newGuest = {
          id: this.state.guests.length + 1,
          name: this.state.name,
          surname: this.state.surname
        }
        // when you cannot use push, use spread (...) operator instead or concat
        const guests = [...state.guests, newGuest];
        return {
          guests,
          name: '',
          surname: ''
        }
      });
    }
  }

  renderGuests = () => {
    const guests = this.state.guests.map((guest) => {
      return (
        <tr key={guest.id}>
          <td>{guest.name}</td>
          <td>{guest.surname}</td>
        </tr>
      )
    });
    return guests;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.createGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name"
                  value={this.state.name} onChange={this.addName} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name"
                  value={this.state.surname} onChange={this.addSurname} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.renderGuests()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


