 import React, {useRef , useContext} from "react";
 import AuthContext from '../../STORE/auth-context';
import './Auth.css';
 import {useNavigate} from 'react-router-dom'
 import profile from "./../image/a9.png";
import username from "./../image/a8.jpg";
import pass from "./../image/pass.png";
// import {Link} from 'react-router-dom'

 function Authman (){



    const navigate =useNavigate();
    const bam=useRef()
    const sam=useRef()

    const authCtx = useContext(AuthContext)

    let tofi =[]

   function passin (){
    tofi={
        username:bam.current.value,
        password:sam.current.value
    }

    fetch ("/auth/jwt/create",{
        method:'POST',
        body:JSON.stringify(tofi),
        headers:{'Content-Type':'application/json'}

    }).then(function(response){return response.json()}).then(function (data){
        console.log(data.access)
        authCtx.login(data.access)
        navigate("/purchase")
    })

    console.log(tofi)



   }


                    
                    
                
              
                



    return (
        <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1 className="lg">LOGIN</h1>
           <div>
             <img src={username} alt="username" className="up"/>
             <input type="text" className="name" placeholder="Username"  ref={bam}/>
           </div>

           <div className="second-input">
             <img src={pass} alt="pass" className="up"/>
             <input type="password" className="name" placeholder="Password"  ref={sam} />
           </div>

          <div className="login-button">
          <button className="login" onClick={passin}>Sign in</button>
          </div>
           
            {/* <p className="link">
              <h5><a href="#">Forgot password?</a></h5>
              <h5>Don't have an account? <Link to ="/signup">Sign Up</Link></h5>
            </p> */}
           
 
         </div>
       </div>
       

     </div>
    </div>
        
                        
                
           
        
    )


 }


 export default Authman ;