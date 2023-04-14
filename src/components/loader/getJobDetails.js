const getJobDetails = async ({ params }) => {
  const id = +params.id;

  const response = await fetch("/featuredJobs.json");
  const data = await response.json();
  const selectedData = data.find(item => item.id === id);

  return selectedData;
};
export default getJobDetails;
