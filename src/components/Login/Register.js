import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
    let navigate = useNavigate();
    const[email,setEmail] = useState('');
    const[pwd,setPwd] = useState('');
    const[name,setName] = useState('');
    const[number,setNumber] = useState('');
    const[showPwd,setShowPwd] = useState(false)
    const handleChange = (e) =>{
        let items={
        email: email,
        password: pwd,
        name: name,
        mobile: number
        };
        // axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',items)
        // .then(response =>{
        //     window.alert("Registration Successful")
        //     navigate("/");
        // })
        // .catch(error=>{
        //     window.alert(error)
        // })
        e.preventDefault();
        
    }

    return(
        <div className='registration'>
           <h1>
           Sign Up
           </h1> 
           <form onSubmit={handleChange} className="form_registration"> 
                    <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your name'/>
                    <input onChange={(e)=>setNumber(e.target.value) } type="tel" value={number} placeholder='+91 0123456789'/>    
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" value={email} placeholder='Email' autoComplete="off"/>
                    <input onChange={(e)=>setPwd(e.target.value)} type={showPwd?"text":"password"} value={pwd} placeholder='Password'/>
                    <input type="checkbox" id="login-checkbox"  onChange={()=>setShowPwd(!showPwd)}/>Show Characters
                
                <p></p>
                <input id="register_submit-btn" type="submit" value="Register" />
            
                   
                   <p>
                   Already have an account?
                <span  className='toggle-login-regis' onClick={()=>{navigate("/login")}}>Log in</span> 
            </p>
            </form>
            
        </div>
    );
}

export default Register;