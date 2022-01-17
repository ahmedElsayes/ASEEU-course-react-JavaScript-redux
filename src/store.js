import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { developersReducer, postsReducer, selectedDeveloperReducer } from "./reducers"

const reducerall = combineReducers({
  developersList: developersReducer,
  selectedDeveloper: selectedDeveloperReducer,
  posts: postsReducer
})

const middleware = [thunk]

const store = createStore(reducerall, composeWithDevTools(applyMiddleware(...middleware)))

export default store