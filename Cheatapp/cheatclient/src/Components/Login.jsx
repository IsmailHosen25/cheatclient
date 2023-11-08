import React from "react";
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"
export default function Login() {
  const {handleChange,values,handleBlur,handleSubmit,errors,touched} =useFormik({
           initialValues:{
            email:"",
            password:""
           },
           validationSchema:yup.object({
            email:yup.string().email().required("email is required"),
            password:yup.string().min(6).required("password is required")
           }),
           onSubmit:(values)=>{
              const formdata=new FormData()
              formdata.append("email", values.email)
              formdata.append("password",values.password)
              window.location.reload(false);
           }
  })

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div id="emailHelp" className="form-text color">
            {errors.email && touched.email? errors.email:null}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div id="emailHelp" className="form-text color">
            {errors.password && touched.password ? errors.password:null}
          </div>
        </div>
        <div>
          <p>If you dont have an acount <Link to="/sign">Click here</Link> </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
