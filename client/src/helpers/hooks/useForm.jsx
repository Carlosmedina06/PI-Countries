import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { createAct } from '../../redux/actions'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setErrors(validateForm(form))
    if (Object.keys(errors).length === 0) {
      dispatch(createAct(form))
    }
  }
  const handleBlur = (evt) => {
    handleChange(evt)
    setErrors(validateForm(form))
  }
  const handleChange = (evt) => {
    return setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }
  const handleSelect = (id) => {
    setForm({
      ...form,
      countryId: [...form.countryId, id.target.value],
    })
  }
  const handleDelete = (evt) => {
    setForm({
      ...form,
      countryId: form.countryId.filter((c) => c !== evt),
    })
  }

  return {
    form,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    handleSelect,
    handleDelete,
  }
}
