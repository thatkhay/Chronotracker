import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import Myimg from '../img/image-jeremy.png'
import Topcard from '../component/Topcard'
import Workicon from '../img/icon-work.svg'
import Data from '../component/data.json'

function Mypage() {
  const [action, setAction] = useState('')
const [data, setData] = useState([])
useEffect(() => {
  const colors = ['hsl(15, 100%, 70%)','hsl(195, 74%, 62%)','hsl(348, 100%, 68%)','hsl(145, 58%, 55%)','hsl(264, 64%, 52%)','hsl(43, 84%, 65%)']
  const newData = colors.map((item) => {

    data.map((color) => item.color = color)
  return item
  }) 
  setData(newData)
}, [])

const handleClick = (e) => {
setAction(e.target.innerText);
console.log(data);
}
console.log(action);
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
        <li className='daily' onClick={handleClick}>daily</li>
        <li className='weekly' onClick={handleClick}>weekly</li>
        <li className='monthly' onClick={handleClick}>monthly</li>
      </ul>
    </div>
    </div>
    <div className='mainBoxContainer'>
    
  {
    data.map ((item, id) =>(
      <div key={id} className='innerBox'>
    <Topcard color={item.color} />
   <Card  item={item}  action={action} />
   </div>
    )) 
  }
   </div>
    </div>
  )
}

export default Mypage