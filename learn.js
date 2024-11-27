/*
import React, { useState, useEffect } from "react";
import "../styles/learn.css";

const Learn = () => {
  const cases = [
    {
      category: "Environmental Violations",
      cases: [
        {
          title: "Illegal dumping of hazardous waste",
          description: "Dumping waste in non-designated areas that harms the environment.",
          howToIdentify: "Look for signs of waste in open or water areas.",
          stepsToTake: [
            "Report to local environmental authorities.",
            "Gather photographic evidence if safe.",
            "Avoid contact with the waste.",
          ],
          images: ["/illegalDump01.jpg", "/illegalDump02.jpg", "/illegalDump03.jpg"],
        },
        {
          title: "Deforestation without permission",
          description: "Cutting down trees without legal approval.",
          howToIdentify: "Notice large clearings in forested areas or missing wildlife.",
          stepsToTake: [
            "Contact forest department officials.",
            "Raise awareness in local communities.",
          ],
          images: ["/deforstation01.jpg", "/deforstation02.jpg", "/deforestation03.jpg"],
        },
        {
          title: "Violation of wildlife protection laws",
          description: "Hunting, capturing, or harming protected species.",
          howToIdentify: "Reports of poaching, missing animals, or suspicious activity in wildlife areas.",
          stepsToTake: [
            "Inform local wildlife authorities.",
            "Avoid confrontation with poachers.",
            "Spread awareness about the importance of wildlife protection.",
          ],
          images: ["/WildlifeCrime01.jpeg"],
        },
        {
          title: "Unauthorized mining activities",
          description: "Mining without legal permits, causing environmental degradation.",
          howToIdentify: "Large-scale excavation or mining activities in non-designated areas.",
          stepsToTake: [
            "Report to mining or environmental authorities.",
            "Document the location and activity.",
          ],
          images: ["/mining01.jpg"],
        },
      ],
    },
    {
      category: "Intellectual Property Theft",
      cases: [
        {
          title: "Plagiarism of copyrighted works",
          description: "Using someone else's work without proper credit or permission.",
          howToIdentify: "Check for duplicate or uncredited works.",
          stepsToTake: [
            "Inform the copyright owner.",
            "Report to relevant legal authorities or platforms.",
          ],
          images: ["/ipt001.jpeg"],
        },
        {
          title: "Unauthorized use of trademarks",
          description: "Using a trademarked logo or name without permission.",
          howToIdentify: "Look for logos or names resembling registered trademarks.",
          stepsToTake: [
            "Report to trademark authorities.",
            "Notify the trademark owner.",
          ],
          images: ["/tm01.jpg", "/tm02.jpg"],
        },
      ],
    },
    {
      category: "Other Violations",
      cases: [
        
        {
          title: "Counterfeiting",
          description: "Producing fake currency or goods.",
          howToIdentify: "Identify unusual markings on currency or goods that appear counterfeit.",
          stepsToTake: [
            "Inform local authorities or regulatory agencies.",
            "Avoid distributing counterfeit items.",
          ],
          images: ["/cf01.png","/cf02.jpg","/cf03.jpg"],
        },
        {
          title: "Rioting",
          description: "Participation in violent public disturbances.",
          howToIdentify: "Look for large groups engaged in violent or destructive activities.",
          stepsToTake: [
            "Stay away from the affected area.",
            "Alert law enforcement immediately.",
          ],
          images: ["/riot01.jfif","/riot02.jfif"],
        },
        {
          title: "Bigamy/Polygamy",
          description: "Marrying more than one person simultaneously.",
          howToIdentify: "Check for conflicting marriage records or reports.",
          stepsToTake: [
            "Report to the legal authorities.",
            "Consult family law specialists for further steps.",
          ],
          images: ["/bi03.jfif","/bi02.jfif","/bi01.jfif"],
        },
        {
          title: "Smuggling",
          description: "Illegal transportation of goods or people.",
          howToIdentify: "Look for unmarked vehicles or suspicious border activities.",
          stepsToTake: [
            "Inform customs or border patrol.",
            "Avoid intervening directly and prioritize safety.",
          ],
          images: ["/smuggle03.jfif","/smuggle02.jfif","/smuggle01.png"],
        },
        {
          title: "Slavery or Forced Labor",
          description: "Exploiting individuals through coercion for unpaid labor.",
          howToIdentify: "Notice individuals in restrictive conditions or unpaid, forced labor situations.",
          stepsToTake: [
            "Report to human rights organizations or local authorities.",
            "Offer support to the affected individuals.",
          ],
          images: ["/slavery01.jfif","/slavery02jpg","/slavery04.jfif"],
        },
        {
          title: "Medical Negligence",
          description: "Harm caused by healthcare professionals' failure to meet standards.",
          howToIdentify: "Identify improper treatment, misdiagnoses, or substandard medical practices.",
          stepsToTake: [
            "Consult medical boards or legal advisors.",
            "File a formal complaint with the healthcare institution.",
          ],
          images: ["/mn03.png","/n02.jpg","/mn01.png"],
        },
      ],
    },
  ];

  const flattenedCases = cases.flatMap((category) => category.cases);

  const [selectedCase, setSelectedCase] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedCase && selectedCase.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % selectedCase.images.length
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [selectedCase]);

  const handleCardClick = (c) => {
    setSelectedCase(c);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Learn about other available cases
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {flattenedCases.map((c, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleCardClick(c)}
          >
            <img
              src={c.images[0]}
              alt={c.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ padding: "10px", color: "#333" }}>{c.title}</h3>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "600px",
              width: "90%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={selectedCase.images[currentImageIndex]}
                alt={selectedCase.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              {selectedCase.title}
            </h3>
            <p style={{ marginBottom: "10px" }}>
              <strong>Description:</strong> {selectedCase.description}
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong>How to Identify:</strong> {selectedCase.howToIdentify}
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong>Steps to Take:</strong>
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              {selectedCase.stepsToTake.map((step, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {step}
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              style={{
                background: "#f44336",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Learn;
*/

