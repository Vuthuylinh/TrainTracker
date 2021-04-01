import React from 'react'
import {connect} from 'react-redux'

//import ScheduleForm from './ScheduleForm'
import {addTrainThunk} from '../store/trains'

const defaultState = {
   name: '',
   arrivalTime1: '',
   arrivalTime2: '',
   errorMessage: ''
 }
 class CreateTrainSchedule extends React.Component {
  constructor(props){
    super(props)
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   async handleSubmit(event){
     try {
     await this.props.addTrainToState(this.state)
     event.preventDefault();
     this.setState(defaultState)
   } catch (err){
     this.setState({
       errorMessage: `There was a problem creating the project: ${err.message}`
     })
   }
   }
   handleChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
   }
   render() {
    const warningMessage = ' (Name must has maximun 4 characters)';
     return (
      <form id="schedule-form" onSubmit={this.handleSubmit}>
      <label htmlFor="trainName"> Train name:
      {this.state.name.length>4 && warningMessage && <span className="warning">{warningMessage}</span>}
      </label>
          <input name ="name" type="text" value={this.name} onChange = {this.handleChange} />
      <label>
            Arrival time 1:
            <select name ="arrivalTime1" value={this.state.arrivalTime1} onChange={this.handleChange}>
              <option value="select time"> Select time </option>
              <option value="08:00 AM"> 08:00 AM </option>
              <option value="09:00 AM"> 09:00 AM </option>
              <option value="10:00 AM"> 10:00 AM </option>
              <option value="11:00 AM"> 11:00 AM </option>
            </select>
      </label>
      <label>
            Arrival time 2:
            <select name ="arrivalTime2" value={this.state.arrivalTime2}  onChange={this.handleChange}>
              <option value="select time"> Select time </option>
              <option value="01:30 PM"> 01:30 PM </option>
              <option value="03:30 PM"> 02:30 PM </option>
              <option value="01:30 PM"> 03:30 PM </option>
              <option value="03:30 PM"> 04:30 PM </option>
            </select>
      </label>
      <button type="submit"  disabled={!this.state.name || this.state.name.length > 4 || !this.state.arrivalTime1 || !this.state.arrivalTime2}>Submit</button>
    </form>
     )
   }
 }

 const mapDispatch = (dispatch) => {
   return {
     addTrainToState: (train) => dispatch(addTrainThunk(train)),

   };
 };
 export default connect(null, mapDispatch)(CreateTrainSchedule)
