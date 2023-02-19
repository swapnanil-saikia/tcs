import React from 'react';
import { Link } from 'react-router-dom'
import "./card.scss"
const Card = (props) => {

    return (
        <Link to='/stocktake' className='carditem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5srquXBoEy_7zjBCGeOPCbp3xqhC4S_X3l96rFa3Vg&usqp=CAU&ec=48600113' />
            <div>{props.name}</div>
        </Link>
    )

}

export default Card