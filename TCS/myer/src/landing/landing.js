import React from 'react';
import Header from '../component/header';
import Card from '../component/card';
import './landing.scss'
const Landing = () => {
    return (
        <div className='Landing'>
            <Header></Header>
            <div className='card'>
                <Card name='Stocktake' />
                <Card name='shop' />
            </div>
        </div >
    )
}

export default Landing






// {/* <button type="button" class="btn btn-info">Info</button>    #17a2b8; */}