import React from 'react';
import CustomHook, { CustomHookDifferentCall, WasteHook } from './CustomHook';
// import randomJoke from '../componentcss/randomJoke.css'

function RandomJoke(){
    const apiUrl=`https://official-joke-api.appspot.com/jokes/random/`
return(
    <div className='container-fluid randomJoke ' >
        <TitleName title='Random Jokes' />
        <CustomHook apiCall={apiUrl} />
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
            <CustomHookDifferentCall apiCall={apiUrl} callKey={rapidApiKey} callHost={rapidApiHost} />
        </div>
    )
}

function ProgrammingJoke(){
    const apiUrl='https://v2.jokeapi.dev/joke/Programming';
    return(
        <div className='container-fluid' >
            <TitleName title='Programming Jokes' />
            <CustomHook apiCall={apiUrl} />
        </div>
    )
}

function HumorJoke(){
    return(
        <div className='container-fluid' >
            <TitleName title='Humor Jokes' />
        </div>
    )
}

function NinjaJoke(){
    return(
        <div className='container-fluid' >
            <TitleName title='Ninja Jokes' />
        </div>
    )
}

function HindiJoke(){
    return(
        <div className='container-fluid' >
            <TitleName title='Hindi Jokes' />
        </div>
    )
}

function MemeGenerator(){
    return(
        <div className='container-fluid' >
            <TitleName title='Meme Generator' />
        </div>
    )
}

function ProgrammingMemeGenerator(){
    return(
        <div className='container-fluid' >
            <TitleName title='Programming Meme Generator' />
        </div>
    )
}

function TitleName({title}){
    return<h2 className='text-center mt-5' >{title}</h2>
}

export { RandomJoke, DadJoke, ProgrammingJoke, HumorJoke, NinjaJoke, HindiJoke, MemeGenerator, ProgrammingMemeGenerator  }