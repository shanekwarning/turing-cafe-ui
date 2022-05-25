import React from 'react'
import ReservationCard from '../Reservation-Card/Reservation-Card'
import './Reservation-Box.css'
const ReservationBox = ({ reservations }) => {



    const resyCards = reservations.map(table => {

      return (
        <ReservationCard
          name={table.name}
          date={table.date}
          time={table.time}
          guest={table.number}
          id={table.id}
        />
      )
    })

  return(
    <div className='box-for-reservations'>
    {resyCards}
    </div>
  )
}

export default ReservationBox
