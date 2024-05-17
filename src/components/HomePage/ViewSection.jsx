import React, { useEffect, useState } from "react";
import ViewCard from "./ViewCard";
import Add from "./ViewSectionComponents/Add";
import { getGarageAPI } from "../../services/allAPI";

const ViewSection = () => {
  const [garageData, setGarageData] = useState([]);

  const localUserId = localStorage.getItem("currentUserid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getGarageAPI();

        setGarageData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let filterData = garageData?.filter((item) => item?.userId == localUserId);

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="text-center mt-5">
          <h2 className="rounded-5">
            Welcome to your <span className="text-success">VIRTUAL GARAGE</span>
          </h2>
          <p>
            Explore the types of vehicles on our shared mobility marketplace.
          </p>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col"></div>
            <div className="col-lg-4 col-12 d-flex justify-content-end align-items-center">
              <h6>Add Wheel to the garage</h6>
              <button className="btn btn-outline-success ms-3 rounded-5 box-shadow-btn">
                <Add />
              </button>
            </div>
          </div>
        </div>

        <div className="container container-fluid py-4 rounded-5 box-shadow mt-3 d-flex justify-content-center justify-content-md-stretch align-items-center flex-wrap">
          {filterData.length > 0 ? (
            filterData.map((data) => (
              <div key={data?.id}>
                <ViewCard displayData={data} />
              </div>
            ))
          ) : (
            <div className="fw-bolder text-danger">Nothing to display</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewSection;
