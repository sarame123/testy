import React from 'react'
import {style} from './Contact.module.css'
import { useFormik } from 'formik'
import  * as Yup  from "yup" 

export default function Contact() {
  function submitfn(values){
    console.log(values);
  }
let validation=Yup.object({
  name: Yup.string().min(2, 'min length is 2 char').max(7, 'max is 7 char').required('name is required'),
  email: Yup.string().email('email not valid').required('email is required'),
  age:Yup.number().required("").min(25).max(30),
  password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password not match').required('password is required'),
  rePaassword: Yup.string().oneOf([Yup.ref('password')], 'repassowrd dont match password').required('repassword is required'),
  phone:Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/, 'not match').required('phone is required')
})
  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      phone:"",
      age:"",
      password:"",
      rePaassword:""
    },
    validationSchema:validation,
    onSubmit:submitfn
  })
 
 
 
  return (
   <>
   <form action="" onSubmit={formik.handleSubmit}>
    <div class="container text-white   mt-3 w-75"  >
      <div class="row py-4" >
            <div class="col-6">
             
              <input type="text" name="name" id="name" class="form-control name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Enter Your Name"/>
              {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-2">
            {formik.errors.name}
          </div> : ""}
            </div>
            <div class="col-6">
              <input type="email"  name="email" id="email" class="form-control" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Enter Your Email"/>
              {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-2">
            {formik.errors.email}
          </div> : ""}
            </div>
      </div>
      <div class="row py-4" >
        <div class="col-6">
          <input type="tel" name="phone" id="phone" class="form-control" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Enter Your phone"/>
          {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2">
            {formik.errors.phone}
          </div> : ""}
        </div>
        <div class="col-6">
          <input type="number"  name="age" id="age" class="form-control" value={formik.values.age} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Enter Your Age"/>
          {formik.errors.age && formik.touched.age? <div className="alert alert-danger p-2">
              {formik.errors.age}
          </div>:""}
        </div>
        </div>
        <div class="row py-4" >
          <div class="col-6">
            <input type="password" name="password" id="pass" class="form-control" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Enter Your Password"/>
            {formik.errors.password && formik.touched.password? <div className="alert alert-danger p-2">
              {formik.errors.password}
          </div>:""}
          </div>
          <div class="col-6">
            <input type="password"  name="rePaassword" id="rePaassword" class="form-control" placeholder="RePassword"  value={formik.values.rePaassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.rePaassword && formik.touched.rePaassword? <div className="alert alert-danger p-2">
              {formik.errors.rePaassword}
          </div>:""}
          </div>
          </div>

          <div class="container py-3">
            <div class="row">
              <div class="col text-center">
                <button disabled={!(formik.isValid&&formik.dirty)} class="btn btn-outline-danger"  value="Validate Name"  id="btn"  type="button">Login</button>
              </div>
            </div>
          </div>

    </div>
    </form>
   </>
  )
}
