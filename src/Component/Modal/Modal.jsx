import { useState } from "react";
import React from "react";
function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
    </div>
  );
}

export default Modal;
