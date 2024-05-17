import React, { useState } from "react";
import "./NavStyle.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { getUserAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginResgistration = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    window.localStorage.setItem("isLogin", true);
    let isValid = true;
    let validationError = {};
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
    } else if (
      formData.password.length < 8 ||
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      isValid = false;
      validationError.password = "Password is not valid";
    }

    getUserAPI()
      .then((result) => {
        result.data.forEach((user) => {
          if (user.emailId === formData.emailId) {
            if (user.password === formData.password) {
              // alert("login successfully");
              // toast.success("Login successfully");
              localStorage.setItem("currentUserid", user.id);
              window.location.href = "/";
              setFormData("");
              handleClose();
            } else {
              isValid = false;
              validationError.password = "Wrong Password";
            }
          } else {
            isValid = false;
            validationError.emailId = "Wrong email id";
          }
        });
        setError(validationError);
        setValid(isValid);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div onClick={handleShow}>Login</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="px-5 pt-5  ">
          <Modal.Title>Please sign in to your account. </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5   ">
          <Form>
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
                Enter Your Email
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
                Enter your Password
              </label>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">{error.password}</span>
              )}
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="loginButton btn-block btn-lg gradient-custom-4"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="bottom-left" theme="colored" autoClose={3000} />
    </>
  );
};

export default LoginResgistration;
