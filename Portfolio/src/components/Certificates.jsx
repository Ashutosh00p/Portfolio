import React from "react";

import IBMpdf from "../assets/certificates/IBM.pdf";
import NPTELpdf from "../assets/certificates/NPTEL.pdf";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "IBM SkillBuild Certificate",
      pdf: IBMpdf,
    },
    {
      id: 2,
      title: "NPTEL Certificate",
      pdf: NPTELpdf,
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="certificates">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {cert.title}
              </h3>

              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;