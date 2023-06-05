import React from 'react'
function Card({text}) {
 

  return (
    <div>
        <div className='boxContainer' style={{ 
            backgroundColor: 'hsl(235, 46%, 20%)'
            
        }}>
            <div className='top'>
                <span className='titleSpan'>work</span> 
                <span className='dots'>...</span> 
                
            </div>
            <div className='timeDateDiv'>
                    <h1 className='nums'>{text}</h1>
                    
                </div>
            <div className='lastSpanDiv'>
                  <span className='bottomTimeSpan'>Last week</span>
                  <span className='bottomTimeSpan'>-</span>
                    <span className='bottomTimeSpan'>4hrs</span>
                </div>
        </div>
    </div>
  )
}

export default Card