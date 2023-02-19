import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../component/header'
// import './header.scss'
const Stocktake = () => {

    return (
        <div className="sheader">
            <Header />

            <div className='carditem'>
                <div>Stoktake</div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5srquXBoEy_7zjBCGeOPCbp3xqhC4S_X3l96rFa3Vg&usqp=CAU&ec=48600113' height='300px' />

            </div>
        </div>
    )

}

export default Stocktake