import React,{useState} from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';


const Homepage = ({setLoginUser}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        reEnterPassword: "",
    
      })




    return(
        <div className='homepage'>
           <div className='row mt-3'>
            <div className='col-md-6'>
                <label>Name</label>
            </div>
            <div className='col-md-6'>
                <p>{user.name}</p>
            </div>
           </div>
           <div className='row mt-3'>
            <div className='col-md-6'>
                <label>Last Name</label>
            </div>
            <div className='col-md-6'>
                <p>{user.lastName}</p>
            </div>
           </div>
           <div className='row mt-3'>
            <div className='col-md-6'>
                <label>Email</label>
            </div>
            <div className='col-md-6'>
                <p>{user.email}</p>
            </div>
           </div>
           <div className='button'onClick={()=> setLoginUser({})} >Logout</div>
        </div>
    )
}
export default Homepage;