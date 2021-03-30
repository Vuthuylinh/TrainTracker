import axios from  'axios'
//action type
const GET_TRAINS = 'GET_TRAINS'

//action creator
export const getTrains = trains =>({
  type: GET_TRAINS,
  trains
})


//thunk
export const fetchTrainsThunk =()=>{
  return async (dispatch) =>{
    try {
      const {data} = await axios.get('/api/trains')
      console.log("data in trains thunk: ",data)
      dispatch(getTrains(data))
    } catch (error) {
      console.log("error in fetch trains thunk: ", error)
    }
  }
}


const initialState =[]

export default function trainsReducer(state= initialState, action){
  switch(action.type){
    case GET_TRAINS:
    return action.trains
    default: 
     return state
  }
}