import React, { useState, useEffect } from "react";
import "../styles/learn.css";

const Learn = () => {
  const cases = [
    {
      category: "Environmental Violations",
      cases: [
        {
          title: "Illegal dumping of hazardous waste",
          description: "Dumping waste in non-designated areas that harms the environment.",
          howToIdentify: "Look for signs of waste in open or water areas.",
          stepsToTake: [
            "Report to local environmental authorities.",
            "Gather photographic evidence if safe.",
            "Avoid contact with the waste.",
          ],
          images: ["/illegalDump01.jpg", "/illegalDump02.jpg", "/illegalDump03.jpg"],
        },
        {
          title: "Deforestation without permission",
          description: "Cutting down trees without legal approval.",
          howToIdentify: "Notice large clearings in forested areas or missing wildlife.",
          stepsToTake: [
            "Contact forest department officials.",
            "Raise awareness in local communities.",
          ],
          images: ["/deforstation01.jpg", "/deforstation02.jpg", "/deforestation03.jpg"],
        },
        {
          title: "Violation of wildlife protection laws",
          description: "Hunting, capturing, or harming protected species.",
          howToIdentify: "Reports of poaching, missing animals, or suspicious activity in wildlife areas.",
          stepsToTake: [
            "Inform local wildlife authorities.",
            "Avoid confrontation with poachers.",
            "Spread awareness about the importance of wildlife protection.",
          ],
          images: ["/WildlifeCrime01.jpeg"],
        },
        {
          title: "Unauthorized mining activities",
          description: "Mining without legal permits, causing environmental degradation.",
          howToIdentify: "Large-scale excavation or mining activities in non-designated areas.",
          stepsToTake: [
            "Report to mining or environmental authorities.",
            "Document the location and activity.",
          ],
          images: ["/mining01.jpg"],
        },
      ],
    },
    {
      category: "Intellectual Property Theft",
      cases: [
        {
          title: "Plagiarism of copyrighted works",
          description: "Using someone else's work without proper credit or permission.",
          howToIdentify: "Check for duplicate or uncredited works.",
          stepsToTake: [
            "Inform the copyright owner.",
            "Report to relevant legal authorities or platforms.",
          ],
          images: ["/ipt001.jpeg"],
        },
        {
          title: "Unauthorized use of trademarks",
          description: "Using a trademarked logo or name without permission.",
          howToIdentify: "Look for logos or names resembling registered trademarks.",
          stepsToTake: [
            "Report to trademark authorities.",
            "Notify the trademark owner.",
          ],
          images: ["/tm01.jpg", "/tm02.jpg"],
        },
      ],
    },
    {
      category: "Other Violations",
      cases: [
        
        {
          title: "Counterfeiting",
          description: "Producing fake currency or goods.",
          howToIdentify: "Identify unusual markings on currency or goods that appear counterfeit.",
          stepsToTake: [
            "Inform local authorities or regulatory agencies.",
            "Avoid distributing counterfeit items.",
          ],
          images: ["/cf01.png","/cf02.jpg","/cf03.jpg"],
        },
        {
          title: "Rioting",
          description: "Participation in violent public disturbances.",
          howToIdentify: "Look for large groups engaged in violent or destructive activities.",
          stepsToTake: [
            "Stay away from the affected area.",
            "Alert law enforcement immediately.",
          ],
          images: ["/riot01.jfif","/riot02.jfif"],
        },
        {
          title: "Bigamy/Polygamy",
          description: "Marrying more than one person simultaneously.",
          howToIdentify: "Check for conflicting marriage records or reports.",
          stepsToTake: [
            "Report to the legal authorities.",
            "Consult family law specialists for further steps.",
          ],
          images: ["/bi03.jfif","/bi02.jfif","/bi01.jfif"],
        },
        {
          title: "Smuggling",
          description: "Illegal transportation of goods or people.",
          howToIdentify: "Look for unmarked vehicles or suspicious border activities.",
          stepsToTake: [
            "Inform customs or border patrol.",
            "Avoid intervening directly and prioritize safety.",
          ],
          images: ["/smuggle03.jfif","/smuggle02.jfif","/smuggle01.png"],
        },
        {
          title: "Slavery or Forced Labor",
          description: "Exploiting individuals through coercion for unpaid labor.",
          howToIdentify: "Notice individuals in restrictive conditions or unpaid, forced labor situations.",
          stepsToTake: [
            "Report to human rights organizations or local authorities.",
            "Offer support to the affected individuals.",
          ],
          images: ["/slavery01.jfif","/slavery02jpg","/slavery04.jfif"],
        },
        {
          title: "Medical Negligence",
          description: "Harm caused by healthcare professionals' failure to meet standards.",
          howToIdentify: "Identify improper treatment, misdiagnoses, or substandard medical practices.",
          stepsToTake: [
            "Consult medical boards or legal advisors.",
            "File a formal complaint with the healthcare institution.",
          ],
          images: ["/mn03.png","/n02.jpg","/mn01.png"],
        },
      ],
    },
  ];

  const flattenedCases = cases.flatMap((category) => category.cases);

  const [selectedCase, setSelectedCase] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (c) => {
    setSelectedCase(c);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedCase.images.length) % selectedCase.images.length
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedCase.images.length
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Learn about other available cases
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {flattenedCases.map((c, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleCardClick(c)}
          >
            <img
              src={c.images[0]}
              alt={c.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ padding: "10px", color: "#333" }}>{c.title}</h3>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "600px",
              width: "90%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <button
                onClick={showPreviousImage}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
              >
                &lt;
              </button>
              <img
                src={selectedCase.images[currentImageIndex]}
                alt={selectedCase.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={showNextImage}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
              >
                &gt;
              </button>
            </div>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              {selectedCase.title}
            </h3>
            <p style={{ marginBottom: "10px" }}>
              <strong>Description:</strong> {selectedCase.description}
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong>How to Identify:</strong> {selectedCase.howToIdentify}
            </p>
            <p style={{ marginBottom: "10px" }}>
              <strong>Steps to Take:</strong>
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              {selectedCase.stepsToTake.map((step, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {step}
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              style={{
                background: "#f44336",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
