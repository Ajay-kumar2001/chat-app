import React, { ChangeEvent, FormEvent } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useState, } from 'react';
import { SignUp } from '../interfaces/login.interfaces';
import "../css/login.css"
function Signup() {
    const [signUpData,setSignUpData]=useState<SignUp>({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phoneNumber:""});
          const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
              const {name,value}=e.target
              setSignUpData({...signUpData,[name]:value})
              console.log("form setSignup data",signUpData)
          }
          const handleSubmit=(e: FormEvent<HTMLFormElement>):void=>{
            e.preventDefault();
            console.log(signUpData)
        //    Api call for sending the signup data
          }
          
    return (
    <Form className='container loginForm' onSubmit={handleSubmit}>
      <div className='textAline' >Sign up</div>
      <FloatingLabel  className="col-sm-12" controlId="floatingInput" label="first Name">
            <Form.Control type="text" name ="firstName" placeholder="first Name" onChange={handleChange}/>
          </FloatingLabel>
      <FloatingLabel  className="col-sm-12" controlId="floatingInput" label="last Name">
            <Form.Control type="text" placeholder="last Name"  name ="lastName" onChange={handleChange}/>
          </FloatingLabel>
      <FloatingLabel  className="col-sm-12" controlId="floatingInput" label="phone number">
            <Form.Control type="tel" placeholder="phone number" name ="phoneNumber" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address"className="mb-3 col-sm-12">
            <Form.Control type="email" placeholder="name@example.com" name ="email" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel  className="col-sm-12" controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" name ="password" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel  className="col-sm-12" controlId="floatingPassword" label="confirm Password">
            <Form.Control type="password" placeholder="confirm Password" name ="confirmPassword"  onChange={handleChange}/>
          </FloatingLabel> 
          <Button type="submit" className="btn btn-primary">sign up</Button>   
    </Form>
  );
}

export default Signup;
