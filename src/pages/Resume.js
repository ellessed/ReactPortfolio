import React from "react";
import { Button } from "react-bootstrap";

export default function Resume() {
  return (
    <div>
      <h1>Resume </h1>
      <p>Hey check out my Resume below</p>
      <div className="resume">
        <Button
          variant="Link"
          href="https://docs.google.com/document/d/e/2PACX-1vQLIZ5rr4XpJjVpeeGKyXEqSIP-9SPVuJy-nXvWKGV6hQWO2Rp5fDvzKZo8ItJnfQ/pub"
          target="_blank"
          rel="noreferrer"
          className="card-button"
        >
          View Resume
        </Button>
      </div>
    </div>
  );
}
