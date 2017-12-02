import { createStore } from 'redux'
import rootReducer from '../Reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer
  )

  return store
}

export default configureStore