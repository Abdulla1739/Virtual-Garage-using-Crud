import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateUserAPI } from "../../services/allAPI";
import "./NavHomeStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUserDetails = ({ userDetails }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fName: userDetails.fName,
    emailId: userDetails.emailId,
    password: userDetails.password,
    cPassword: userDetails.cPassword,
  });

  useEffect(() => {
    setFormData({
      fName: userDetails.fName,
      emailId: userDetails.emailId,
      password: userDetails.password,
      cPassword: userDetails.cPassword,
    });
  }, [userDetails]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = () => {
    if (formData.password === formData.cPassword) {
      const updatedDetails = {
        id: userDetails.id,
        fName: formData.fName,
        emailId: formData.emailId,
        password: formData.password,
        cPassword: formData.cPassword,
      };
      updateUserAPI(updatedDetails);
      window.location.href = "/";
      handleClose();
    } else {

           toast.error("Password not match please try again");

    //   alert("Password not match please try again");
    }
  };

  return (
    <>
      <div onClick={handleShow}>Account Update</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="px-5 pt-5">
          <Modal.Title>Update Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form>
            <div className="form-outline mb-2">
              <input
                type="text"
                id="fullName"
                className="form-control form-control-lg"
                value={formData.fName}
                onChange={(e) =>
                  setFormData({ ...formData, fName: e.target.value })
                }
              />
              <label className="form-label" htmlFor="fullName">
                Full Name
              </label>
            </div>

            <div className="form-outline mb-2">
              <input
                type="email"
                id="form3Example3cg"
                className="form-control form-control-lg"
                value={formData.emailId}
                onChange={(e) =>
                  setFormData({ ...formData, emailId: e.target.value })
                }
              />
              <label className="form-label" htmlFor="form3Example3cg">
                Your Email
              </label>
            </div>

            <div className="form-outline mb-2">
              <input
                type="password"
                id="form3Example4cg"
                className="form-control form-control-lg"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <label className="form-label" htmlFor="form3Example4cg">
                New Password
              </label>
            </div>

            <div className="form-outline mb-2">
              <input
                type="password"
                id="form3Example4cdg"
                className="form-control form-control-lg"
                value={formData.cPassword}
                onChange={(e) =>
                  setFormData({ ...formData, cPassword: e.target.value })
                }
              />
              <label className="form-label" htmlFor="form3Example4cdg">
                Repeat New Password
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn-block btn-lg gradient-custom-4 loginButton"
                onClick={handleUpdate}
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

export default UpdateUserDetails;
