import { useFormik } from "formik";
import React from "react";
import "./loginAndRegisterForm.scss";
import * as Yup from 'yup';
import PropTypes from 'prop-types';

function LoginForm({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Has to be an email').required(),
      password: Yup.string().min(6, 'At least 6 simbols are required').required(),
          }),
    onSubmit: (values) => {
      onLogin(values);
    },
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="err">{formik.errors.email}</div>
          ) : <div className="noErr"></div>}
        </div>
        <div>
          <label className="">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="err">{formik.errors.password}</div>
          ) : <div className="noErr"></div>}
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginForm;
