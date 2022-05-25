import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import ReservationBox from '../Reservation-Box/Reservation-Box'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(data => data.json())
    .then(data => this.setState({ reservations: data }))
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form />
        </div>
        <div className='resy-container'>
          <ReservationBox reservations={ this.state.reservations } />
        </div>
      </div>
    )
  }
}

export default App;
