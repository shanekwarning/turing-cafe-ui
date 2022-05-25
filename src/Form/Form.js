import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      date: '',
      time: '',
      numOfGuest: undefined
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', numOfGuest: ''})
  }

  postReservation = (data) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('it worked', data)
    })
    .catch((error) => {
      console.log('error', error)
    })

  }

  submitResy = event => {
    event.preventDefault();
    let toNumber = parseInt(this.state.numOfGuest)

    const newResy = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: toNumber
    }

    this.postReservation(newResy)
    this.props.addReservation(newResy)

    this.clearInputs()
    }


    render() {
      return (
        <form>
          <label>
           <input type="text" name="name" value={this.state.name} placeHolder='Name' onChange={this.handleChange} />
          </label>
          <label>
           <input type="text" name="date" value={this.state.date} placeHolder='Date (mm/dd)' onChange={this.handleChange} />
          </label>
          <label>
           <input type="text" name="time" value={this.state.time} placeHolder='Time' onChange={this.handleChange} />
          </label>
          <label>
           <input type="number" name="numOfGuest" value={this.state.numOfGuest} placeHolder='Number of Guests' onChange={this.handleChange} />
          </label>
          <input onClick={event => this.submitResy(event)} type="submit" value="Make Reservation" />
        </form>
    )
    }

  }

export default Form
