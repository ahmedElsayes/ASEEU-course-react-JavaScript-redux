import axios from "axios"

// export const listAllDevelopers = () => {
//   const developersList = [
//     { name: 'Ahmed', age: '30', skill: 'ReactJS' },
//     { name: 'Mustafa', age: '28', skill: 'VanillaJS' },
//     { name: 'Ali', age: '26', skill: 'AngularJS' },
//     { name: 'Omar', age: '32', skill: 'NodeJS' }
//   ]
//   return {
//     type: "LIST_DEVELOPERS",
//     payload: developersList
//   }
// }
export const listAllDevelopers = () => (dispatch) => {
  const developersList = [
    { name: 'Ahmed', age: '30', skill: 'ReactJS' },
    { name: 'Mustafa', age: '28', skill: 'VanillaJS' },
    { name: 'Ali', age: '26', skill: 'AngularJS' },
    { name: 'Omar', age: '32', skill: 'NodeJS' }
  ]
  dispatch({type: "LIST_DEVELOPERS", payload: developersList})
}

// export const selectDeveloper = (developerDetails) => {
//   return {
//     type: "DEVELOPER_SELECT",
//     payload: developerDetails
//   }
// }
export const selectDeveloper = (developerDetails) => (dispatch) => {
  dispatch({type: "DEVELOPER_SELECT", payload: developerDetails})
}

// export const fetchPosts = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   console.log("axiosResponse: ", response)
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   }
// }

export const fetchPosts = () => async (dispatch, getState) => {
    const { developersList } = getState()
    console.log("developersList from fetchPosts action: ", developersList)
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log("axiosResponse: ", data)
    dispatch({type: "FETCH_POSTS", payload: data})
  }
