
import React from 'react'
import {useLocation} from 'react-router-dom'
import { NavList,LinkStyled } from './Navs.styled'

const NAVS = [
    {
        'to':'/',
        'text':'Home'
    },
    {
        'to':'/Starred',
        'text':'Starred'
    }
]


const Navs = () => {
        const location = useLocation();
        return(
        <div>
            <NavList>
                {
                    NAVS.map(items => (
                        <li key={items.to}>
                            <LinkStyled to={items.to}
                            className={items.to === location.pathname?'active':'' }>{items.text}</LinkStyled>
                        </li>
                    ))
                }
                
            </NavList>
        </div>
        )
    }

export default Navs
