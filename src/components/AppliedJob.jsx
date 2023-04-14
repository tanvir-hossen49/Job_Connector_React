import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJob = ({ jobPost }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    fulltimeOrParttime,
    remoteOrOnsite,
    location,
    salary,
    id,
  } = jobPost;
  return (
    <div className="flex items-center border rounded-lg border-[#E8E8E8] p-6">
      <img
        className="w-48 h-38 object-cover rounded-md"
        src={companyLogo}
        alt="company logo"
      />

      <div className="lg:flex w-full lg:ml-8 ml-4 items-center justify-between">
        <div>
          <h4>{jobTitle}</h4>
          <p>
            <small>{companyName}</small>
          </p>

          <div className="text-gradient  font-bold my-5">
            <span className="py-2 px-3 rounded text-base border border-['#7E90FE']">
              {remoteOrOnsite}
            </span>
            <span className="ml-4 py-2 px-3 rounded text-base border border-['#7E90FE']">
              {fulltimeOrParttime}
            </span>
          </div>

          <div className="lg:flex justify-between gap-7 items-center">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-1" />
              <span>{location}</span>
            </div>

            <div className="flex items-center">
              <CurrencyDollarIcon className="w-5 h-5 mr-1" />
              <span>Salary: {salary}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <Link
              to={`/job/${id}`}
              className="btn-gradient text-base px-4 py-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
