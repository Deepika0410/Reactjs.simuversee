import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './login.css'


function Login() {
    let navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[pwd,setPwd]=useState('');
    const[showPwd,setShowPwd] = useState(false)

    const handleSubmmit = (e) => {
        let items={
            email: email,
            password: pwd
        }
        //  axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',items)
        //  .then(response=>{
        //      navigate("/Welcome")
        //  })
        //  .catch(error=>{
        //      window.alert(error)
        //  })
        // console.log(items);
       e.preventDefault();
    }
    
    

     return(
        <div className='login_form'>
           <h1 className='login_header'>
                Log In
           </h1> 
           <p>
           Hello there log in and start your new shopping experience
           </p>
           <form onSubmit={handleSubmmit} className="login_form-form">
                 
                    <input onChange={e=>setEmail(e.target.value)} type="text" value={email} placeholder='email@gmail.com' autoComplete="off"/>
                
                 <br></br>
                
                    <input onChange={e=>setPwd(e.target.value)} type={showPwd?'text':'password'} value={pwd} placeholder='Enter password'/>
                   <input type="checkbox" id="login-checkbox"  onChange={()=>setShowPwd(!showPwd)}/>Show Characters
                <p>

                </p>
                <input id="login-submit-btn" type="submit" value="Login" />
  
                   
                
            </form>
            <p>
                New to the simuverse?
                <span  className='toggle-login-regis' onClick={()=>{navigate("/Register")}}>SignUp</span> 
            </p>
            
        </div>
    );
}

export default Login;