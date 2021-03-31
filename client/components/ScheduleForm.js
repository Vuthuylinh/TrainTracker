import React from 'react'
const ScheduleForm = (props) => {
  const {handleSubmit, handleChange, name, arrivalTime1, arrivalTime2} = props
  const warningMessage = ' (Name has maximm 4 characters)';
  return (
  <form id="schedule-form" onSubmit={handleSubmit}>
    <label htmlFor="trainName"> Train name:
    {!name && warningMessage && <span className="warning">{warningMessage}</span>}
    </label>
        <input name ="name" type="text" value={name} onChange = {handleChange} />
    <label>
          Arrival time 1:
          <select value={arrivalTime1} onChange={handleChange}>
            <option value="09:00 AM"> 09:00 AM </option>
            <option value="11:00 AM"> 11:00 AM </option>
          </select>
    </label>
    <label>
          Arrival time 2:
          <select value={arrivalTime2}  onChange={handleChange}>
            <option value="01:30 PM"> 01:30 PM </option>
            <option value="03:30 PM"> 03:30 PM </option>
          </select>
    </label>
    <button type="submit"  disabled={!name}>Submit</button>
  </form>
)
}
export default ScheduleForm
