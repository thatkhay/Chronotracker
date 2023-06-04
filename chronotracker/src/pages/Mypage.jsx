import React from 'react'
import Card from '../component/Card'
import Myimg from '../img/image-jeremy.png'
import Topcard from '../component/Topcard'
import Workicon from '../img/icon-work.svg'

function Mypage() {
  return (
    <div className='container'>
    <div className='biocontainer'>
    <div className='bio' > 
    <img className='img' src={Myimg} alt='bio-img'/> 
    <span className='span'>Report for</span>
    <h1 className='name'>Jeremy Robson</h1>
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
    <div className='innerBox'>
    <Topcard color='hsl(15, 100%, 70%)' />
   <Card  text='32hrs' color='blue' />
   </div>
   <div className='innerBox'>
    <Topcard color='hsl(195, 74%, 62%)' src={Workicon} />
   <Card text='10hrs' color='red' />
   </div>
   <div className='innerBox'>
    <Topcard color='hsl(348, 100%, 68%)' />
   <Card text='4hrs' color='violet' />
   </div>
   <div className='innerBox' >
    <Topcard color='hsl(145, 58%, 55%)' />
   <Card text='4hrs' color='green' />
   </div>
   <div className='innerBox'>
    <Topcard color='hsl(264, 64%, 52%)' />
   <Card text='5hrs' color='brown' />
   </div>
   <div className='innerBox'>
    <Topcard color='hsl(43, 84%, 65%)' />
   <Card text='2hrs' color='pink' />
  </div>
   </div>
    </div>
  )
}

export default Mypage