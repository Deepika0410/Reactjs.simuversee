import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/simuverseLog.png'
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
        axios.post('https://sv-be.spandeep.in/user/',items)
        .then(response =>{
            if(response.status===200){
                window.alert("User account created!");
                navigate("/login")
            }
            else{
                window.alert("Something went wrong! Please try again later.");
            }
        })
        .catch(error=>{
            window.alert(error)
        })
        e.preventDefault();
        
    }

    return(
        <> 
         <div className='row text-start'><img src={logo} alt="logo" className='img-fluid logo-simu'/></div>
        <div className='registration'>
        <h1 className='fir-registration' >
               Sign <b id="sec-registration">Up</b>
           </h1> 
           <form onSubmit={handleChange} className="form_registration"> 
                    <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your name' className='widthSet'/>
                    <input onChange={(e)=>setNumber(e.target.value) } type="tel" value={number} placeholder='+91 0123456789' className='widthSet'/>    
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" value={email} placeholder='Email' autoComplete="off" className='widthSet'/>
                    <input onChange={(e)=>setPwd(e.target.value)} type={showPwd?"text":"password"} value={pwd} placeholder='Password' className='widthSet'/>
                    <input type="checkbox" id="login-checkbox"  onChange={()=>setShowPwd(!showPwd)} /><span>Show Characters</span>
                
                <p></p>
                <input id="register_submit-btn" type="submit" value="Register" />
            
                   
                   <p>
                   Already have an account?
                <span  className='toggle-login-regis' onClick={()=>{navigate("/login")}}>Log in</span> 
            </p>
            </form>
            
        </div>
        </>
    );
}

export default Register;