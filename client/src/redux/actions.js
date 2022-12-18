import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_NAME = 'GET_NAME'
export const POST_ACTIVITY = 'POST_ACTIVITY'

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
export function getNames(name) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      )
      dispatch({ type: GET_NAME, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }
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
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
