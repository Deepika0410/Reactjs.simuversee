import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './login.css'
import logo from '../../images/simuverseLog.png'

const url = `${process.env.REACT_APP_SV_BACKEND}/profile/user`;
const Url = `http://localhost:3000/auth/login`;

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
        // console.log(items);
          axios.post(Url,items)
          .then(response=>{
              if(response.data.message==="User not found."){
                window.alert("User not found!");
              }
              else{
                localStorage.setItem("id",response.data.user.id);

                localStorage.setItem("token",response.data.accessToken);
                const token=localStorage.getItem('token')
                axios.get(url,{ headers: {"Authorization" : `JWT ${token}`} })
                .then(response=>{
                    localStorage.setItem("profileid",response.data[0].id);
                })
                .catch(error=>{
                    console.log(error)
                })
                navigate("/home");
              }
              //navigate("/Welcome")
          })
          .catch(error=>{
              window.alert(error)
              console.log(error)
          })
          
       e.preventDefault();
    }
    
    

     return(
         <>
         <div className='row text-start'><img src={logo} alt="logo" className='img-fluid logo-simu'/></div>
        <div className='login_form'>
            
           <h1 className='fir' >
               Log <b id="sec">In</b>
           </h1> 
           <p id='impoDesign'>
           Hello there log in and start your new shopping experience
           </p>
           <form onSubmit={handleSubmmit} className="login_form-form">
                 
                    <input onChange={e=>setEmail(e.target.value)} type="text" value={email} placeholder='email@gmail.com' autoComplete="off"/>
                
                 <br></br>
                
                    <input onChange={e=>setPwd(e.target.value)} type={showPwd?'text':'password'} value={pwd} placeholder='Enter password'/>
                  
                   
                    <input type="checkbox" id="login-checkbox"  onChange={()=>setShowPwd(!showPwd)}/> <span className='chr'> Show Characters</span>
                    <br></br>
                <input id="login-submit-btn" type="submit" value="Login" /> 
                
            </form>
            <p className='newonsimuverse'>
            New to the simuverse ? 
                <span  className='toggle-login-regis' onClick={()=>{navigate("/Register")}}>SignUp</span> 
            </p>
            
        </div>
        </>
    );
}

export default Login;