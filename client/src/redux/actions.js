import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const BY_CONTINENT = 'BY_CONTINENT'
export const BY_ACTIVITY = 'BY_ACTIVITY'
export const BY_ORDER = 'BY_ORDER'
export const BY_POPULATION = 'BY_POPULATION'

// Todos los paises
export const getCountries = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/countries')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
// Paises por nombre
export function searchCountries(search) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/countries?name=" + search
      );
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: json.data,
      });
    } catch (error) {
      alert("Country not found");
    }
  };
}
// Paises por id
export const getDetail = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch({
          type: GET_DETAIL,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
// Todas las Actividades
export const getActivities = () => {
  return function (dispatch) {
    fetch('http://localhost:3001/activities')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

// Crear Actividad
export const createAct = (input) => {
  return function (dispatch) {
    fetch('http://localhost:3001/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: POST_ACTIVITY,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
export function byActivity(payload) {
  return {
    type: BY_ACTIVITY,
    payload,
  }
}

export function byPopulation(payload) {
  return {
    type: BY_POPULATION,
    payload,
  }
}

export function byContinent(payload) {
  return {
    type: BY_CONTINENT,
    payload,
  }
}
export function byOrder(payload) {
  return {
    type: BY_ORDER,
    payload,
  }

}
