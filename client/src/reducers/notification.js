import axios from 'axios'
import { setFlash } from './flash'


const VIEW_NOTIFICATIONS = "ADD_USER_TO_GROUP";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS"

// when the notifications are viewed our controller lets us know so we can change the styling
export const viewNotifications = () => {
  return(dispatch) => {
    axios.post(`/api/notifications`)
    .then( res => {
      dispatch({ type: VIEW_NOTIFICATIONS, group_user: res.data })      
    })
  }
}

export const getNotifications = () => {
  return(dispatch) => {
    axios.get(`/api/notifications`)
    .then( response => {
      dispatch({ type: GET_NOTIFICATIONS, notifications: response.data })
    })
    .catch(error => {
      const message = "Unable to load notifications from server";
      dispatch(setFlash(message, 'red'))
    })
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case VIEW_NOTIFICATIONS:
      return action.notifications
    case GET_NOTIFICATIONS:
      return action.notifications
    default: return state
  }
}