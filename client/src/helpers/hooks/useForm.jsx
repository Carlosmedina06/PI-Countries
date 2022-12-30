import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

import { createAct } from '../../redux/actions'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()
 

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setErrors(validateForm(form))
    if (Object.keys(errors).length === 0) {
      dispatch(createAct(form))
      Swal.fire({
        icon: 'success',
        title: 'Activity Created',
        showConfirmButton: false,
        timer: 1500,
      })
      history.push('/countries')
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