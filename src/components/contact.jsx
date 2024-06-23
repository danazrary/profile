import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="contact__h2">Contact With Me</h2>
        <div className="contact__div">
          <a href="https://www.facebook.com/Kwa.KwraKwrdaka/">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/dana-zrar-230b172a0/">
            <IoLogoLinkedin />
          </a>
          <a href="https://github.com/danazrary">
            <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
}
