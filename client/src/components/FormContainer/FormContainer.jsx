import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

import { getCountries } from '../../redux/actions'
import { StyleFormContainer } from './FormContainerStyle.js'
import { useForm } from '../../helpers/hooks/useForm'
import Form from '../Form/Form'

const FormContainer = () => {
  const countries = useSelector((state) => state.countries).sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
  const dispatch = useDispatch()
  const season = ['Summer', 'Spring', 'Autumn', 'Winter']
  const initialForm = {
    name: '',
    difficult: 0,
    duration: 0,
    season: '',
    countryId: [],
  }
  const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

    if (!form.name.trim()) {
      errors.name = 'el campo name es requerido'
    } else if (!regexName.test(form.name.trim())) {
      errors.name = 'el campo name solo acepta letras y espacios en blanco'
    }

    if (!form.difficult) {
      errors.difficult = 'el campo difficult es requerido'
    } else if (form.difficult > 5 || form.difficult < 1) {
      errors.difficult = 'solo se aceptan valores del 1 al 5'
    }
    if (!form.duration) {
      errors.duration = 'el campo duration es requerido'
    } else if (form.duration > 24 || form.duration < 1) {
      errors.duration = 'solo se aceptan valores del 1 al 24'
    }
    if (!form.season) {
      errors.season = 'el campo season es requerido'
    }
    if (!form.countryId) {
      errors.countryId = 'el campo country  es requerido'
    }

    return errors
  }
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const {
    form,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    handleSelect,
    handleDelete,
  } = useForm(initialForm, validationsForm)
  return (
    <StyleFormContainer>
      <Form
        form={form}
        errors={errors}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
        season={season}
        countries={countries}
      />
    </StyleFormContainer>
  )
}

export default FormContainer
