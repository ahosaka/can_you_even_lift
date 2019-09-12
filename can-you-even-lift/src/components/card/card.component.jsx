import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className ="card-container">
        <img alt = "plate" src = {`https://robohash.org/${props.weight.name}?set=set2&size=180x180`}/>
        <h2> {props.weight.name} </h2>
        <p>{props.weight.numbers}</p>

    </div>

);
