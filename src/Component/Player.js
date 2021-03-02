import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'



const Player = (props) => {
    const {name,position,price,img} = props.player;
    console.log(props)
    const handlePlayerInfo = props.handlePlayerInfo;
    
    return (
        <div className='players-info'>


        <div>
        <div className= 'player-details'>
            <img src={img} alt=""/>
        </div>

        <div>
            <h4>Name :{name}</h4>
            <h4>Position :{position}</h4>
            <h4>Transfer Price : ${price}</h4>
            <Button variant ="primary" onClick ={() =>handlePlayerInfo(props.player)}> <FontAwesomeIcon icon={faFutbol} />Bid Transfer</Button>
        </div>
        </div>

        </div>
        
    );
};

export default Player;