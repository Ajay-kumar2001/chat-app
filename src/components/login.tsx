import {ChangeEvent ,FormEvent, useState,} from 'react';

import { Button, FloatingLabel, Form } from 'react-bootstrap';
import "../css/login.css"
import {Login} from "../interfaces/login.interfaces"
import { Link } from 'react-router-dom';
function LoginForm() {
    const [loginData, setLoginInfo] = useState<Login>({email:"", password:""});
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        console.log(name,value)
        setLoginInfo ({
          ...loginData,
          [name]: value
        });
        console.log(loginData)
      };
      const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(loginData)

        // Api call for login
      };

  return (
    
     <Form className='container loginForm '  onSubmit={handleSubmit} >

          <div className='textAline' >Login</div>

          <FloatingLabel controlId="floatingInput" label="Email address"className="mb-3 col-sm-12">
            <Form.Control type="email"  name="email" placeholder="name@example.com" onChange={handleInputChange} />
          </FloatingLabel>

          <FloatingLabel  className="col-sm-12" controlId="floatingPassword" label="Password">
            <Form.Control type="password" name="password" placeholder="Password"  onChange={handleInputChange}/>
          </FloatingLabel>
          <div className='loginButton'><Button type="submit" className="btn btn-primary login">Login</Button>  
          <Link to ="/signup"> create Account</Link>
          </div>
           
          </Form>
            
     
    
  );
}

export default LoginForm;
