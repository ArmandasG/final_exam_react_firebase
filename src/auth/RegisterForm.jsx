import { useFormik } from 'formik'
import React from 'react'

function RegisterForm({onRegister}) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('values ===', values);
      onRegister(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label className=''>Email</label>
        <input className='' id='email' type="text" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null }
      </div>
      <div>
        <label className=''>Password</label>
        <input className='' id='password' type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
        {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null }
      </div>
      <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterForm