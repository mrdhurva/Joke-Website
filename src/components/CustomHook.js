import React, { useState } from 'react'


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

export default CustomHook
