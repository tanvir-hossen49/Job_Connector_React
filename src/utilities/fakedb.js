import { toast } from "react-toastify";

// use local storage to manage cart data
const addToDb = id => {
  let storeData = JSON.parse(localStorage.getItem("applied-job")) || [];
  if (!storeData.includes(id)) {
    storeData.push(id);

    toast.success("Apply successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.warn("You already apply this job", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  localStorage.setItem("applied-job", JSON.stringify(storeData));
};

const removeFromDb = id => {
  let storeData = JSON.parse(localStorage.getItem("applied-job"));
  if (id in storeData) {
    delete storeData[id];
    localStorage.setItem("applied-job", JSON.stringify(storeData));
  }
  console.log(storeData);
};

const getAppliedJobs = () => {
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-job");
};

export { addToDb, removeFromDb, getAppliedJobs, deleteShoppingCart };
