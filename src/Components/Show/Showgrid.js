import React from 'react'
import Showcard from './Showcard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const Showgrid = ({data}) => {
    return <div>{
        data.map(({show})=>{
            return <Showcard key={show.id} 
            id={show.id} 
            name={show.name} 
            summary={show.summary}
             image={show.image?show.image.medium:IMAGE_NOT_FOUND}/>
        })
    }</div>
}

export default Showgrid