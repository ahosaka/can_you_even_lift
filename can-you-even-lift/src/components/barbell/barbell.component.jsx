import React from 'react';
// import { render } from 'react-dom';
// import { FilteredWeights } from '../function/function.component';

import './barbell.styles.css';

export const Barbell = props => {
    // console.log(props.newWeightsDict)

    var newWeightsDict = props.newWeightsDict.weights
    var plate_left = [];
    var plate_right = [];


    return(

    <div className='barbell'>

        {newWeightsDict.map(weight => {

            if (weight.numbers > 0){

               for (var i = 1; i <= (weight.numbers)/2; i++) {
                    // console.log(weight.name, (weight.numbers)/2)

                    plate_left.push(<div key = {i + weight.class_name}  className={`plate ${weight.class_name}`}></div>)
                }
            }


       }
        )
        }


        {plate_left.reverse()}
        <div className="bar_end bar_end_left"></div>

        <div className="stoper"></div>
        <div className="bar">
            <div className="grip"></div>
            <div className="between_grips"></div>
            <div className="grip"></div>
        </div>
        <div className="between_plates"></div>
        <div className="stoper"></div>
        <div className="bar_end bar_end_right"></div>
        <div className = "bench">
            <div className = "bench bench_left"></div>
            <div className = "bench bench_top"></div>
            <div className = "bench bench_center"></div>
            <div className = "bench bench_seat"></div>
            <div className = "bench bench_bottom"></div>
            <div className = "bench bench_right"></div>
            <div className = "joint joint_center"></div>
            <div className = "joint joint_left"></div>
            <div className = "joint joint_right"></div>
            <div className = "rack rack_left"></div>
            <div className = "rack rack_right"></div>
            <div className = "bench_foot foot_center"></div>
            <div className = "bench_foot foot_left"></div>
            <div className = "bench_foot foot_right"></div>





        </div>


        {newWeightsDict.map(weight=> {
            if (weight.numbers !== 0){
               for (var i = 0; i < (weight.numbers)/2; i++) {
                 plate_right.push(<div key = {i + weight.class_name}  className={`plate ${weight.class_name}`}></div>)
               }
            }

            return

        }




        )}
        {plate_right.slice(1)}




    </div>
)};


        // <div className="plate plate_2_5"></div>
        // <div className="plate plate_5"></div>
        // <div className="plate plate_10"></div>
        // <div className="plate plate_25"></div>
        // <div className="plate plate_35"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="stoper"></div>
        // <div className="bar">
        //     <div className="grip"></div>
        //     <div className="between_grips"></div>
        //     <div className="grip"></div>
        // </div>
        // <div className="between_plates"></div>
        // <div className="stoper"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_45"></div>
        // <div className="plate plate_35"></div>
        // <div className="plate plate_25"></div>
        // <div className="plate plate_10"></div>
        // <div className="plate plate_5"></div>
        // <div className="plate plate_2_5"></div>
