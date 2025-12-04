
import React from "react";

const JobCard = () => {
  return (
    <div className="max-w-xs rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden">
      {/* Top content */}
      <div className="bg-[#fff3dc] px-5 pt-4 pb-20 relative">
        <div className="flex items-start justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">$150/hr</span>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-700 transition"
            aria-label="Save job"
          >
            {/* simple bookmark shape */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"
              />
            </svg>
          </button>
        </div>

        <h2 className="text-2xl font-semibold leading-snug text-gray-900">
          Senior
          <br />
          Backend
          <br />
          Engineer
        </h2>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between px-5 py-3 bg-white">
        <div className="flex items-center gap-2">
          {/* Google-like circle logo */}
          <div className="h-7 w-7 rounded-full bg-white border flex items-center justify-center">
            <span className="text-xs font-bold text-blue-600">G</span>
          </div>
          <p className="text-sm font-medium text-gray-800">
           Instagram
            <br />
           
          </p>
        </div>

        <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
          view
        </button>
      </div>
    </div>
  );
};

export default JobCard;
