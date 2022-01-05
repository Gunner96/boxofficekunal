import React from 'react'
import Showcard from './Showcard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {FlexGrid} from '../Styled'
import { useShows } from '../../Misc/Custom-hooks'

const Showgrid = ({data}) => {
    const [starredShows, dispatchStarred] = useShows()
    return (<FlexGrid>{
        data.map(({show})=>{
            const isStarred = starredShows.includes(show.id);
            const onStarClick = () => {
                if(isStarred){
                    dispatchStarred({type: 'REMOVE', showId:show.id})
                }
                else{
                    dispatchStarred({type: 'ADD', showId:show.id})
                }
            }
            return (
            <Showcard key={show.id} 
            id={show.id} 
            name={show.name} 
            summary={show.summary}
            image={show.image?show.image.medium:IMAGE_NOT_FOUND}
            onStarClick={onStarClick}
            isStarred={isStarred}/>
             )
        })
    }
    </FlexGrid>
    );
}

export default Showgrid
