import React from 'react'
import image5 from './img/Rectangle 2.png'
export default function Section5() {
  return (
    <div>
        <div className="parent-section5">
        <div className="section5-item">
              <h2>новые поступления</h2>
              <div className='hr4'></div>
            </div>
            <div className="disp">
                <img src={image5} alt="" />
                <img src={image5} alt="" />
                <img src={image5} alt="" />
                <img src={image5} alt="" />
            </div>
        </div>
    </div>
  )
}
