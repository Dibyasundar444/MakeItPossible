import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Login(props) {
  return (
    <div className="w-100 p-3">
      <div className="text-center py-5">
        <h3 style={{ color: "#b84060" }}>Login</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            width: 300,
            boxShadow: "15px 20px #afbaf0, -1em -1em 0.4em olive",
          }}
          className="p-4"
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-end">
              <a href="/register">Register yourself</a>
              <a href="#">
                <button
                  type="button"
                  className="btn btn-info shadow bg-white rounded"
                >
                  login
                </button>
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
