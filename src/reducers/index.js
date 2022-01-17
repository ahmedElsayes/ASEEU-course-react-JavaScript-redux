import { combineReducers } from "redux"

const developersReducer = (developersList = [], action) => {
  if (action.type === "LIST_DEVELOPERS") {
    return action.payload
  }
  return developersList
}

const selectedDeveloperReducer = (selectedDeveloper = null, action) => {
  if (action.type === "DEVELOPER_SELECT") {
    return action.payload
  }
  return selectedDeveloper
}

export default combineReducers({
  developersList: developersReducer,
  selectedDeveloper: selectedDeveloperReducer
})