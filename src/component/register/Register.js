
import React,{useState} from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    reEnterPassword: "",

  })
  const handleChange = event => {
        const { name, value} = event.target
        setUser({ ...user,[name]:value});
      }

      const register = () => {
            const { name, lastName, email, password, reEnterPassword } = user
            if(name && lastName && email && password && (password === reEnterPassword)){
              axios.post("http://localhost:9002/register", user)
              .then(res => {
                alert(res.data.message)
                navigate("/login")
              })
            } else {
              alert("Invalid input")
            }
          }
          

          return (
            <div className='register'>
            {console.log("User",user)}
            <h1>Register</h1>
            <input type="text" name='name' value={user.name} placeholder='Enter First Name' onChange={ handleChange } ></input>
            <input type="text" name='lastName' value={user.lastName} placeholder='Enter Last Name' onChange={ handleChange }  ></input>
            <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={ handleChange }  ></input>
            <input type='password' name='password' value={user.password} placeholder='Enter your Password' onChange={ handleChange }  ></input>
            <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Confirm your Password' onChange={ handleChange }  ></input>
            <div className='button' onClick={register}>Register</div>
            <div className='button' onClick={()=> navigate('/login')}>Login</div>
          </div> 
           )
};
  

 export default Register;