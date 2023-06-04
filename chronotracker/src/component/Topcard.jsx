import React from 'react'

function Topcard({ color }) {
  return (
    <div>
        <div className='topIconDiv' style={{
            backgroundColor: color
        }}>
           <img className='iconImg' alt='' src=''></img>
        </div>
    </div>
  )
}

export default Topcard