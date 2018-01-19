//This is a reusable component
//We don't need to make use of the application state or component state, so we can make this a functional component

import React from 'react';
//import lodash library
import _ from 'lodash';
//imports graphing library
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
//Helper function used to calculate the average.
function average(data) {
  //use lodash methods to round to a whole number and to sum the values over the array
  return _.round(_.sum(data)/data.length);
}

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        {/*Creates the average line through the graph*/}
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      {/*Puts the average below the chart. Calls a helper function to calculate average*/}
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
