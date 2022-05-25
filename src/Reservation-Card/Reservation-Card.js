import React from 'react'
import './Reservation-Card.css'

const ReservationCard = ({ name, date, time, guest, id }) => {

  return(
  <div className='resy-card'>
  <p>{name}</p>
  <p>{date}</p>
  <p>{time}</p>
  <p>Number of guests: {guest}</p>
  </div>
)
}

export default ReservationCard
