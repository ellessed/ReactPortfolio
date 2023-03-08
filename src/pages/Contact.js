import React from "react";

export default function Contact() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center m-3"
      style={{ height: "80vh" }}
    >
      <h1>Contact</h1>
      {/* form container */}
      <div className="d-flex flex-column m-2 justify-content-evenly h-50 w-50">
        {/* container for the first label-input pair */}
        <div>
          <label for="name-input" class="form-label m-0">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            id="name-input"
          />
        </div>
        {/* container for the second label-input pair */}

        <div>
          <label for="email-input" class="form-label m-0">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            id="email-input"
          />
        </div>
        {/* container for the label-textarea pair */}

        <div>
          <label for="message-textarea" class="form-label m-0">
            Message
          </label>
          <div className="input-group">
            <textarea
              className="form-control"
              aria-label="With textarea"
              placeholder="Your message here..."
              id="message-textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
