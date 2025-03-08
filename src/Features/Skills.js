import { useEffect,useState,useRef } from 'react';
import '../Css/Skills.css'

function Skills() {
  const skills = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js']
    },
    {
      name: 'Backend',
      skills: ['PHP', 'Node.js', 'Express.js', 'Django', 'Flask']
    },
    {
      name: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      name: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python']
    },
    {
      name: 'Other Technologies',
      skills: ['Git', 'REST APIs']
    }
];

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
  }, [screenSize]);

  return (
    <div ref={scrollableRef} className='container skills' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className='text-center heading mt-5'>Skills</div>
      <hr style={{
        color: '#000',
        backgroundColor: '#008080',
        height: 5,
        border: 'none',
        margin: '20px 0',
      }}/>
      <div className='row d-flex justify-content-center align-items-stretch mt-5 mb-5'>
        {
          skills.map(i=>{
            return (
              <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-2 col-xxl-2 flex-fill skill-box m-3 p-2'>
                <div className='skill-secction-name text-center m-3'>{i.name}</div>
                <div className='row m-4'>
                  <div className='container-fluid d-flex justify-content-center align-items-center flex-wrap'>
                    {
                      i.skills.map(i =>{
                        return (
                          <div className='skill-name'>{i}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills