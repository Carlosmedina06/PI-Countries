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
  //validate form
  const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

    if (!form.name.trim()) {
      errors.name = 'the name field is required 😠'
    } else if (!regexName.test(form.name.trim())) {
      errors.name = 'the name field only accepts letters and whitespace 😵‍💫'
    }

    if (!form.difficult) {
      errors.difficult = 'the difficulty field is required 😠'
    } else if (form.difficult > 5 || form.difficult < 1) {
      errors.difficult = 'only values from 1 to 5 are accepted 😵‍💫'
    }
    if (!form.duration) {
      errors.duration = 'the duration field is required 😠'
    } else if (form.duration > 24 || form.duration < 1) {
      errors.duration = 'only values from 1 to 24 are accepted 😵‍💫'
    }
    if (!form.season) {
      errors.season = 'the season field is required 😠'
    }
    if (!form.countryId) {
      errors.countryId = 'the country field is required 😠'
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
