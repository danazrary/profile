import Image from "../assets/img2.jpg";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about__div">
          <div className="about__div--text">
            <h2 className="about__div--text-h2">About Me</h2>
            <p className="about__div--text-p">
              Hey! I'm Dana Zrar, a full stack developer with a keen interest in
              creating engaging and efficient web applications. My journey into
              web development started in 2023 through Udemy courses, and since
              then, I've specialized in using React and SCSS for frontend
              development and Express.js for backend solutions. I love tackling
              complex problems and transforming them into elegant, user-centric
              solutions. When I'm not coding, I enjoy exploring new technologies
              and enhancing my skills.
            </p>
          </div>
          <img src={Image} alt="" className="about__div--img" />
          <div className="about__div--skills">
            <h2 className="about__div--skills-h2">My Skills</h2>
            <ul className="about__div--skills-ul">
              <li className="about__div--skills-ul-li">REACT.JS</li>
              <li className="about__div--skills-ul-li">CSS</li>
              <li className="about__div--skills-ul-li">EXPRESS.JS</li>
              <li className="about__div--skills-ul-li">GITHUB</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
