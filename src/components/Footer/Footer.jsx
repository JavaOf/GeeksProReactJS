import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
      <footer>
         <div className="footer-parent">
          <div className="footer2">
             <h2>О магазине</h2>
             <div className="par1">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
             </div>
          </div>
          <div className="footer1">
            <h2>Категории</h2>
            <div className="paren2">
            <a className='a1' href="#">часы</a>
            <a className='a2' href="#">браслеты</a>
            <a className='a3' href="#">ремни</a>
            </div>
            <div className="paren1">
               <a className='a4' href="#">ювелирные изделия</a>
               <a className='a5' href="#">запонки</a>
            </div>
            </div>
            <div className="footer2">
            <h2>Рассылка</h2>
            <div className="par">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>

            </div>
            </div>
         </div>
      </footer>
      <div className='footer'>
         <h3>© 2020 Все права защищены</h3>
         <h3>Сделано Figma.info</h3>
      </div>
    </div>
  )
}
