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
   <Card text='32hrs' color='blue' />
   <Card text='10hrs' color='red' />
   <Card text='4hrs' color='violet' />
   <Card text='4hrs' color='green' />
   <Card text='5hrs' color='brown' />
   <Card text='2hrs' color='pink' />
   </div>
    </div>
  )
}

export default Mypage