import "./postsList";
import classes from "./postList.module.css";

export function Post(props) {
  return (
    <div
      className={`p-3   mb-5  col-3 mx-1  ${classes.post}`}
    >
      <h3>{props.title}</h3>
      <p> {props.post}</p>
    </div>
  );
}
