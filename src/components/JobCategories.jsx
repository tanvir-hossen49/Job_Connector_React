import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  const [JobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then(res => res.json())
      .then(data => setJobCategories(data));
  }, []);

  return (
    <section className="mt-24 my-container">
      <h2 className="text-4xl text-center">Job Category List</h2>
      <p className="mt-4 mb-7 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {JobCategories.map(category => (
          <JobCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
