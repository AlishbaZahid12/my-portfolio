import Image from "next/image";
import React from "react";

export default function About() {
  return (
    // About Section
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <Image
            draggable="false"
            className="tilt"
            src="/assets/me11.jpg" // replace with actual path in your public folder
            alt="Areeba Naeem"
            width={250}
            height={250} // Adjust width and height as needed
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
                <span>Email: </span> alishbawork@gmail.com
              </p>
              <p>
                <span>Place: </span> Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer" // Added for security with target="_blank"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
