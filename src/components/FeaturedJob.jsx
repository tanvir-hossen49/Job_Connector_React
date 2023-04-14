import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  return (
    <div className="rounded-lg border border-[#E8E8E8] p-6 ">
      <div>
        <img
          src={job.companyLogo}
          alt="company logo"
          className="h-12 rounded-md"
        />
      </div>
      <div className="mt-3">
        <h4>{job.jobTitle}</h4>
        <p>
          <small>{job.companyName}</small>
        </p>

        <div className="text-gradient font-bold my-5">
          <span className="py-2 px-3 rounded text-base border border-['#7E90FE']">
            {job.remoteOrOnsite}
          </span>
          <span className="ml-4 py-2 px-3 rounded text-base border border-['#7E90FE']">
            {job.fulltimeOrParttime}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center">
            <CurrencyDollarIcon className="w-5 h-5" />
            <span>Salary: {job.salary}</span>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to={`/job/${job.id}`}
            className="btn-gradient text-base px-4 py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
