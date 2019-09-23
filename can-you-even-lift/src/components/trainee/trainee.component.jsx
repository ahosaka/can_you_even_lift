import React from 'react';
// import { render } from 'react-dom';
// import { FilteredWeights } from '../function/function.component';

import './trainee.styles.css';

export const Trainee = props => {

    var newWeightsDict = props.newWeightsDict.weights
    var plate_left = [];
    var plate_right = [];

    return(

    <div className='trainee_barbell'>
        {newWeightsDict.map(weight => {
            if (weight.numbers > 0){
               for (var i = 1; i <= (weight.numbers)/2; i++) {
                    plate_left.push(<div key = {i + weight.class_name}  className={`plate_trainee ${weight.class_name}`}></div>)
                }
            }
       }
        )}

        {plate_left.reverse()}

        <div className="stoper"></div>
        <div className="dot_parents">
            <div className = 'dot'></div>
        </div>
        <div className="between_plates_trainee"></div>
        <div className="stoper"></div>


        {newWeightsDict.map(weight=> {
            if (weight.numbers !== 0){
               for (var i = 0; i < (weight.numbers)/2; i++) {
                 plate_right.push(<div key = {i + weight.class_name}  className={`plate_trainee ${weight.class_name}`}></div>)
               }
            }
            return
        })}
        {plate_right.slice(1)}
    </div>
)};

