import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { addGarageAPI } from "../../../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const LocalUserid = localStorage.getItem("currentUserid");

  const [formData, setFormData] = useState({
    userId: LocalUserid,
    vName: "",
    thumnailURL: "",
    mName: "",
    year: "",
    VehicleCImgs: {
      imgOne: "",
      imgTwo: "",
      imgThree: "",
      imgFour: "",
      imgFive: "",
      imgSix: "",
    },
  });

  const handleAdd = () => {
    if (
      formData.vName &&
      formData.thumnailURL &&
      formData.mName &&
      formData.year
    ) {
      addGarageAPI(formData);
      handleClose();
      setFormData("");
      window.location.href = "/";
    } else {
      // alert("Form is not complete");
      toast.error("Form is not complete");
    }
  };

  return (
    <>
      <div onClick={handleShow}>+</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton className="px-5 pt-5  ">
          <Modal.Title>Add Your Wheel Here</Modal.Title>
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
                    type="text"
                    maxLength={4}
                    id="year"
                    class="form-control form-control-lg"
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
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
                onClick={handleAdd}
                class="SignUpButton btn-block btn-lg gradient-custom-4"
              >
                Add
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="bottom-left" theme="colored" autoClose={3000} />
    </>
  );
};

export default Add;
