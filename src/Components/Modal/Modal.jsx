import css from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={css.Modal__backdrop}>
      <div className={css.Modal__content}></div>
    </div>
  );
};

export default Modal;
