import React, {useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'


const Home = () => {
    const [value, setvalue] = useState('')
    const oninputchange = (ev) => {
        setvalue(ev.target.value);
    }
    const searchfor = () => {
        //https://api.tvmaze.com/search/shows?q=girls

        fetch(`https://api.tvmaze.com/search/shows?q=${value}`).then(r => r.json()).then(results => {
            console.log(results);
        })
    }

    const onKeyDown = (ev) => {
        if(ev.key === "Enter"){
            searchfor()
        }
    }
    return (
        <MainPageLayout>
        <input type='text' onChange={oninputchange} onKeyDown={onKeyDown} value={value} />
        <button type='button' onClick={searchfor}>Search</button>
        </MainPageLayout>
    )
        
}

export default Home
