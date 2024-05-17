import React, { useState } from "react";
import "./NavStyle.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import LoginResgistration from "./LoginResgistration";
import { addUserAPI } from "../../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpRegistration = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    fName: "",
    emailId: "",
    password: "",
    cPassword: "",
    // vehicleDetails: []
  });
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let validationError = {};
    if (formData.fName === "" || formData.fName === null) {
      isValid = false;
      validationError.fName = "full Name Required";
    }
    if (formData.emailId === "" || formData.emailId === null) {
      isValid = false;
      validationError.emailId = "Email ID Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      isValid = false;
      validationError.emailId = "Email ID is not valid";
    }
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationError.password = "Password Required";
    } else if (formData.password.length < 8) {
      isValid = false;
      validationError.password = "Password is not valid";
    }
    if (formData.cPassword !== formData.password) {
      isValid = false;
      validationError.cPassword = "Password is not match";
    }
    setError(validationError);
    setValid(isValid);

    if (Object.keys(validationError).length === 0) {
      // alert("Registered Successfully");
      toast.success("Registered Successfully");
      

      addUserAPI(formData);
      handleClose();
      setFormData("");
    } else {
      // alert("form is not complete");
      toast.error("form is not complete");
    }
  };

  return (
    <>
      <div onClick={handleShow}>Sign Up</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="px-5 pt-5  ">
          <Modal.Title>Create Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5   ">
          <Form>
            <div data-mdb-input-init class="form-outline mb-2">
              <input
                type="text"
                id="fullName"
                class="form-control form-control-lg"
                onChange={(e) =>
                  setFormData({ ...formData, fName: e.target.value })
                }
              />
              <label class="form-label" for="fullName">
                full Name
              </label>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">{error.fName}</span>
              )}
            </div>

            <div data-mdb-input-init class="form-outline mb-2">
              <input
                type="email"
                id="form3Example3cg"
                class="form-control form-control-lg"
                onChange={(e) =>
                  setFormData({ ...formData, emailId: e.target.value })
                }
              />
              <label class="form-label" for="form3Example3cg">
                Your Email
              </label>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">{error.emailId}</span>
              )}
            </div>

            <div data-mdb-input-init class="form-outline mb-2">
              <input
                type="password"
                id="form3Example4cg"
                class="form-control form-control-lg"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <label class="form-label" for="form3Example4cg">
                Password
              </label>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">{error.password}</span>
              )}
            </div>

            <div data-mdb-input-init class="form-outline mb-2">
              <input
                type="password"
                id="form3Example4cdg"
                class="form-control form-control-lg"
                onChange={(e) =>
                  setFormData({ ...formData, cPassword: e.target.value })
                }
              />
              <label class="form-label" for="form3Example4cdg">
                Repeat your password
              </label>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">{error.cPassword}</span>
              )}
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                onClick={handleSubmit}
                class="SignUpButton btn-block btn-lg gradient-custom-4"
              >
                Register
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="bottom-left" theme="colored" autoClose={3000} />
    </>
  );
};

export default SignUpRegistration;
