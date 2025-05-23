import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { toast } from "react-toastify"; // if you use react-toastify

const projects = [
  {
    id: "lexiai",
    image: "/lexiai.jpg",
    category: "LegalTech AI",
    title: "Lexiai",
    rating: 5,
    reviews: 112,
    description:
      "Lexiai is an AI-powered legal assistant designed to democratize access to legal support for individuals and small businesses. It enables users to ask legal questions in plain language and receive AI-generated insights, draft basic legal documents, and explore options without immediate reliance on a human lawyer.",
    stack: [
      "Frontend: Next.js, TypeScript, Tailwind CSS",
      "Backend: Express.js, PostgreSQL",
      "API: RESTful API",
      "MVP Target: November 2025",
    ],
  },
  {
    id: "s8academy",
    image: "/s8academy.jpg",
    category: "EdTech",
    title: "S8Academy",
    rating: 5,
    reviews: 89,
    description:
      "S8Academy is an online learning platform offering high-quality tech and academic courses with certifications. Tailored for students, professionals, and lifelong learners, it features personalized dashboards, progress tracking, quizzes, and structured courses—bridging the digital skills gap.",
    stack: [
      "Frontend: React.js, TypeScript, Tailwind CSS",
      "Backend: Node.js, MongoDB",
      "API: RESTful API",
      "MVP Target: June 15, 2025",
    ],
  },
  {
    id: "s3records",
    image: "/lexiai.jpg",
    category: "HealthTech",
    title: "S3Records",
    rating: 5,
    reviews: 64,
    description:
      "S3Records is a smart hospital management platform that digitizes appointment bookings, medical records access, and workflows. It enhances healthcare delivery by improving patient experience and reducing operational bottlenecks.",
    stack: [
      "Frontend: React.js, Tailwind CSS",
      "Backend: Golang",
      "Communication: gRPC",
      "API: RESTful API",
      "MVP Target: Sept–Oct 2025",
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleComingSoon = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevent default anchor behavior
    toast.info("Coming Soon");
  };

  return (
    <section className="py-32 px-6 md:px-20 bg-black text-white min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-start mb-12 max-w-3xl">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-purple-600">Featured</span> Projects
          </h2>
          <p className="text-lg text-gray-400">
            Explore powerful real-world applications solving problems in
            LegalTech, EdTech, and HealthTech.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {projects.map((projects) => (
            <div
              key={projects.id}
              onClick={() => openModal(projects)}
              className="px-4"
            >
              <div className="rounded-lg shadow-md overflow-hidden bg-gray-900">
                {" "}
                {/* dark bg for cards */}
                {/* projects Image */}
                <div className="w-full">
                  <img
                    src={projects.image}
                    alt={projects.title}
                    className="w-full h-30 object-cover"
                  />
                </div>
                {/* projects Details */}
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-blue-400 font-light">
                      {" "}
                      {/* lighter blue */}
                      {projects.category}
                    </p>
                  </div>

                  <h4 className="text-lg font-medium text-white hover:text-blue-400 transition">
                    {" "}
                    {/* white text */}
                    {projects.title}
                  </h4>

                  <div className="flex items-center mt-4">
                    <ul className="flex space-x-1">
                      {[...Array(projects.rating)].map((_, i) => (
                        <li key={i}>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-yellow-400"
                          />
                        </li>
                      ))}
                    </ul>
                    <p className="ml-3 text-sm text-gray-400">
                      {" "}
                      {/* lighter gray */}
                      {projects.reviews} Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-lg w-full p-6 relative overflow-auto max-h-[90vh] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm font-medium text-indigo-600 mb-4">
                {selectedProject.category}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
                {selectedProject.stack.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/devspak-s8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                    <FaGithub /> View Code
                  </a>

                  <a
                    onClick={handleComingSoon}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
