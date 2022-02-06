import React from "react";
import { Button, Form } from "react-bootstrap";
import St_Line from "../core/myComponents/St_Line";
import ".././styles/register.css"

export default function Register(props) {
  return (
    <div className="w-100 p-3 gradient">
      <div className="text-center">
        <h3 style={{ color: "#b84060" }}>Register</h3>
      </div>
      <div className="d-flex justify-content-center" style={{ marginTop: -10 }}>
        <St_Line color="#a1b7d4" Height="5px" Width={350} Radius="10px" />
      </div>
      <div className="d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "#fff",
            width: 300,
            borderRadius: 10,
            boxShadow: "10px 15px 10px #9E9E9E",
          }}
          className="p-4"
        >
          <Form>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="password" placeholder="First name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="password" placeholder="Last name" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-end">
              <a href="/login">Login</a>
              <a href="#">
                <button
                  type="button"
                  className="btn btn-info shadow bg-white rounded"
                >
                  Submit
                </button>
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
