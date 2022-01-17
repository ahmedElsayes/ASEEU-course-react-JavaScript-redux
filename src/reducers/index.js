export const developersReducer = (developersList = [], action) => {
  if (action.type === "LIST_DEVELOPERS") {
    return action.payload
  }
  return developersList
}

export const selectedDeveloperReducer = (selectedDeveloper = null, action) => {
  if (action.type === "DEVELOPER_SELECT") {
    return action.payload
  }
  return selectedDeveloper
}

export const postsReducer = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload
  }
  return posts
}

// export default combineReducers({
//   developersList: developersReducer,
//   selectedDeveloper: selectedDeveloperReducer,
//   posts: postsReducer
// })