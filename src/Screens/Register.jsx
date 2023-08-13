import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Register = () => {
  return (
    <div>
      <section class="vh-95 ">
        <div class="container h-95">
          <div class="row d-flex justify-content-center align-items-center h-95">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-1">
                        Register as Learner
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-3 mt-3">
                          <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="Enter Your Name"
                              id="form3Example1c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              placeholder="Enter Your Email"
                              id="form3Example3c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-3">
                          <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mx-1">
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              class="form-control"
                              options={top100Films}
                              sx={{ width: 350}}
                              renderInput={(params) => (
                                <TextField {...params} label="Course" />
                              )}
                            />
                            <label class="form-label" for="form3Example4c">
                              Course
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              placeholder="Enter Password"
                              id="form3Example4c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <i class="fa fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              placeholder="Repeat Password"
                              id="form3Example4cd"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            href="/gd"
                            type="button"
                            class="btn btn-primary btn-lg"
                          >
                            <Link to={"/gd"} className="btn btn-primary btn-lg">
                              Register
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid mx-5"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const top100Films = [
 'BA', 'BCA', 'MA', 'Mba'
];

export default Register;
