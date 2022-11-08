import { useState } from "react";
import React from "react";
function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <children />
    </div>
  );
}

export default Modal;
