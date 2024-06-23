import Image from "../assets/proImage.jpg"

export default function Header() {
  return (
    <>
      <nav className="nav">
        <a href="#home" className="nav__link1 ">
          <img src={Image} alt="" className="nav__link1--img" />{" "}
          <h1 className="nav__link1--name">Dana Zrar</h1>
        </a>

        <a href="#about" className="nav__link2 allLink">
          About
        </a>
        <a href="#project" className="nav__link3 allLink">
          Projects
        </a>
        <a href="#contact" className="nav__link4 allLink">
          Contact
        </a>
      </nav>
    </>
  );
}
