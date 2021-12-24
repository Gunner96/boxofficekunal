import React from 'react'
import Actorcard from './Actorcard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const Actorgrid = ({data}) => {
    return (<div>{
        data.map(({person})=>{
            return <Actorcard key={person.id} 
            id={person.id} 
            name={person.name} 
            image={person.image?person.image.medium:IMAGE_NOT_FOUND}
            country={person.country?person.country.name:null}
            birthday={person.birthday?person.birthday:null}
            deathday={person.deathday?person.deathday:null}/>
        })
    }</div>)
}

export default Actorgrid
