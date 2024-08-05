import React, { useState } from 'react'
import customHook from '../componentcss/customHook.css'


function CustomHook({apiCall}) {
    const [apiData,setAPiData]=useState(null);

    const handleApiData=async()=>{
       try {
        const apiUrl=await fetch(apiCall);
        const apiResponse=await apiUrl.json();
        setAPiData(apiResponse)
       } catch (error) {
        throw error;
       }
    }

  return (
    <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate Random Joke</button>
      </div>
      <div className='container' >
        {apiData!=null ? 
        <div className='card' >
            <div className='card-body' >
                <p className='card-title' >{apiData.setup}</p>
                <p className='card-subtitle' >{apiData.punchline}</p>
            </div>
        </div> 
        
        : null}
      </div>
    </div>
  )
}


function CustomHookDifferentCall({apiCall,callKey,callHost}){
    const [apiData,setApiData]=useState(null);

    const url=apiCall;
    const options={
        method:'GET',
        headers:{
            'x-rapidapi-key':callKey,
            'x-rapidapi-host':callHost
        }
    }

    const handleApiData=async()=>{
        try {
            const apiUrl=await fetch(url,options);
            const apiResponse=await apiUrl.json();
            console.log(apiResponse.joke)
            setApiData(apiResponse)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate Dad Joke</button>
      </div>
      <div className='container' >
        {apiData!=null || undefined ? 
        <div className='card' >
            <div className='card-body' >
                <p className='card-title' >{apiData.joke}</p>
            </div>
        </div> 
        
        : null}
      </div>
    </div>
    )
}

export {CustomHookDifferentCall}
export default CustomHook