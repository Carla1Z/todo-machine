import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">children,</div>,
    document.getElementById("modal")
  );
}

export { Modal };

// const root = ReactDOM.createRoot(document.getElementById('modal'));
// root.createPortal(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
