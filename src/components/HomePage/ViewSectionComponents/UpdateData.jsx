import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { updateDataAPI } from "../../../services/allAPI";
import "../NavHomeStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateData = ({ dataTransfer }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const LocalUserid = localStorage.getItem("currentUserid");

  const [formData, setFormData] = useState({
    userId: LocalUserid,
    vName: dataTransfer.vName,
    thumnailURL: dataTransfer.thumnailURL,
    mName: dataTransfer.mName,
    year: dataTransfer.year,
    VehicleCImgs: {
      imgOne: dataTransfer.VehicleCImgs.imgOne,
      imgTwo: dataTransfer.VehicleCImgs.imgTwo,
      imgThree: dataTransfer.VehicleCImgs.imgThree,
      imgFour: dataTransfer.VehicleCImgs.imgFour,
      imgFive: dataTransfer.VehicleCImgs.imgFive,
      imgSix: dataTransfer.VehicleCImgs.imgSix,
    },
  });

  useEffect(() => {
    setFormData({
      userId: LocalUserid,
      vName: dataTransfer.vName,
      thumnailURL: dataTransfer.thumnailURL,
      mName: dataTransfer.mName,
      year: dataTransfer.year,
      VehicleCImgs: {
        imgOne: dataTransfer.VehicleCImgs.imgOne,
        imgTwo: dataTransfer.VehicleCImgs.imgTwo,
        imgThree: dataTransfer.VehicleCImgs.imgThree,
        imgFour: dataTransfer.VehicleCImgs.imgFour,
        imgFive: dataTransfer.VehicleCImgs.imgFive,
        imgSix: dataTransfer.VehicleCImgs.imgSix,
      },
    });
  }, [dataTransfer]);

  const handleDataUpdate = () => {
    const updatedDetails = {
      userId: LocalUserid,
      vName: dataTransfer.vName,
      thumnailURL: dataTransfer.thumnailURL,
      mName: dataTransfer.mName,
      year: dataTransfer.year,
      VehicleCImgs: {
        imgOne: dataTransfer.VehicleCImgs.imgOne,
        imgTwo: dataTransfer.VehicleCImgs.imgTwo,
        imgThree: dataTransfer.VehicleCImgs.imgThree,
        imgFour: dataTransfer.VehicleCImgs.imgFour,
        imgFive: dataTransfer.VehicleCImgs.imgFive,
        imgSix: dataTransfer.VehicleCImgs.imgSix,
      },
    };
    updateDataAPI(updatedDetails);
    window.location.href = "/";
    // alert("details are updated");
    toast.success("details are updated");
    setFormData("");
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow}>
        <i className="fa-solid fa-pen text-danger"></i>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton className="px-5 pt-5  ">
          <Modal.Title>Update Your Wheel Here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5   ">
          <Form>
            <Row>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="VehicleName"
                    class="form-control form-control-lg"
                    value={formData?.vName}
                    onChange={(e) =>
                      setFormData({ ...formData, vName: e.target.value })
                    }
                  />
                  <label class="form-label" for="VehicleName">
                    Vehicle Name
                  </label>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="ThumbnailURL"
                    class="form-control form-control-lg"
                    value={formData?.thumnailURL}
                    onChange={(e) =>
                      setFormData({ ...formData, thumnailURL: e.target.value })
                    }
                  />
                  <label class="form-label" for="ThumbnailURL">
                    Thumbnail URL
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="manufactureName"
                    class="form-control form-control-lg"
                    value={formData?.mName}
                    onChange={(e) =>
                      setFormData({ ...formData, mName: e.target.value })
                    }
                  />
                  <label class="form-label" for="manufactureName">
                    Manufacture Name
                  </label>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="number"
                    id="year"
                    class="form-control form-control-lg"
                    value={formData?.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                  />
                  <label class="form-label" for="year">
                    Year
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgOne"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgOne}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgOne: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgOne">
                    Add image one URL
                  </label>
                </div>
              </Col>

              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgTwo"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgTwo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgTwo: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgTwo">
                    Add image Two URL
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgThree"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgThree}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgThree: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgThree">
                    Add image Three URL
                  </label>
                </div>
              </Col>

              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgFour"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgFour}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgFour: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgFour">
                    Add image Four URL
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgFive"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgFive}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgFive: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgFive">
                    Add image Five URL
                  </label>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div data-mdb-input-init class="form-outline mb-2">
                  <input
                    type="text"
                    id="imgSix"
                    class="form-control form-control-lg"
                    value={formData?.VehicleCImgs.imgSix}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        VehicleCImgs: {
                          ...formData.VehicleCImgs,
                          imgSix: e.target.value,
                        },
                      })
                    }
                  />
                  <label class="form-label" for="imgSix">
                    Add image Six URL
                  </label>
                </div>
              </Col>
            </Row>

            <div class="d-flex justify-content-center">
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                onClick={handleDataUpdate}
                class="SignUpButton btn-block btn-lg gradient-custom-4"
              >
                Update
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="bottom-left" theme="colored" autoClose={3000} />
    </>
  );
};

export default UpdateData;
