import "../Css/About.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function About() {
  const [screenSize, setScreenSize] = useState("");
  const scrollableRef = useRef(null);
  const [divSize, setDivSize] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      const height = window.innerHeight;
      setScreenSize(height);
    };

    const { clientHeight } = scrollableRef.current;
    setDivSize(clientHeight);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={scrollableRef}
      class="container about"
      style={
        divSize >= screenSize
          ? { height: "fit-content" }
          : { height: screenSize }
      }
    >
      <div className="mt-5 heading d-flex justify-content-center align-items-center">
        About Me
      </div>
      <hr
        style={{
          color: "#000",
          backgroundColor: "#008080",
          height: 5,
          border: "none",
          margin: "20px 0",
        }}
      />
      <div className="col">
        <div className="row p-xxl-5 p-xl-4 p-lg-3 p-md-2 p-sm-1 p-2">
          <div className="p-2 head d-flex justify-content-center align-items-center">
            Intoduction
          </div>
          <div className="row">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="box">
                <div className="lines ps-4 pt-1">
                  I'm Khushi Mangukiya, a seasoned web developer with over 2 to
                  3 years of professional with hands on experience specializing
                  in designing and developing websites and web applications for
                  diverse purposes. Throughout my career, I've honed my skills
                  in various web development technologies, including React.js,
                  Node.js, and more. My expertise lies in crafting innovative
                  digital solutions that not only meet but exceed client
                  expectations. I'm dedicated to staying updated with the latest
                  trends and technologies in the field to deliver cutting-edge
                  projects. Take a look on my tech skills{" "}
                  <Link className="links" to={"/skills"}>
                    here
                  </Link>
                  .<br />
                  <br />
                  I'm a graduate of Smt. Tanuben & Dr. Manubhai Trivedi College
                  of Information Science in Surat, where I honed my web
                  development skills and brought my vision to life by creating
                  websites. Through self-learning and formal education, I've
                  acquired a diverse skill set. Leveraging these skills, I've
                  developed numerous projects showcasing my expertise in web
                  development. Explore my projects to see my work in action.{" "}
                  <Link className="links" to={"/projects"}>
                    here
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row p-xxl-5 p-xl-4 p-lg-3 p-md-2 p-sm-1 p-2 mt-xxl-5 mt-xl-5 mt-lg-4 mt-md-3 mt-lg-2 mt-sm-1 mt-0">
          <div className="p-2 head d-flex justify-content-center align-items-center">
            Experience
          </div>
          <div className="row">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="box">
                <div className="ps-4 pt-1">
                  <div className="mb-2">
                    <span className="company-name">
                      Python Developer @Software Lab
                    </span>
                    <br />
                    <span className="timeline">Jun 2021 - Apr 2022</span>
                  </div>
                  <div className="lines">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row mt-3">
          <div className="container d-flex justify-content-center align-items-center">
            <a
              className="portfolio-btn ps-3 pe-3 p-xxl-3 p-xl-3 p-lg-2 p-md-3 p-sm-2 p-2"
              href="https://drive.google.com/file/d/1E2hLM1Hj8PYJreRihq6zN3vyX-6wdM2v/view?usp=sharingk"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
