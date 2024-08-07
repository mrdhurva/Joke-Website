import React from 'react';
import CustomHook, { CustomHindiHook, CustomHookDifferentCall, CustomMemeGenerator, CustomProgrammingMemeGenerator, WasteHook } from './CustomHook';
// import randomJoke from '../componentcss/randomJoke.css'

function RandomJoke(){
    const apiUrl=`https://official-joke-api.appspot.com/jokes/random/`
return(
    <div className='container-fluid randomJoke ' >
        <TitleName title='Random Jokes' />
        <CustomHook apiCall={apiUrl} btnName='Random Joke' />
    </div>
)
}

function DadJoke(){
    const apiUrl='https://dad-jokes7.p.rapidapi.com/dad-jokes/random';
    const rapidApiKey='06c12d997emshbcee97eca4e43e2p1dd1aajsn9570a7455a1f';
    const rapidApiHost='dad-jokes7.p.rapidapi.com';

    return(
        <div className='container-fluid dadJoke' >
            <TitleName title='Dad Jokes' />
            <CustomHookDifferentCall apiCall={apiUrl} callKey={rapidApiKey} callHost={rapidApiHost} btnName='Dad Joke' />
        </div>
    )
}

function ProgrammingJoke(){
    const apiUrl='https://v2.jokeapi.dev/joke/Programming';
    return(
        <div className='container-fluid' >
            <TitleName title='Programming Jokes' />
            <CustomHook apiCall={apiUrl} btnName='Programming Joke' />
        </div>
    )
}

function HumorJoke(){
    const apiUrl='https://humor-jokes-and-memes.p.rapidapi.com/jokes/create?topics=pirates&max-length=1000';
    const rapidApiKey='06c12d997emshbcee97eca4e43e2p1dd1aajsn9570a7455a1f';
    const rapidApiHost='humor-jokes-and-memes.p.rapidapi.com'
    return(
        <div className='container-fluid' >
            <TitleName title='Humor Jokes' />
            <CustomHookDifferentCall apiCall={apiUrl} callKey={rapidApiKey} callHost={rapidApiHost} btnName='Humor Joke' />
        </div>
    )
}

function NinjaJoke(){
    const apiUrl='https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
    const rapidApiKey='06c12d997emshbcee97eca4e43e2p1dd1aajsn9570a7455a1f';
    const rapidApiHost='jokes-by-api-ninjas.p.rapidapi.com';
    return(
        <div className='container-fluid' >
            <TitleName title='Ninja Jokes' />
            <CustomHookDifferentCall apiCall={apiUrl} callKey={rapidApiKey} callHost={rapidApiHost} btnName='Ninja Joke' />
        </div>
    )
}

function HindiJoke(){
    const apiKey='56ebb84fbd410760444775497018';
    const api=`https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`
    return(
        <div className='container-fluid' >
            <TitleName title='Hindi Jokes' />
            <CustomHindiHook apiCall={api} btnName='Hindi Joke' />
        </div>
    )
}

function MemeGenerator(){
    return(
        <div className='container-fluid' >
            <TitleName title='Meme Generator' />
            {/* <WasteHook apiCall='https://api.imgflip.com/get_memes' /> */}
            <CustomMemeGenerator apiCall='https://api.imgflip.com/get_memes' btnName='Random Meme' />
        </div>
    )
}

function ProgrammingMemeGenerator(){
    const apiUrl='https://programming-memes-images.p.rapidapi.com/v1/memes';
    const apiKey='d826938a64msh57fb42b9c95b27cp10bed4jsn8a6a07919a93';
    const apiHost='programming-memes-images.p.rapidapi.com';

    return(
        <div className='container-fluid' >
            <TitleName title='Programming Meme Generator' />
            <CustomProgrammingMemeGenerator apiCall={apiUrl} callKey={apiKey} callHost={apiHost} />
        </div>
    )
}

function HumorMemeGenerator(){
    return(
        <div className='container-fluid' >
            <TitleName title='Humor Meme Generator' />
        </div>
    )
}

function TitleName({title}){
    return<h2 className='text-center mt-5' >{title}</h2>
}

export { RandomJoke, DadJoke, ProgrammingJoke, HumorJoke, NinjaJoke, HindiJoke, MemeGenerator, ProgrammingMemeGenerator, HumorMemeGenerator  }