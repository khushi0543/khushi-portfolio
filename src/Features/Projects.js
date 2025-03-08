import { useEffect,useState,useRef } from 'react';
import '../Css/Projects.css'

function Projects() {
  const projects = [
    // {name:'IOS Application',link:'https://github.com/Group3RepairMate/RepairMate',img:'ios-featured.png'},
    // {name:'MERN Application',link:'   ',img:'mern-1.png'},
    {name:'My Portfolio',link:'https://github.com/harshil3662/AccessHarshil.git',img:'portfolio.png'},
    {name:'Online gift Shop',link:'https://github.com/khushi0543/Online-Gift-shop',img:'giftshop.png'},
    // {name:'Crypto Wallet',link:'https://github.com/harshil3662/crypto-wallet.git',img:'wallet.png'},
    // {name:'Docker & Kubernetes',link:'https://github.com/harshil3662/building-scalable-app.git',img:'dk.png'},
    // {name:'Hands-On DevOps',link:'https://github.com/harshil3662/devops.git',img:'devops.png'}
  ]
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
    <div ref={scrollableRef} className='container projects' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className='text-center heading mt-5'>Projects</div>
      <hr style={{
        color: '#000',
        backgroundColor: '#008080',
        height: 5,
        border: 'none',
        margin: '20px 0',
      }}/>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='container d-inline-flex justify-content-center align-items-center flex-wrap'>
          {
            projects.map(i=>{
              return (
                <a href={i.link} className='project m-3 p-3'>
                  <div className='image-box'>
                    <img src={i.img} className='img' alt="..."/>
                  </div>
                  <div className='mt-3 text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center text-center'>
                    <div className='project-name'>{i.name}</div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects