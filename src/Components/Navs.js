
import React from 'react'
import {Link} from 'react-router-dom'

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


const Navs = () => (
        <div>
            <ul>
                {
                    NAVS.map(items => (
                        <li key={items.to}>
                            <Link to={items.to}>{items.text}</Link>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )

export default Navs
