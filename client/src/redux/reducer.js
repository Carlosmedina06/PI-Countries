import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_DETAIL,
  GET_NAME,
  POST_ACTIVITY,
} from './actions'

const initialState = {
  countries: [],
  countryDetail: [],
  activities: [],
  post: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return { ...state, countries: action.payload }
    }
    case GET_DETAIL: {
      return { ...state, countryDetail: action.payload }
    }
    case GET_NAME: {
      return {
        ...state,
        countries: action.payload,
      }
    }
    case GET_ACTIVITIES: {
      return { ...state, activities: action.payload }
    }
    case POST_ACTIVITY: {
      return { ...state, post: action.payload }
    }
    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
