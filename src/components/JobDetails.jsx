import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakedb";
import PageHeader from "./PageHeader";

const JobDetails = () => {
  const data = useLoaderData();

  const handleAddTODB = id => {
    addToDb(id);
  };

  return (
    <div>
      <PageHeader text="Job Details" />

      <div className="flex flex-col lg:flex-row justify-center items-start gap-5 my-16 lg:mx-40 px-5">
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <span className="font-bold">Job Descriptions:</span>
            {data.jobDescription}
          </div>

          <div>
            <span className="font-bold">Job Responsibility:</span>
            {data.jobResponsibility}
          </div>
          <div>
            <span className="font-bold">Educational Requirements:</span>
            {data.educationalRequirements}
          </div>
          <div>
            <span className="font-bold">Experiences:</span>
            {data.experiences}
          </div>
        </div>
        <div className="flex-2">
          <div className=" flex flex-col gap-3 bg-[#faf8ff] p-5">
            <h4>Job Details</h4>
            <hr />
            <div className="flex items-center">
              <CurrencyDollarIcon className="w-5 h-5 mr-2" />
              <span>Salary: {data.salary}(per year)</span>
            </div>
            <div className="flex items-center">
              <CalendarDaysIcon className="w-5 h-5 mr-2" />
              <span>Job Title: {data.jobTitle}</span>
            </div>
            <h4>Contact Information</h4>
            <hr />
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>Phone: {data.contactInformation.phone}</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <span>E-mail: {data.contactInformation.email}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>{data.location}</span>
            </div>
          </div>

          <div
            onClick={() => handleAddTODB(data.id)}
            className="cursor-pointer mt-6 btn-gradient text-base text-center px-4 py-2"
          >
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
