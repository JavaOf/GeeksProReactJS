import React from 'react'
import image1 from './img/62050 1.png'

export default function Section2() {
  return (
    <div className="div">
    <div className="parent-section2">
      <div className="section-items">
        <h2 className="season-title">СЕЗОН 2020/21</h2> 
        <div className="parent-items">
          <div className="items2">
            <img src={image1} className='img' alt="" />
          </div>
          <div className="items3">
            <h3>Louis XVI ATHOS</h3>
            <b>165 000 руб.</b>
          </div>
        </div>
        
        <div className="parent-items3">
          <div className="items2">
            <img src={image1} className='img' alt="" />
          </div>
          <div className="items3">
            <h3>Louis XVI ATHOS</h3>
            <b>165 000 руб.</b>
          </div>
        </div>
        
        <div className="parent-items1">
          <div className="items2">
            <img src={image1} className='img' alt="" />
          </div>
          <div className="items3">
            <h3>Louis XVI ATHOS</h3>
            <b>165 000 руб.</b>
          </div>
        </div>
      </div>
      <div className="section-items2">
        <h2 className='season-title2' >Новая коллекция</h2>
         <div className='hr'></div>
         <button className='btn1'>Каталог</button>
      </div>
    </div>
  </div>
  
  

  )
}
