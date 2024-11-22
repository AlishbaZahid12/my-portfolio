import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section className="home flex flex-wrap items-center justify-center min-h-screen text-center p-8">
        <div className="content">
          <h2 className="text-5xl font-bold text-white">
            Hi There,<br /> I'm Alishba <span className="text-orange-500">Zahid</span>
          </h2>
          <p className="text-2xl text-white mt-4">
          I turn ideas into functional,  <span>stunning websites</span>
          </p>
          <Link
            href="/about"
            className="btn text-white bg-orange-500 hover:bg-orange-600 mt-6 inline-block py-2 px-6 rounded-full"
          >
            <span>About Me</span>
          </Link>
          <div className="socials mt-8">
            <ul className="social-icons flex justify-center gap-4">
              <li>
                <a
                  className="facebook text-white hover:text-blue-500"
                  href="https://www.facebook.com/areeba.naeem"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram text-white hover:text-pink-500"
                  href="https://www.instagram.com/areeba.naeem/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin text-white hover:text-blue-700"
                  href="https://www.linkedin.com/in/areeba-naeem/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="github text-white hover:text-gray-500"
                  href="https://github.com/AlishbaZahid12"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="image">
            <img
              draggable="false"
              className="tilt"
              src="/assets/me11.jpg" // replace with actual path
              alt="Alishba Zahid"
            />
          </div>
          <div className="content">
            <h3>I'm Alishba Zahid</h3>
            <span className="tag">Software Engineer | Web Developer</span>
            <p>
            Hello! I’m Alishba Zahid, a creative and results-driven Web Developer passionate about crafting exceptional digital experiences. With expertise in Frontend Development, React, and WordPress, I specialize in building websites that seamlessly combine stunning visuals with intuitive functionality.
            My dedication to UI/UX design ensures that every project achieves a harmonious balance between form and function, delivering an engaging and user-friendly experience. Whether I’m creating custom WordPress themes, developing interactive components with React, or optimizing website performance, 
            I approach each task with precision and creativity.I belive that a great website is more than just a digital presence; it’s a powerful tool that tells a story, connects with audiences, and drives success. My mission is to turn unique ideas into remarkable digital realities, helping clients 
            establish a strong and lasting online presence.Let’s work together to create something extraordinary!
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span>Age: </span> 21
                </p>
                <p>
                  <span>Phone: </span> +92 308-240-5367
                </p>
              </div>
              <div className="box">
                <p>
                  <span>Email: </span> alishba@work.com
                </p>
                <p>
                  <span>Place: </span> Fb area, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <a
                href="https://profile.indeed.com/p/areeban"
                target="_blank"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h2 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h2>
        <p className="quote">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <Image
                src="/assets/smiu1.jpg"
                alt="Sindh Madressatul Islam University"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Bachelors | Software Engineering</h3>
              <p>Sindh Madressatul Islam University | Karachi</p>
              <h4>2023-2026 | In-process</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image
                 src="/assets/clg3.png"
                alt="Bakhtawar cadet college for girls"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Intermediate | Pre Engineering</h3>
              <p> Bakhtawar Cadet College For Girls | Karachi</p>
              <h4>2020 - 2022 | Completed</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image
                src="/assets/sckl1.jpeg"
                alt="Metropolitan Acadmey"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Matric | Medical</h3>
              <p> Metropolitan Acadmey| Karachi</p>
              <h4>2018 - 2020 | Completed</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
