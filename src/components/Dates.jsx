import React from 'react'
import "./Dates.css"

export const Dates = (props) => {

  const { datechangerCount } = props
  const date = new Date();

  const updateDate = new Date(date)
  updateDate.setDate(date.getDate() + datechangerCount)

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <div id='dates' >
      { !datechangerCount ? "Today is : "  :  `After ${datechangerCount} Days Date Will Be : ` }
      {days[updateDate.getDay()] }  {months[updateDate.getMonth()] }  {updateDate.getDate() }  {updateDate.getFullYear() }
    </div>
  )
}
