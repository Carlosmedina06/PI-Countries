import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_DETAIL,
  SEARCH_COUNTRIES,
  POST_ACTIVITY,
  BY_ACTIVITY,
  BY_CONTINENT,
  BY_ORDER,
  BY_POPULATION,
} from './actions'

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: [],
  activities: [],
  post: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      }
    }
    case GET_DETAIL: {
      return { ...state, countryDetail: action.payload }
    }
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }
    case GET_ACTIVITIES: {
      return { ...state, activities: action.payload }
    }
    case POST_ACTIVITY: {
      return { ...state, post: action.payload }
    }
    case BY_ORDER: {
      if (action.payload === 'Asc') {
        state.countries.sort(function (a, b) {
          if (a.name > b.name) {
            return 1
          }
          if (b.name > a.name) {
            return -1
          }
          return 0
        })
      }
      if (action.payload === 'Desc') {
        state.countries.sort(function (a, b) {
          if (a.name > b.name) {
            return -1
          }
          if (b.name > a.name) {
            return 1
          }
          return 0
        })
      }
      return {
        ...state,
      }
    }
    case BY_ACTIVITY: {
      const allCountriesAct = state.allCountries
      const activitiesFilter =
        action.payload === 'All'
          ? allCountriesAct
          : allCountriesAct.filter(
              (country) =>
                country.activities &&
                country.activities.map((e) => e.name).includes(action.payload)
            )
      return {
        ...state,
        countries: activitiesFilter,
      }
    }
    case BY_CONTINENT:
      return {
        ...state,
        countries:
          action.payload === 'All'
            ? state.allCountries
            : state.allCountries.filter(
                (country) => country.continents === action.payload
              ),
      }
    case BY_POPULATION: {
      if (action.payload === 'MIN') {
        state.countries.sort(function (a, b) {
          if (a.population > b.population) {
            return 1
          }
          if (b.population > a.population) {
            return -1
          }
          return 0
        })
      }
      if (action.payload === 'MAX') {
        state.countries.sort(function (a, b) {
          if (a.population > b.population) {
            return -1
          }
          if (b.population > a.population) {
            return 1
          }
          return 0
        })
      }
      return {
        ...state,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
