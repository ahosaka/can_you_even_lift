import React, {Component} from 'react';
// import {WeightList} from './components/weight-list/weight-list.component'
import {FilteredWeights} from './components/function/function.component'
import {FilteredWeightsResult} from './components/function/function.component'
// import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
// import {Card} from './components/card/card.component'
import {SearchBox} from './components/search-box/search-box.component'
import {Barbell} from './components/barbell/barbell.component'

import logo from './logo.svg';
import './App.css';
import 'react-input-range/lib/css/index.css'


class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 225 ,
      searchField: 225,
      weights: [
        {
          name: '45 LBs Bar',
          weight: 45,
          numbers: 1,
          class_name: 'bar'
        },
        {
          name: '45 LBs Plate',
          weight: 45,
          numbers: 4,
          class_name: 'plate_45'
        },
        {
          name: '35 LBs Plate',
          weight: 35,
          numbers: 0,
          class_name: 'plate_35'
        },
        {
          name: '25 LBs Plate',
          weight: 25,
          numbers: 0,
          class_name: 'plate_25'
        },
        {
          name: '10 LBs Plate',
          weight: 10,
          numbers: 0,
          class_name: 'plate_10'
        },
        {
          name: '5 LBs Plate',
          weight: 5,
          numbers: 0,
          class_name: 'plate_5'
        },
        {
          name: '2.5 LBs Plate',
          weight: 2.5,
          numbers: 0,
          class_name: 'plate_2_5'
        }
        // {
        //   name: '1.25 LBs Plate',
        //   weight: 1.25,
        //   numbers: 0
        // }
      ],
      total:225
    };
  }


  render(){
    // const { plates, searchField } = this.state;
    // const filteredPlates = {FilteredWeights}
    // //   )



    return (
      <div className="App">
        <header className="App-header">
        <h1>Can you even lift?</h1>
        <h4 className = "sub_title">Convert Pound to Weight Lifting Plates</h4>
        <FilteredWeights
            searchField = {this.state.value}
            newWeightsDict = {this.state}
          />


          <div className="form">

            <InputRange
              className = "InputRange"
              formatLabel={value => `${value}LBs`}
              step={5}
              maxValue={1000}
              minValue={45}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />


          </div>





          <Barbell newWeightsDict = {this.state}/>

          <FilteredWeightsResult newWeightsDict = {this.state}/>




        </header>
        <br/>
          <footer>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Created by: Atsushi Hosaka with ReactJS</p>
            <p>Contact information: <a href="https://github.com/ahosaka">
            https://github.com/ahosaka</a>.</p>
          </footer>

      </div>

    );
  }
}




export default App;



            // <SearchBox
            //   placeholder = 'Type Your Max'
            //   handleChange = {e =>this.setState({ value: e.target.value},() => console.log(this.state.weights))}
            //   changingValue = {this.state.value}
            //   />



            // <WeightList weights = {FilteredWeights}>
            // </WeightList>

// export default HorizontalCustomLabels

