import { Link } from "react-router-dom"
import { useState,useEffect,useRef } from "react"
import '../Css/Home.css'

function Home() {
  const [screenSize, setScreenSize] = useState('');
  const scrollableRef = useRef(null);
  const [divSize, setDivSize] = useState();

  useEffect(() => {
    window.scrollTo(0,0)
    const handleResize = () => {
      const height = window.innerHeight;
      setScreenSize(height);
    };

    const { clientHeight } = scrollableRef.current;
    setDivSize(clientHeight)

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={scrollableRef} className='container home mt-5' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className="col-12">
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-2 order-sm-2 order-xs-2 order-md-2
          order-lg-1 order-xl-1 order-xxl-1 d-flex justify-content-center justify-content-sm-center'>
            <div className="m-5 col1">
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-3 m-sm-2 m-1 hv-home-col1-div1 text-center text-sm-center text-md-center
               text-lg-center text-xl-start fw-normal'>Hello! I'm<br/><label className='my-full-name'>Khushi Mangukiya.</label>
              </div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 row hv-home-col1-div2 text-center text-sm-center text-md-center
               text-lg-center text-xl-start'>I am a web application & MERN stack developer. I'm here to innovate web development
                turning ideas into creative and real solutions.
              </div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 d-flex justify-content-center justify-content-sm-center
               justify-content-md-center justify-content-lg-center justify-content-xl-start align-items-center'>
                <Link to={"/about"}>
                  <button className='portfolio-btn ps-3 pe-3 p-xxl-3 p-xl-3 p-lg-2 p-md-3 p-sm-2 p-2'>About Me</button>
                </Link>
              </div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 d-flex justify-content-center justify-content-sm-center 
                justify-content-md-center justify-content-lg-center justify-content-xl-start align-items-center'>
                  <div className='row social-networks d-flex justify-content-center align-items-center'>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://github.com/khushi0543/' className="icons"> 
                            <i class="bi bi-github fs-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.linkedin.com/in/khushi-mangukiya/' className="icons">
                            <i className="bi bi-linkedin fs-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.instagram.com/khushi__393/' className="icons">
                            <i className="bi bi-instagram fs-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
         <div 
  className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 
  d-flex justify-content-center align-items-center order-1 order-sm-1 
  order-xs-1 order-md-1 order-lg-3 order-xl-3 order-xxl-3"
>
  <div 
    className="row" 
    style={{ 
      width: "340px", 
      height: "340px", 
      borderRadius: "50%", 
      overflow: "hidden", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" 
    }}
  >
    <img 
      src="khushi.jpg" 
      alt="avatar" 
      style={{ 
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        borderRadius: "50%" 
      }} 
    />
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Home