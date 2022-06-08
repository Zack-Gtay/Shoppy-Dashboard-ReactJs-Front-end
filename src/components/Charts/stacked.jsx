import React from 'react'
import {AxisModel,Category,ChartComponent,Inject, Legend, Tooltip,SeriesCollectionDirective, SeriesDirective, StackingColumnSeries} from'@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
const stacked = ({width, height}) => {
  return (
    <ChartComponent 
      height={height}
      width={width}
      id="chart"
      
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{enable: true}}
      legendSettings={{background: 'white'}}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
         {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)} 
        {/* <SeriesDirective  {...stackedCustomSeries[0]}/>
        <SeriesDirective {...stackedCustomSeries[1]}/> */}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default stacked