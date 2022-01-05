/* eslint-disable no-underscore-dangle */
import React, {useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom'
import Cast from '../Components/Show/Cast';
import Details from '../Components/Show/Details';
import Seasons from '../Components/Show/Seasons';
import ShowMainData from '../Components/Show/ShowMainData';
import { apiGet } from '../Misc/Config';
import { useShow } from '../Misc/Custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
    const { id } = useParams();
    const {show, isLoading, error} = useShow(id);
    

    if(isLoading){
        return <div>Data is being loaded</div>
    }
    
    if(error){
        return <div>error occured {error}</div>
    }

    return (
        <ShowPageWrapper>
            <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}/>
            <InfoBlock>
                <h2>Details</h2>
                <Details
                status={show.status}
                networ={show.network}
                premiered={show.premiered}/>
            </InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons
                // eslint-disable-next-line no-underscore-dangle
                seasons={show._embedded.seasons}/>
            </InfoBlock>
            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast}/>
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show
