import React from 'react'

export const Dates = (props) => {

  const { datechangerCount } = props
  const date = new Date();

  const updateDate = new Date(date)
  updateDate.setDate(date.getDate() + datechangerCount)

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div style={{
      fontSize: "24px",
      fontWeight: "600"
    }}>
      { !datechangerCount ? "Today is : "  :  `After ${datechangerCount} Days Date Will Be : ` }
      {days[updateDate.getDay()] }  {months[updateDate.getMonth()] }  {updateDate.getDate() }  {updateDate.getFullYear() }
    </div>
  )
}
