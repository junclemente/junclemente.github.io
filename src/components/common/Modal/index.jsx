import React from "react";
import ReactModal from "react-modal";
import styles from "./Modal.module.scss";

ReactModal.setAppElement("#root");

const Modal = ({ isOpen, children, onRequestClose }) => {
  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
