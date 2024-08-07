import React, { useState } from 'react'
import customHook from '../componentcss/customHook.css'


function CustomHook({apiCall,btnName}) {
    const [apiData,setAPiData]=useState(null);

    const handleApiData=async()=>{
       try {
        const apiUrl=await fetch(apiCall);
        // console.log(apiUrl)
        const apiResponse=await apiUrl.json();
        // console.log(apiResponse)  
        setAPiData(apiResponse)
       } catch (error) {
        throw error;
       }
    }

  return (
    <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate {btnName}</button>
      </div>
      <div className='container' >
        {apiData!=null ? 
        <div className='card' >
            <div className='card-body' >
               {apiData.type==='single' ? 
               <p className='card-title' >{apiData.joke}</p> : 
               <>
                <p className='card-title' >{apiData.setup}</p>
                <p className='card-subtitle' >{apiData.delivery}</p>
               </> }
            </div>
        </div> 
        
        : null}
      </div>
    </div>
  )
}


function CustomHookDifferentCall({apiCall,callKey,callHost,btnName}){
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
            // console.log(apiUrl)
            const apiResponse=await apiUrl.json();
            // console.log(apiResponse)
            setApiData(apiResponse)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate {btnName}</button>
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

function CustomHindiHook({apiCall,btnName}){
  const [apiData,setAPiData]=useState(null);

    const handleApiData=async()=>{
       try {
        const apiUrl=await fetch(apiCall);
        // console.log(apiUrl)
        const apiResponse=await apiUrl.json();
        // console.log(apiResponse)  
        setAPiData(apiResponse)
       } catch (error) {
        throw error;
       }
    }
  return(
    <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate {btnName}</button>
      </div>
      <div className='container' >
        {apiData!=null ? 
        <div className='card' >
            <div className='card-body' >
               <p className='card-title' >{apiData.jokeContent}</p> : 
            </div>
        </div> 
        
        : null}
      </div>
    </div>
  )
}

function CustomMemeGenerator({ apiCall, btnName }){
  const [apiData,setApiData]=useState(null);

  const handleApiData=async()=>{
    const apiUrl=await fetch(apiCall);
    const apiResponse=await apiUrl.json();
    const apiOutput=Math.floor(Math.random()*apiResponse.data.memes.length);
    console.log(apiResponse.data.memes[apiOutput])
    setApiData(apiResponse.data.memes[apiOutput]);
  }
  return(
    <div className='mainBody' >
      <div className='inputBar' >
        <button type='submit' className='btn btn-primary' onClick={handleApiData} >Generate {btnName}</button>
      </div>
      <div className='container memeContainer' >
        {apiData!=null ? 
        <div className='randomMeme' >
            <div className='memeRandom text-center' >
               <p className='h4' >{apiData.name}</p>;
               <img src={apiData.url} alt='meme' style={{ 
            height : apiData.height>500 ? 'apiData.height:500px' : `${apiData.height}px`,
            width : apiData.width>500 ? 'apiData.width:500px' : `${apiData.width}px` 
            }} />
            </div>
        </div> 
        : null}
      </div>
    </div>
  )
}

function WasteHook({apiCall}){
  const [apiData,setApiData]=useState(null);
  // const {name,url,height,width}=apiData

  const handleApiCall=async()=>{
    const apiUrl=await fetch(apiCall);
    const apiResponse=await apiUrl.json();
    const apiOutput=Math.floor(Math.random()*apiResponse.data.memes.length);
    // console.log()
    console.log(apiResponse.data.memes[apiOutput])
    // console.log()
    setApiData(apiResponse.data.memes[apiOutput]);
    // setApiData()
    // console.log(Array.isArray(apiResponse.data.memes))
  }
  return(
    <>
      <button type='submit' onClick={handleApiCall} >Fetch</button>
      <div className='container' >
        {apiData!=null ? 
        <>
          <p className='h4' >{apiData.name}</p>
          <img src={apiData.url} alt='meme' style={{ 
            height : apiData.height>500 ? 'apiData.height:500px' : `${apiData.height}px`,
            width : apiData.width>500 ? 'apiData.width:500px' : `${apiData.width}px` 
            }} />
        </> 
        : null}
      </div>
    </>
  )
}

export { CustomHookDifferentCall, WasteHook, CustomHindiHook, CustomMemeGenerator }
export default CustomHook