import classes from "./postList.module.css";
export function Modal(props) {
  return (
    <div
      onClick={props.onClose}
      className={`px-5 py-5  mt-3 mb-5 ${classes.modalPosition}`}
    >
      {props.children}
    </div>
  );
}
