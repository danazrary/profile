import pro1 from "../assets/auth.png";
export default function Projects() {
  return (
    <>
      <section className="project" id="project">
        <div className="project__div">
          <h2 className="project__div--h2">My Projects</h2>
          <ul className="project__div--ul">
            <li className="project__div--ul-li">
              <a href="https://github.com/danazrary/FullStackAuth">
                <img
                  src={pro1}
                  alt="first project image"
                  className="project__div--ul-li--img"
                />
                <h2 className="project__div--ul-li--h2">
                  Authentication System
                </h2>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
