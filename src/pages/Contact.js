import React from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xknevbga");
  if (state.succeeded) {
    return (
      <section id="contactus" className="section bg-gray-1">
        <Alert variant="success">
          <p>Thanks for reaching out me!!</p>
        </Alert>
      </section>
    );
  }
  return (
    <section id="contactus" className="section bg-gray-1">
      <div className="container">
        <div className="row justify-content-center section-title">
          <div className="col-lg-7 text-center">
            <h2>Get in touch</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-xl-8 pr-xl-5 m-15px-tb">
            <div className="contactus-form">
              <Form onSubmit={handleSubmit} method="POST">
                <Row>
                  <Col md={6}>
                    <FormGroup className="mb-2" controlId="name">
                      <FormLabel>Name (required)</FormLabel>
                      <FormControl
                        name="name"
                        required
                        type="text"
                        placeholder="Full Name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Name is required!
                      </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup className="mb-2" controlId="email">
                      <FormLabel>Email (required)</FormLabel>
                      <FormControl
                        name="email"
                        required
                        type="email"
                        placeholder="sample@gmail.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Email is required!
                      </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup className="mb-2" controlId="subject">
                      <FormLabel>Subject </FormLabel>
                      <FormControl name="subject" required type="text" />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup controlId="comments">
                      <FormLabel>Comments</FormLabel>
                      <FormControl
                        name="comments"
                        as="textarea"
                        row={12}
                      ></FormControl>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="btn-bar">
                    <Button type="submit" disabled={state.submitting}>
                      Contact
                    </Button>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <strong>
                <h4>This is my contact info</h4>
              </strong>
              <ul>
                <li className="media">
                  <i className="ti-map"></i>
                  <span className="media-body">
                    1234 Man O War Place apt 29 Lexington, KY
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email"></i>
                  <span className="media-body">tpng223@uky.edu</span>
                </li>
                <li className="media">
                  <i className="ti-mobile"></i>
                  <span className="media-body">+1 (502)-536-6504</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
