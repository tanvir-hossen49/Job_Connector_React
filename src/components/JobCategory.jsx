import React from "react";

const JobCategory = ({ category }) => {
  const { logo, name, jobs_available } = category;
  return (
    <div className="bg-[#faf8ff] py-6 px-8 rounded-lg">
      <img
        className="w-14 h-14 object-cover rounded-sm"
        src={logo}
        alt="category img"
      />
      <h4 className="text-xl mt-4">{name}</h4>
      <p> {jobs_available} Jobs Available </p>
    </div>
  );
};

export default JobCategory;
