// src/components/Certificates.js

import React, { useState } from 'react';
import './Certificates.css';
import react1 from '../../../assets/img/react_basic certificate.png';
import Software from '../../../assets/img/software_engineer_intern certificate.png';
import React2 from '../../../assets/img/react.jpg';
import Java from '../../../assets/img/java.jpg';
import python from '../../../assets/img/py.jpg';
import web from '../../../assets/img/web.jpg';
import Java2 from '../../../assets/img/java2.png';
import web2 from '../../../assets/img/webdevelopment.png';
import java3 from '../../../assets/img/oop.png';
import css from '../../../assets/img/css.png';
import web3 from '../../../assets/img/pdf1.png';

const Certificates = () => {
  const [showMore, setShowMore] = useState(false);

  const certificates = [
    {
      title: "React Basic Certification",
      description: "HackerRank certification demonstrating fundamental React skills.",
      image: react1,
    },
    {
      title: "Software Engineer Intern Certificate",
      description: "HackerRank certification demonstrates software Engineer intern certificate ",
      image: Software,
    },
    {
      title: "Mastering React Crash Course with Mini Project",
      description: "I am thrilled to announce that I have successfully completed the Mastering React Crash Course with Mini Project on Udemy! ",
      image: React2,
    },
    {
      title: "Java Training Crash Course",
      description: "I am excited to announce that I have successfully completed the Java Training Crash Course on Udemy! ",
      image: Java,
    },
    {
      title: "Web design for beginners",
      description: "I have successfully completed the  Web design for beginners course offered by University of Moratuwa Sri Lanka.",
      image: web,
    },
    {
      title: "python for beginners",
      description: "I have successfully completed the python for beginners course offered by University of Moratuwa.",
      image: python,
    },
    {
      title: "Certificate of Participation ",
      description: "For Participating 5 days workshop of basic java Development",
      image: Java2,
    },
    {
      title: "Data Structures Algorithm DSA | Python+Javascript",
      description: "I am excited to announce that I have successfully completed the Data Structures Algorithm DSA | Python+Javascript on Udemy!",
      image: Java2,
    },
    {
      title: "Full Stack Development Certificate",
      description: "I am curious to announce that I have successfully completed the full stack development certificate for Extraordinary Thinkers(PVT)LTD",
      image: web2,
    },
    {
      title: "OOP In Java Development Certificate",
      description: "I am curious to announce that I have successfully completed the great learning certificate in Java Object Oriented Programming",
      image: java3,
    },
    {
      title: "Front End Development - CSS course!",
      description: "Thrilled to share my successful completion of Great Learning Academy’s Front End Development - CSS course! ",
      image: web3,
    },
    {
      title: "CSS Tutorial Certificate",
      description: "Proud to earn a Great Learning Academy certificate in CSS Tutorial. A step forward in my front-end development journey!",
      image: css,
    },
  ];

  const visibleCertificates = showMore ? certificates : certificates.slice(0, 4);

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="titleName display-4 pb-5 text-center">Certificates</h2>
      <div className="certificates-container">
        {visibleCertificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <button onClick={() => setShowMore(!showMore)} className="show-more-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Certificates;
