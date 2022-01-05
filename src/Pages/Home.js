import { render } from '@testing-library/react'
import React, {useState} from 'react'
import Actorgrid from '../Components/Actors/Actorgrid'
import MainPageLayout from '../Components/MainPageLayout'
import Showgrid from '../Components/Show/Showgrid'
import { apiGet } from '../Misc/Config'
import { useLastQuery } from '../Misc/Custom-hooks'


const Home = () => {
    const [value, setvalue] = useLastQuery();
    const [results,updateresults] = useState(null)
    const [currentsearch,updatesearch] = useState('shows')
    const isShowsSearch = currentsearch === 'shows'
    const oninputchange = (ev) => {
        setvalue(ev.target.value);
    }
    const renderResults = () => {
        if(results && results.length === 0) {
            return <div>not found</div>
        }
        if(results && results.length > 0){
            return results[0].show?(<Showgrid data ={results}/>):(<Actorgrid data={results}/>);
        }
        return null

    }
    const searchfor = () => {
        const tvShow = `/search/${currentsearch}?q=`;
        const queryResult = apiGet(`${tvShow}${value}`).then(result =>{
            updateresults(result);
        });
        renderResults();
    }
    const changeSearchOption = (ev) => {
        updatesearch(ev.target.value);
        console.log(currentsearch);
    }

    const onKeyDown = (ev) => {
        if(ev.key === "Enter"){
            console.log('pressed')
            searchfor();
        }
    }
    
    return (
        <div>
        <MainPageLayout>
        <input type='text' onChange={oninputchange} onKeyDown={onKeyDown} value={value} />
        <button type='button' onClick={searchfor}>Search</button>

        <div>
            <label htmlFor='search-shows'>
                Shows
                <input type='radio' id='search-shows' checked={isShowsSearch} value='shows' onChange={changeSearchOption}/>
            </label>

            <label htmlFor='search-actors'>
                Actors
                <input type='radio' id='search-actors' value='people' checked={!isShowsSearch} onChange={changeSearchOption}/>
            </label>

        </div>
        </MainPageLayout>
        {renderResults()}
        </div>
    )
        
}

export default Home
