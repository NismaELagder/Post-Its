import { MdMessage, MdPostAdd } from "react-icons/md";
import classes from "./posts/postList.module.css";
import { Link } from "react-router-dom";
export function Header(props) {
  return (
    <>
      <header className="d-flex text-white justify-content-between align-items-center col-10 mx-auto py-3">
        <h1>
          <MdMessage size={36} className="pe-2" />
          Post-Its <br />{" "}
          <span style={{ fontSize: "1rem" }}>
            {" "}
            A safe place to keep your notes
          </span>
        </h1>
        <div className="">
          <Link
            type="button "
            className={`btn rounded d-flex align-items-center text-white ${classes.btn}`}
            to="/createnote"
          >
            <MdPostAdd size={18} />
            New Note
          </Link>{" "}
        </div>
      </header>
    </>
  );
}
