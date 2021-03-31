import axios from 'axios'
//action type
const GET_TRAINS = 'GET_TRAINS'
const ADD_TRAIN = 'ADD_TRAIN'
//action creator
export const getTrains = trains => ({
  type: GET_TRAINS,
  trains
})

const addTrain = (train) => {
  return {
    type: ADD_TRAIN,
    train
  }
}
//thunk
export const fetchTrainsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/trains')
      dispatch(getTrains(data))
    } catch (error) {
      console.log("error in fetch trains thunk: ", error)
    }
  }
}

export const addTrainThunk = (train) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/trains', train)
      console.log("data at addTrainThunk: ", data)
      dispatch(addTrain(data))
    } catch (error) {
      console.error(error)
    }
  }
}


const initialState = []

export default function trainsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRAINS:
      return action.trains
    case ADD_TRAIN:
      return [...state,action.train]
    default:
      return state
  }
}
