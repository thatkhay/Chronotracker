import React from 'react'
import Card from '../component/Card'
import Myimg from '../img/image-jeremy.png'

function Mypage() {
  return (
    <div className='container'>
    <div className='biocontainer'>
    <div className='bio' > 
    <img className='img' src={Myimg} alt='bio-img'/> 
    <span className='span'>Report for</span>
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
    <div className='mainBoxContainer'>
   <Card text='23hrs' color='blue' />
   <Card text='50hrs' color='red' />
   <Card text='60hrs' color='violet' />
   <Card text='10hrs' color='green' />
   <Card text='14hrs' color='brown' />
   <Card text='14hrs' color='pink' />
   </div>
    </div>
  )
}

export default Mypage