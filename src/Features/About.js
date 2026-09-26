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
                 I'm Khushi Mangukiya, an aspiring web developer with a strong
foundation in designing and developing websites and web
applications. I hold a Bachelor's degree in Computer Applications
(BCA) and am currently pursuing my Master's in Computer
Applications (MCA), currently in my 2nd year, from Shree Swami
Atmanand Saraswati Institute of Technology (SSASIT). Over the
course of my academic journey, I've developed a solid skill set
in modern web technologies, including React.js, Node.js, and
more. I'm committed to continuously learning and staying updated
with the latest industry trends to build efficient and
user-friendly digital solutions. Take a look at my tech skills.{" "}
                  <Link className="links" to={"/skills"}>
                    here
                  </Link>
                  .<br />
                  <br />
               I believe in learning by building — every project I take up is an
opportunity to solve real problems and sharpen my skills further.
Alongside web development, I've also been exploring Artificial
Intelligence, learning how AI tools and technologies can be
integrated into modern applications to make them smarter and more
efficient. I'm always exploring new tools and frameworks to keep
improving as a developer. Explore my projects to see my work in
action.{" "}
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
              href="https://drive.google.com/file/d/10WQepODlFp-9chgEbzx-FVYkE1jlKzjC/view?usp=sharing"
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
