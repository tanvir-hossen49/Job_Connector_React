import React, { useEffect, useState } from "react";
import { getAppliedJobs } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import PageHeader from "./PageHeader";

const AppliedJobs = () => {
  const data = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [currentValue, setCurrentValue] = useState("filter");

  const handleChange = e => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    const storedItems = getAppliedJobs();
    const appliedJobs = [];
    for (let id of storedItems) {
      if (currentValue !== "filter") {
        const addedProduct = data.find(
          data => data.id === id && data.remoteOrOnsite === currentValue
        );
        if (addedProduct) {
          appliedJobs.push(addedProduct);
        }
      } else {
        const addedProduct = data.find(data => data.id === id);
        if (addedProduct) {
          appliedJobs.push(addedProduct);
        }
      }
    }
    setAppliedJobs(appliedJobs);
    console.log(appliedJobs);
  }, [currentValue]);

  return (
    <div>
      <PageHeader text="Applied Jobs" />
      <div className="my-container">
        <div className="text-right mb-4 ">
          <select
            className="bg-[#faf8ff] p-4 rounded-lg"
            name="filter"
            id="filter"
            onChange={handleChange}
          >
            <option value="filter">Filter</option>
            <option value="Remote">Remote Jobs</option>
            <option value="Onsite">On Site Jobs</option>
          </select>
        </div>
        <div className="grid gap-5">
          {appliedJobs.length !== 0 ? (
            appliedJobs.map((jobPost, i) => (
              <AppliedJob key={i} jobPost={jobPost} />
            ))
          ) : (
            <h4 className="text-center text-4xl">No Data Found</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
