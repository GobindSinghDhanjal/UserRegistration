import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import BasicModal from "./BasicModal";
import validator from "validator";

function RegisterForm() {
  const [formValue, setFormValue] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const formSubmit = () => {
    console.log(formValue);
    if (formValue.fname !== "" && formValue.password !== "") {
      if (validator.isEmail(formValue.email)) {
        handleClickOpen();
        window.location.reload();
      }
    }
  };

  return (
    <div className="register-form mask gradient-custom-3">
      <MDBContainer fluid>
        <MDBRow className=" d-flex justify-content-center align-items-center">
          <MDBCol className="d-flex justify-content-center" lg="8">
            <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px" }}>
              <MDBCardImage
                src="https://techvins.com/static/2023/assets/images/techvinsyt2.png"
                className="w-100 rounded-top"
                alt="Sample photo"
              />

              <MDBCardBody className="px-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  User Registration Form
                </h3>
                <MDBValidation>
                  <MDBValidationItem
                    className="mb-3 pb-1"
                    feedback="Please enter your name"
                    invalid
                  >
                    <MDBInput
                      wrapperClass="mb-4"
                      type="text"
                      value={formValue.fname}
                      name="fname"
                      onChange={onChange}
                      id="validationCustom01"
                      required
                      label="Full name"
                    />
                  </MDBValidationItem>

                  <MDBValidationItem
                    className="mb-3 pb-1"
                    feedback="Please enter your email"
                    invalid
                  >
                    <MDBInput
                      wrapperClass="mb-4"
                      type="email"
                      value={formValue.email}
                      name="email"
                      onChange={onChange}
                      id="validationCustom02"
                      required
                      label="Email"
                    />
                  </MDBValidationItem>

                  <MDBValidationItem
                    className="mb-3 pb-1"
                    feedback="Please enter your password"
                    invalid
                  >
                    <MDBInput
                      wrapperClass="mb-4"
                      type="password"
                      value={formValue.password}
                      name="password"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Password"
                    />
                  </MDBValidationItem>

                  <MDBBtn onClick={formSubmit} className="btn-1 mb-4" size="lg">
                    Submit
                  </MDBBtn>
                  <BasicModal open={open} handleClose={handleClose} />
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default RegisterForm;
