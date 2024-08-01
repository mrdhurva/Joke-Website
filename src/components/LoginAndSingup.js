import { Modal } from "@mui/material";
import React, { useReducer, useState } from "react";
import LoginAndSingupForm from '../componentcss/loginAndSingupForm.css';
import { Button } from "react-bootstrap";

let loginDetails={
userName:'',
userPassword:''
}

const loginReducer=(state,action)=>{
    switch(action.type){
        case 'updateField': return {
            ...state,[action.payload.name]:action.payload.value,
        }
        default:return state
    }
}

function LoginForm(){
    const [loginState,dispatch]=useReducer(loginReducer,loginDetails);

    const handleChange=(event)=>{
        dispatch({
            type:'updateField',
            payload:{name:event.target.name,value:event.target.value}
        })
    }
    return(
        <>
            <div className="userName" >
                <input type="text" name="userName" value={loginState.userName} onChange={handleChange} placeholder="userName" />
            </div>
            <div className="userPassword" >
                <input type="password" name="userPassword" value={loginState.userPassword} onChange={handleChange} placeholder="password" />
            </div>
        </>
    )
}

export {LoginForm}