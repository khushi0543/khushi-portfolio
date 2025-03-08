import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Bar({style}) {

  const [selection,setSelection] = useState(0)
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(height)
      setScreenSize(width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectionHandler = (i) => {
    setSelection(i)
  }

  return (
    <div className={screenSize < 992 ? 'd-block d-sm-block d-md-block d-lg-none' : 'overflow-hidden'}>
      <div className='row bar position-relative ms-xxl-3 ms-xl-3 ms-lg-3 ms-md-3 ms-sm-0 ms-0 me-xxl-3 me-xl-3 me-lg-3 me-md-3 me-sm-0 me-0 p-2' style={screenSize < 992 ? {right:'0px'} : style}>
        <Link to={"/"} className={`col p-1 route ${selection === 1 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(1)}}>
          <div className='mx-2 my-1'>Home</div>
        </Link>
        <Link to={"/about"} className={`col p-1 route ${selection === 2 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(2)}}>
          <div className='mx-2 my-1'>About</div>
        </Link>
        <Link to={"/skills"} className={`col p-1 route ${selection === 3 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(3)}}>
          <div className='mx-2 my-1'>Skills</div>
        </Link>
        <Link to={"/projects"} className={`col p-1 route ${selection === 4 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(4)}}>
          <div className='mx-2 my-1'>Projects</div>
        </Link>
        <Link to={"/contact"} className={`col p-1 route ${selection === 5 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(5)}}>
          <div className='mx-2 my-1'>Contact</div>
        </Link>
      </div>
    </div>
  )
}

function Navbar() {

  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});

  const toggleVisibility = () => {
    if (isVisible) {
      setStyle({ right: '-450px', transition: 'right 0.5s ease-in' });
    } else {
      setStyle({ right: '0px', transition: 'right 0.5s ease-out' });
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className="hv-nav border-0 sticky-top">
      <div className='navbar'>
        <div className='container-fluid d-flex justify-content-center align-items-center p-1'>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-10 col-sm-10 col-10 d-flex justify-content-xxl-start justify-content-xl-start 
          justify-content-lg-start justify-content-md-center center-content-sm-center justify-content-center align-items-center'>
            <Link className='logo m-2 ps-4 pe-4 pt-1 pb-1' to={"/"}>
              <div className='name'>
                Khushi
              </div>
            </Link>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-11 col-12 d-flex justify-content-xxl-end justify-content-xl-end 
          justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center align-items-center'>
            <Bar style={style}/>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
              <button className='toggle-btn' onClick={toggleVisibility}>
                {isVisible ? <i className="bi bi-x fs-1"></i> : <i className='bi bi-filter-left fs-1'></i>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar