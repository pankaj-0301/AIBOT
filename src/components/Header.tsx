import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-left">
      <img src="/mootmasterlogo.png" alt="MootMaster Logo" className="logo" />
      <h2 className="header-title">MootMaster</h2>
       
      </div>
      <div className="header-right">
        <div className="header-links">
          <a href="#">Courses</a>
          <a href="#">Resources</a>
          <a href="#">Community</a>
          <a href="#">Events</a>
          <a href="#">Research</a>
        </div>
        <div className="header-buttons">
          <button className="header-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </button>
          <button className="header-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40h80a8,8,0,0,1,0,16H48V208H200V128a8,8,0,0,1,16,0Zm16-68a36,36,0,1,1-36-36A36,36,0,0,1,232,60Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,216,60Z" />
            </svg>
          </button>
        </div>
        <div
          className="header-avatar"
          style={{
            backgroundImage:
              'url("")',
              //https://cdn.usegalileo.ai/stability/09f346db-7bcd-4cfd-b7ad-9319cdef7fee.png
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
