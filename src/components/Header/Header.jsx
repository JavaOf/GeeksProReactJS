import React, { useState } from 'react';
import './header.scss';
import img1 from './img/Vector.svg'; 
import img2 from './img/ic_sharp-log-in.svg'; 
import img3 from './img/bx_bx-cart.svg'; 
import img4 from './img/gridicons_search.svg'; 

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isValidationOpen, setIsValidationOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', loginEmail: '', loginPassword: '' });
  const [errors, setErrors] = useState({ email: '', password: '', loginEmail: '', loginPassword: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleValidation = () => {
    setIsValidationOpen(!isValidationOpen);
    setIsLoginMode(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    e.preventDefault();
    let emailError = '';
    let passwordError = '';

    if (!isLoginMode) {
      if (!formData.email) {
        emailError = 'Email не может быть пустым';
      }
      if (!formData.password) {
        passwordError = 'Пароль не может быть пустым';
      }
    } else {
      if (!formData.loginEmail) {
        emailError = 'Email не может быть пустым';
      }
      if (!formData.loginPassword) {
        passwordError = 'Пароль не может быть пустым';
      }
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError, loginEmail: emailError, loginPassword: passwordError });
      setSuccessMessage('');
    } else {
      setErrors({ email: '', password: '', loginEmail: '', loginPassword: '' });
      setSuccessMessage(isLoginMode ? 'Успешно вошли!' : 'Успешно зарегистрировано!');
      setFormData({ email: '', password: '', loginEmail: '', loginPassword: '' });
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div>
      <header>
        <div className="header-item1">
          <img src={img1} alt="" className='header-item1-img1' />
          <span className='span'>8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00</span>
        </div>
        <div className="header-item2" onClick={toggleValidation}>
          <img src={img2} alt="" className='header-item2-img1' />
          <div className='header-item2-div1'>
            Войти / Регистрация
          </div>
        </div>
      </header>
      <div className="header">
        <h2 className='header-item3-font'>PORTEN</h2>
        <div className="header-item4">
          <a href="#">Понравилось</a>
          <a href="#">Личный кабинет</a>
          <a href="#">Настройки</a>
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <button className="burger-menu" onClick={togglePopup}>
          ☰
        </button>
      </div>
      {isPopupOpen && (
        <div className="overlay show">
          <div className="burger-popup">
            <h2 onClick={togglePopup}>Меню</h2>
            <div className="nav-links">
              <a href="#">Понравилось</a>
              <a href="#">Личный кабинет</a>
              <a href="#">Настройки</a>
            </div>
          </div>
        </div>
      )}
      {isValidationOpen && (
        <div className="overlay2 show">
          <div className="validation-popup">
            <span className="close-btn" onClick={toggleValidation}>×</span>
            <h2>{isLoginMode ? 'Вход' : 'Регистрация'}</h2>
            <form onSubmit={handleValidation}>
              {!isLoginMode && (
                <>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                  </div>
                </>
              )}
              {isLoginMode && (
                <>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="loginEmail" value={formData.loginEmail} onChange={handleChange} />
                    {errors.loginEmail && <div className="error-message">{errors.loginEmail}</div>}
                  </div>
                  <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleChange} />
                    {errors.loginPassword && <div className="error-message">{errors.loginPassword}</div>}
                  </div>
                </>
              )}
              <button type="submit">{isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
              <button type="button" onClick={toggleMode}>
                {isLoginMode ? 'Перейти к регистрации' : 'Перейти к входу'}
              </button>
              {successMessage && <div className="success-message">{successMessage}</div>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
