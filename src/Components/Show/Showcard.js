import React from 'react'
import {Link} from 'react-router-dom'
import { StyledShowCard,} from "./ShowCard.styled";
import {Star} from '../Styled'

const Showcard = ({ id, image, name, summary,onStarClick,isStarred}) => {
    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
    return (
      <StyledShowCard>
        <div>
          <img src={image} alt="show" className='img-wrapper'/>
        </div>
  
        <h1>{name}</h1>
  
        <p>{summaryAsText}</p>
  
        <div className='btns'>
          <Link to={`/Show/${id}`}>Read more</Link>
          <button type="button" onClick={onStarClick}>
            <Star active={isStarred}/>
            </button>
        </div>
      </StyledShowCard>
    );
  };

export default Showcard


// results.map(items =>(
//     <div key={items.show.id}>{items.show.name}</div>
// ))