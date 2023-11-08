import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
export default function Sign() {
  const formik =useFormik({
    initialValues:{
      usesrname:"",
      email:"",
      password:"",
      cppassword:""
    },
    validationSchema:yup.object({
      usesrname:yup.string()
          .min(2).required("Username is required"),
      email:yup.string().email()
          .required("Email is required"),
      password:yup.string()
          .min(6)
          .required("Password is required"),
      cppassword:yup.string().required().oneOf([yup.ref("password"),null,"Password must Match"])
    }),
    onSubmit:(values)=>{
      if(values.password===values.cppassword){
        const formdata=new FormData()
        formdata.append("username",values.usesrname)
        formdata.append("email",values.email)
        formdata.append("password",values.password)
        window.location.reload(false);
      }else{
        alert("Password Did not Match")
      }
      
    }
    
  })
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit} className="login_form">
      <div className="mb-3">
          <label htmlFor="usesrname" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="usesrname"
            className="form-control"
            id="usesrname"
            aria-describedby="emailHelp"
            value={formik.values.usesrname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div id="emailHelp" className="form-text color">
           {formik.errors.usesrname && formik.touched.usesrname ? formik.errors.usesrname:null}
          </div>
        </div>
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div id="emailHelp" className="form-text color">
          {formik.errors.email && formik.touched.email ? formik.errors.email:null}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div id="emailHelp" className="form-text color">
          {formik.errors.password && formik.touched.password ? formik.errors.password:null}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="conInputPassword1" className="form-label">
          Confirm Password
          </label>
          <input
            type="password"
            name="cppassword"
            className="form-control"
            id="conInputPassword1"
            value={formik.values.cppassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div id="emailHelp" className="form-text color">
          {formik.errors.cppassword && formik.touched.cppassword?formik.errors.cppassword:null}
          </div>
        </div>
        <div>
          <p>If you have alrady an acount <Link to="/login">Click here</Link> </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
