import React from 'react'
function Card({item, action}) {
 

  return (
    <div>
        <div className='boxContainer' style={{ 
            backgroundColor: 'hsl(235, 46%, 20%)'
            
        }}>
            <div className='top'>
                <span className='titleSpan'>{item.title}</span> 
                <span className='dots'>...</span> 
                
            </div>
            <div className='timeDateDiv'>
                    <h1 className='nums'>{action}</h1>
                    
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