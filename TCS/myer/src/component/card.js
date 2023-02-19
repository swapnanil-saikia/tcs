import React from 'react';
import { Link } from 'react-router-dom'
import "./card.scss"
const Card = (props) => {

    return (
        <Link to='/stocktake' className='carditem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewHwkcJoOEXYfrtePpknfuuNB6NTLHk1Cxh_E5xnblA&usqp=CAU&ec=48600113'></img>
            <div>{props.name}</div>
        </Link>
    )

}

export default Card