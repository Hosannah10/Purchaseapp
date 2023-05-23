import React from "react";
import AuthContext from "../../STORE/auth-context";
import { useContext ,useEffect} from "react";
import {useNavigate} from 'react-router-dom'


function Logout (){

    const authCtx = useContext(AuthContext)
    const navigate=useNavigate()

    useEffect(()=>{logoutHandler()},[])



    const logoutHandler = () =>{
        authCtx.logout();
        navigate('/')
    }

    
    
}

export default Logout;

