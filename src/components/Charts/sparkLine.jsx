import React from 'react'
import {Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
const sparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent 
    id={id} 
    height={height}
    width={width} 
    dataSource={data} 
    xName='xval' 
    yName='yval'
    valueType='Numeric'
    type='Line'
    lineWidth={1}
    fill={color}
    border={{color: currentColor, width: 2}}
    tooltipSettings={{
      visible: true,
      format: '${xval} : data ${yval}',
      trackLineSettings:{
        visible: true
      }
    }}
    >

    <Inject services={[SparklineTooltip]}/> 
    </SparklineComponent>
  )
}

export default sparkLine