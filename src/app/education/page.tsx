// src/app/education/page.tsx

"use client";

import Image from "next/image";
import React from "react";

// Define CertificationBox as a separate component
const CertificationBox = ({
  imageSrc,
  title,
  institution,
  duration,
}: {
  imageSrc: string;
  title: string;
  institution: string;
  duration: string;
}) => (
  <div className="box">
    <div className="image">
      <Image src={imageSrc} alt={title} width={250} height={250} className="object-cover" />
    </div>
    <div className="content">
      <h3>{title}</h3>
      <p>{institution}</p>
      <h4>{duration}</h4>
    </div>
  </div>
);

export default function Education() {
  return (
    <div>
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
                src="/assets/college.png"
                alt="Bakhtawar Cadet College For Girls"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Intermediate | Pre Engineering</h3>
              <p> Bakhtawar Cadet College For Girls  | Nawabshah</p>
              <h4>2020 - 2022 | Completed</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image
                src="/assets/school.png"
                alt="Metropolitan Acadmey"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Matric | Medical</h3>
              <p> Metropolitan Acadmey | Karachi</p>
              <h4>2018 - 2020 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certification Section */}
      <section className="certification" id="certification">
        <h1 className="heading">
          <i className="fas fa-certificate"></i> My <span>Certification</span>
        </h1>
        <p className="quote">
          Certification is not just a credential; it's a commitment to excellence and a testament to your dedication and expertise in your field.
        </p>

        <div className="box-container">
          <CertificationBox
            imageSrc="/assets/aptech.jpg"
            title="MERN Stack Development"
            institution="Aptech | Karachi"
            duration="6 Months | Completed"
          />
          <CertificationBox
            imageSrc="/assets/pte.jpg"
            title="Web Development"
            institution="PTE Institute | Karachi"
            duration="4 Months | Completed"
          />
          <CertificationBox
            imageSrc="/assets/ns.png"
            title="Social Media Marketing"
            institution="NS Training | Karachi"
            duration="3 Months | Completed"
          />
          <CertificationBox
            imageSrc="/assets/ns.png"
            title="MS-Office"
            institution="NS Training | Karachi"
            duration="3 Months | Completed"
          />
        </div>
      </section>
    </div>
  );
}
