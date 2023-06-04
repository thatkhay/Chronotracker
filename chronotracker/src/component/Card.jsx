import React from 'react'

function Card({text, color}) {
  return (
    <div>
        <div className='boxContainer' style={{ 
            backgroundColor: color
            
        }}>
            <div className='top'>
                <span className='titleSpan'>work</span> 
                <span className='dots'>...</span> 
                
            </div>
            <div className='timeDateDiv'>
                    <h1 className='nums'>{text}</h1>
                    <span className='bottomTimeSpan'></span>
                </div>
        </div>
    </div>
  )
}

export default Card