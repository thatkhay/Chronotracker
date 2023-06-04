import React from 'react'
import Card from '../component/Card'



function Mypage() {
  return (
    <div className='container'>
    <div className='biocontainer'>
    <div className='bio' > 
    <img alt=''/> 
    <span>Report for</span>
    <h1>Jeremy Robson</h1>
    </div>
    <div className='list'>
      <ul>
        <li className='daily'>daily</li>
        <li className='weekly'>weekly</li>
        <li className='monthly'>monthly</li>
      </ul>
    </div>
    </div>
   <Card text='23hrs' color='blue' />
   <Card text='50hrs' color='red' />
   <Card text='60hrs' color='violet' />
   <Card text='10hrs' color='green' />
   <Card text='14hrs' color='brown' />
    </div>
  )
}

export default Mypage