import React, { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const data = useLoaderData();
  const [featuredJobs, setFeaturedJobs] = useState(data.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="mt-24 my-container">
      <h2 className="text-4xl text-center">Featured Jobs</h2>
      <p className="mt-4 mb-7 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {featuredJobs.map(job => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>

      <div className="my-9 text-center">
        <button
          className="btn-gradient py-4 px-6 "
          onClick={() => {
            setShowAll(!showAll);
            showAll ? setFeaturedJobs(data.slice(0, 4)) : setFeaturedJobs(data);
          }}
        >
          {showAll ? "Show less" : "See All Jobs"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
