import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsEditModalOpen,
  selectIsModalOpen,
} from "../../redux/modal/selectors";
import { toggleModal, toggleEditModal } from "../../redux/modal/slice";
import css from "./Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const isEditModalOpen = useSelector(selectIsEditModalOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        if (isModalOpen) {
          dispatch(toggleModal());
        } else if (isEditModalOpen) {
          dispatch(toggleEditModal());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isModalOpen, isEditModalOpen]);

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (isModalOpen) {
        dispatch(toggleModal());
      } else if (isEditModalOpen) {
        dispatch(toggleEditModal());
      }
    }
  };

  const handleOnCloseBtnClick = () => {
    isModalOpen ? dispatch(toggleModal()) : dispatch(toggleEditModal())
  }

  return createPortal(
    <div className={css.Modal__backdrop} onClick={handleBackDropClick}>
      <div className={css.Modal__content}>
        <CloseIcon
          color="secondary"
          sx={{ position: "absolute", right: 10, top: 10, cursor: 'pointer' }}
          onClick={handleOnCloseBtnClick}
        />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
