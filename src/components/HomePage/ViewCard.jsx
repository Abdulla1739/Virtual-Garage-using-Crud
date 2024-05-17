import React from "react";
import "./ViewCardStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SliderStyle.css";

import Card from "react-bootstrap/Card";
import { EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { removeDataAPI } from "../../services/allAPI";
import UpdateData from "./ViewSectionComponents/UpdateData";

const ViewCard = ({ displayData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (
      Object.values(displayData?.VehicleCImgs).every((value) => value === "") ==
      false
    ) {
      setShow(true);
    }
  };

  const handleDataDelete = async (dataId) => {
    try {
      const result = await removeDataAPI(dataId);
      console.log(result);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="profile-card-2">
        <img
          onClick={handleShow}
          src={displayData.thumnailURL}
          className="img img-responsive"
          height={"400px"}
          alt={displayData.vName}
        />
        <div className="profile-name">{displayData.vName}</div>
        <div className="profile-username">{displayData.mName}</div>
        <div className="profile-username2">{displayData.year}</div>
        <div className="profile-icons">
          <button className="btn box-shadow-btn">
            <UpdateData dataTransfer={displayData} />
          </button>
          <button
            onClick={() => handleDataDelete(displayData.id)}
            className="btn box-shadow-btn"
          >
            <i className="fa-solid fa-trash text-danger"></i>
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" fullscreen>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            style={{ height: "70vh", width: "100%" }}
            className="d-flex justify-content-center align-items-center "
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow]}
              spaceBetween={4}
              slidesPerView={"auto"}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ height: "100%", width: "100%" }}
            >
              {displayData.VehicleCImgs.imgOne && (
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                  <Card style={{ width: "100%", height: "100%" }}>
                    <Card.Img
                      style={{ width: "100%", height: "100%" }}
                      variant="top"
                      src={displayData.VehicleCImgs.imgOne}
                      className="position-absolute"
                    />
                  </Card>
                </SwiperSlide>
              )}
              {displayData.VehicleCImgs.imgTwo && (
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                  <Card style={{ width: "100%", height: "100%" }}>
                    <Card.Img
                      style={{ width: "100%", height: "100%" }}
                      variant="top"
                      src={displayData.VehicleCImgs.imgTwo}
                      className="position-absolute"
                    />
                  </Card>
                </SwiperSlide>
              )}
              {displayData.VehicleCImgs.imgThree&&
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Img
                    style={{ width: "100%", height: "100%" }}
                    variant="top"
                    src={displayData.VehicleCImgs.imgThree}
                    className="position-absolute"
                  />
                </Card>
              </SwiperSlide>}
              {displayData.VehicleCImgs.imgFour&&
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Img
                    style={{ width: "100%", height: "100%" }}
                    variant="top"
                    src={displayData.VehicleCImgs.imgFour}
                    className="position-absolute"
                  />
                </Card>
              </SwiperSlide>}
              {displayData.VehicleCImgs.imgFive&&
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Img
                    style={{ width: "100%", height: "100%" }}
                    variant="top"
                    src={displayData.VehicleCImgs.imgFive}
                    className="position-absolute"
                  />
                </Card>
              </SwiperSlide>}
              {displayData.VehicleCImgs.imgSix&&
                <SwiperSlide className="slider" style={{ height: "82%" }}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Img
                    style={{ width: "100%", height: "100%" }}
                    variant="top"
                    src={displayData.VehicleCImgs.imgSix}
                    className="position-absolute"
                  />
                </Card>
              </SwiperSlide>}
            </Swiper>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewCard;
