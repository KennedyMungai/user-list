import React from 'react'
import style from './Card.module.css'

const Card = (props) =>
{
    return (
        <div className=''>
            {props.children}
        </div>
    )
}

export default Card