import React from 'react';

// import { Barbell } from '../barbell/barbell.component';

import './function.styles.css';

export const FilteredWeights = (props) => {
  // console.log(props['newWeightsDict'])


  // var newWeightsDict = newWeightsDict
  var newWeights = [];
  var totalWeight = 0;
  var searchField = props.searchField;
  var newWeightsDict = props.newWeightsDict
  // console.log(props)








  if (searchField < 45){
    newWeights.push({ name: '45 LBs Bar', weight: 45, numbers: 0 })


    // for (var key in newWeightsDict['weights'].slice(1)){

  // while (totalWeight <= 0){
      for (var key in newWeightsDict['weights'].slice(1)){

        var weightsWithoutBar = newWeightsDict['weights'].slice(1)[key].weight
        var a = searchField/ weightsWithoutBar
        var plateNums = (newWeightsDict['weights'].slice(1)[key])
        plateNums['numbers'] = Math.floor(a)
        var b = searchField % weightsWithoutBar

        searchField = b

        totalWeight += Math.floor(a)*weightsWithoutBar
        // console.log(totalWeight)

        newWeights.push(plateNums)

      }

    newWeightsDict['searchField'] = props.searchField
    newWeightsDict['weights'] = newWeights
    newWeightsDict['total'] = totalWeight

  } else {
    newWeights.push({ name: '45 LBs Bar', weight: 45, numbers: 1 })
    searchField = searchField - 45


      for (key in newWeightsDict['weights'].slice(1)){
        weightsWithoutBar = newWeightsDict['weights'].slice(1)[key].weight*2
        a = searchField/ weightsWithoutBar
        plateNums = (newWeightsDict['weights'].slice(1)[key])
        plateNums['numbers'] = Math.floor(a)*2
        b = searchField % weightsWithoutBar

        searchField = b

        totalWeight += Math.floor(a)*weightsWithoutBar
        // if(plateNums['numbers'] != 0){
        //   newWeights.push(plateNums)
        // }

        newWeights.push(plateNums)


      }




    newWeightsDict['searchField'] = props.searchField
    newWeightsDict['weights'] = newWeights
    newWeightsDict['total'] = totalWeight + 45

    // console.log(props)



  }



  // return(newWeightsDict['weights']);


  return (

    <div>

        <div className = "total_result">

          <table className = "result_table">
            <tbody>
              <tr>
                <th>Pound</th>
                <th></th>
                <th>Kilogram</th>
              </tr>
              <tr>
                <td className = "total_num">{newWeightsDict.total} BLs</td>
                <td> = </td>
                <td className = "total_num"> {(newWeightsDict.total * 0.453592).toFixed(2)} KG</td>
              </tr>
            </tbody>

          </table>

        </div>
    </div>
  )



}
export const FilteredWeightsResult = ({newWeightsDict}) =>(
    <div>

        <br/>
        <h3>~Weights Detail~</h3>
        <div className = "plates_detail">
          <table className = "plates_table">
            <tbody>
            {newWeightsDict.weights.map(weight=> (
              <tr key = {`'tr' + ${weight.name}`}>
                <th key = {weight.name}>{weight.name} </th>
                <td>×</td>
                <td> {weight.numbers}</td>
              </tr>

              ))}
            </tbody>
          </table>
        </div>




    </div>)
    // <p>{console.log(newWeightsDict.weights[0])}</p>
    // <p>{console.log(newWeightsDict.weights.name)}</p>




