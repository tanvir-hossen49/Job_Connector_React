import React from "react";

import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <JobCategories />
      <FeaturedJobs />
    </main>
  );
};

export default Home;
