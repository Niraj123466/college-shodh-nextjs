"use client"
import { useEffect, useState } from "react";
// import "../../styles/Modal.css";

const MyModal = ({ closeModal, type }) => {
  // to stop scrolling when modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden"; // hide scroll
    return () => {
      document.body.style.overflowY = "scroll"; // back to normal scroll (cleanup fn)
    };
  }, []);

  const bscCourses = [
    { name: "Physics", img: "./bsc_icons/physics.png" },
    { name: "Chemistry", img: "./bsc_icons/chem.png" },
    { name: "Biology", img: "./bsc_icons/biology.png" },
    { name: "Mathematics", img: "./bsc_icons/maths.png" },
    { name: "Microbiology", img: "./bsc_icons/microbiology.png" },
    { name: "Nursing", img: "./bsc_icons/nursing.png" },
    { name: "Home Science", img: "./bsc_icons/homescience.png" },
    { name: "Bio Technology", img: "./bsc_icons/biotech.png" },
    {
      name: "Environmental Science",
      img: "./bsc_icons/environ_sci.png",
    },
    { name: "Agriculture", img: "./bsc_icons/agriculture.png" },
    { name: "Economics", img: "./bsc_icons/Economics.png" },
    { name: "Statistics", img: "./bsc_icons/Statistics.png" },
    { name: "Data Science", img: "./bsc_icons/data-science.png" },
    { name: "Biological Science", img: "./bsc_icons/Biological_Science.png" },
    { name: "Electronics", img: "./bsc_icons/Electronics.png" },
    { name: "Applied Geology", img: "./bsc_icons/Applied_Geology.png" },
    { name: "Physiotherapy", img: "./bsc_icons/Physiotherapy.png" },
    { name: "Computer Science", img: "./bsc_icons/ComputerScience.png" },
    { name: "IT", img: "./bsc_icons/IT.png" },
    { name: "Forensic Science", img: "./bsc_icons/forensic.png" },
    { name: "Optometry", img: "./bsc_icons/Optometry.png" },
    { name: "Botany", img: "./bsc_icons/Botany.png" },
    { name: "Zoology", img: "./bsc_icons/Zoology.png" },
    { name: "Bio Chemistry", img: "./bsc_icons/BioChemistry.png" },
    { name: "Psychology", img: "./bsc_icons/Psychology.png" },
    { name: "Fashion Design", img: "./bsc_icons/fashionDesign.png" },
    { name: "Food Technology", img: "./bsc_icons/foodTech.png" },
    { name: "Horticulture", img: "./bsc_icons/Horticulture.png" },
    { name: "Animation", img: "./bsc_icons/animation.png" },
    { name: "Bioinformatics", img: "./bsc_icons/Bioinformatics.png" },
    { name: "Geography", img: "./bsc_icons/Geography.png" },
    { name: "Hospitality", img: "./bsc_icons/Hospitality.png" },
    {
      name: "Exploration Geophysics",
      img: "./bsc_icons/ExplorationGeophysics.png",
    },
    {
      name: "Medical Imaging Technology",
      img: "./bsc_icons/medicalImagingTech.png",
    },
    {
      name: "Mathematics Scientific Computing",
      img: "./bsc_icons/math_Sci_Computing.png",
    },
    {
      name: "Data Science and Application",
      img: "./bsc_icons/Data_Sci_&_Application.png",
    },
  ];

  const beCourses = [
    { name: "Computer Science", img: "./be-btech_icons/computer_science.png" },
    {
      name: "Electrical Engineering",
      img: "./be-btech_icons/Electrical_Engineering.png",
    },
    { name: "Mechanical Engg", img: "./be-btech_icons/Mechanical_Engineering.png" },
    { name: "Civil Engg", img: "./be-btech_icons/Civil_Engineering.png" },
    { name: "Chemical Engineering", img: "./be-btech_icons/chemical_Engineering.png" },
    { name: "Aerospace Engineering", img: "./be-btech_icons/Aerospace_Engineering.png" },
    { name: "Biomedical Engineering", img: "./be-btech_icons/biomedical_Engineering.png" },
    { name: "Environmental Engineering", img: "./be-btech_icons/environmental_Engineering.png" },
    { name: "Electronic Engineering", img: "./be-btech_icons/Electronic_Engineering.png" },
    { name: "Agricultural Engineering", img: "./be-btech_icons/agriculture_Engineering.png" },
    { name: "Automobile Engineering", img: "./be-btech_icons/Automobile_Engineering.png" },
    { name: "Robotics Engineering", img: "./be-btech_icons/Robotics_Engineering.png" },
    { name: "Marine Engineering", img: "./be-btech_icons/Marine_Engineering.png" },
    { name: "Petroleum Engineering", img: "./be-btech_icons/Petroleum_Engineering.png" },
    { name: "Mining Engineering", img: "./be-btech_icons/Mining_Engineering.png" },
    { name: "Mineral Engineering", img: "./be-btech_icons/Mineral_Engineering.png" },
    { name: "Dyestuff Technology", img: "./be-btech_icons/Dyestuff_Technology.png" },
    { name: "Power Engineering", img: "./be-btech_icons/Power_Engineering.png" },
    { name: "Mechatronics Engineering", img: "./be-btech_icons/Mechatronics_Engineering.png" },
    { name: "Structural Engineering", img: "./be-btech_icons/Structural_Engineering.png" },
    { name: "Food Technology", img: "./be-btech_icons/Food_Technology.png" },
    { name: "Cyber Security", img: "./be-btech_icons/cyber-security.png" },
    { name: "Industrial Engineering", img: "./be-btech_icons/Industrial_Engineering.png" },
    { name: "Irrigation Engineering", img: "./be-btech_icons/Irrigation_Engineering.png" },
    { name: "Biotechnology Engineering", img: "./be-btech_icons/biotechnology.png" },
    { name: "Aeronautical Engineering", img: "./be-btech_icons/Aeronautical_Engineering.png" },
    { name: "Construction Engineering", img: "./be-btech_icons/Construction_Engineering.png" },
    { name: "Mathematics & Computing", img: "./be-btech_icons/Mathematics&Computing.png" },
    { name: "Manufacturing Engineering", img: "./be-btech_icons/Manufacturing&Computing.png" },  /* **** */
    { name: "Computer Science & Engineering", img: "./be-btech_icons/Computer_Science&Engineering.png" },
    { name: "RF & Microwave Engineering", img: "./be-btech_icons/RF&Microwave_Engineering.png" },
    { name: "Artificial Intelligence Engineering", img: "./be-btech_icons/Artificial_Intelligence.png" },
    { name: "Information Technology Engineering", img: "./be-btech_icons/information-technology_Engineering.png" },
    { name: "Electronics & Telecommunication", img: "./be-btech_icons/Electronics_Telecomm.png" },
    { name: "Pharmaceutical Chemistry and Technology", img: "./be-btech_icons/Pharmaceutical_Chemistry_and_Technology.png" },
    { name: "Food Engineering and Technology", img: "./be-btech_icons/Food_Technology.png" },
    { name: "Surface Coating Technology", img: "./be-btech_icons/Surface_Coating.png" },
    { name: "Polymer Engineering and Technology", img: "./be-btech_icons/Polymer_Engineering.png" },
    {
      name: "Oils, Oleochemicals and Surfactants Technology",
      img: "./be-btech_icons/Oils_oleochemicals.png",
    },
    { name: "Mining Machinery Engineering", img: "./be-btech_icons/Mining_Engineering.png" },
    { name: "Instrumentation and Control Engineering", img: "./be-btech_icons/instrumentation_and_control.png" },
    { name: "Metallurgical & Materials Engg.", img: "./be-btech_icons/metallurgical&Material.png" },
  ];

  const courses = type === "BSc" ? bscCourses : beCourses;

  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 8; // Number of courses to display per page

  const handleNext = () => {
    if ((currentPage + 1) * coursesPerPage < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);
  return (
    <>
      {/* Background Overlay  */}
      <div
        className="modal-wrapper fixed inset-0 bg-[rgba(201,193,193,0.9)] z-40"
        onClick={closeModal}
      ></div>
  
      <div className="modal-container absolute inset-0 flex items-center justify-center z-50 px-4">
        <div
          className="relative bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto sm:p-8 md:p-10"
          
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={closeModal}
            aria-label="Close Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          <h1 className="font-mono mb-6 text-2xl font-bold text-gray-800 text-center">
            {type === "BSc" ? "B. Sc Courses" : "BE/B. Tech Courses"}
          </h1>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCourses.map((course, index) => (
              <button
                className="model-btn flex flex-col items-center justify-center h-32 sm:h-40 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-[#e7a759] hover:text-white hover:scale-105 transition-all duration-200"
                onClick={() => closeModal(course)}
                key={index}
              >
                <img
                  src={course.img}
                  alt={course.name}
                  className="h-10 w-10 mb-2"
                />
                <span className="text-sm sm:text-base font-medium">
                  {course.name}
                </span>
              </button>
            ))}
          </div>
  
          {/* Pagination */}
          <div className="pagination flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="bg-[#007bff] hover:bg-blue-500  text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              &lt; Prev
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= courses.length}
              className="bg-[#007bff] hover:bg-blue-500 text-white px-6 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
  
  
};

export default MyModal;
