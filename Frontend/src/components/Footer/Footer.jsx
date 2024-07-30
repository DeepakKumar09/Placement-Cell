import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section
        className="text-light"
        style={{ backgroundColor: "rgb(0, 0, 29)" }}
      >
        <MDBContainer className="text-center text-md-start mt-1">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-1" />
                Placement Management System
              </h6>
              <p>
                A Placement Management System is a software tool used by
                educational institutions and organizations to streamline and
                manage the placement process for students and job seekers.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Official Portal</h6>
              <p>
                <a href="https://cutm.ac.in/" className="text-reset">
                  Main Portal
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  View
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Level
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="1" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="allcompany" className="text-reset">
                  All Company
                </a>
              </p>
              <p>
                <a href="contactus" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="ri-map-pin-line"></i>
                R.Sitapur, Paralakhemundi, Bhubaneswar, Odisha, India.
              </p>
              <p>
                <i class="ri-mail-line"></i>
                info@example.com
              </p>
              <p>
                <i class="ri-phone-fill"></i> + 01 234 567 88
              </p>
              <p>
                <i class="ri-phone-fill"></i> + 01 234 567 89
              </p>
            </MDBCol>
            <div class="social-icons">
              <a href="/" class="me-4 text-reset text-decoration-none">
                <i class="ri-facebook-fill text-primary h3"></i>
              </a>
              <a href="/" class="me-4 text-reset text-decoration-none">
                <i class="ri-twitter-fill text-info h3"></i>
              </a>
              <a href="//" class="me-4 text-reset text-decoration-none">
                <i class="ri-google-fill text-danger h3"></i>
              </a>
              <a href="/" class="me-4 text-reset text-decoration-none">
                <i class="ri-instagram-line text-warning h3"></i>
              </a>
              <a href="/" class="me-4 text-reset text-decoration-none">
                <i class="ri-linkedin-box-fill text-primary h3"></i>
              </a>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4 text-light"
        style={{ backgroundColor: "rgb(189, 26, 54)" }}
      >
        © 2023 Centurion University
        <a
          className="text-reset me-2 text-decoration-none"
          href="https://cutm.ac.in/Disclaimer/"
        >
          | Disclamier
        </a>
        <a
          className="text-reset me-2 text-decoration-none"
          href="https://cutm.ac.in/privacy-policy/"
        >
          | Privacy Policy
        </a>
        <a
          className="text-reset me-2 text-decoration-none"
          href="https://mdbootstrap.com/"
        >
          | Term of use
        </a>
        <a
          className="text-reset me-2 text-decoration-none"
          href="https://mdbootstrap.com/"
        >
          | Blog
        </a>
      </div>
    </MDBFooter>
  );
}
