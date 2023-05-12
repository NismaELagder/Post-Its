import "./postsList";
import classes from "./postList.module.css";
import axios from "axios";
import { Modal } from "./Modal";
import { Link, Form, redirect } from "react-router-dom";
export function Newpost(props) {
  const stopChildClick = (e) => {
    e.stopPropagation();
  };

  // const [label, setLabel] = useState("");
  // const addLabel = (e) => {
  //   setLabel(e.target.value);
  // };
  // const [content, setPost] = useState("");
  // const addNote = (e) => {
  //   setPost(e.target.value);
  // };

  // const [notes, setNotes] = useState([]);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const noteData = {
  //     noteLabel: label,
  //     noteContent: content,
  //   };
  // props.addNote(noteData);
  //   axios.post("http://localhost:2000/notes", noteData);

  //   props.cancelNote(e);
  // };

  return (
    <Modal>
      <Form
        className="newPost col-lg-5 mx-auto my-5"
        onClick={stopChildClick}
        method="post"
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            id="noteLabel"
            className="form-control py-0"
            placeholder="Note label"
            name="noteLabel"
          />
          <label htmlFor="noteLabel" className="form-label">
            Enter Note Label
          </label>
        </div>
        <div className="form-floating">
          <textarea
            type="text"
            id="noteContent"
            className="form-control "
            placeholder="Note content"
            maxLength={250}
            name="noteContent"
          />
          <label
            htmlFor="noteContent"
            className="form-label"
          >
            Enter Note Content
          </label>
        </div>
        <div className="d-flex justify-content-end  mt-3">
          <Link
            to="/"
            type="button"
            className="col-3 btn rounded text-white me-3"
            style={{ backgroundColor: "#d0acb8" }}
          >
            Cancel
          </Link>
          <button
            className={`${classes.btn}  col-3 btn rounded text-white`}
          >
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = await Object.fromEntries(formData);
  const sendData = await axios.post(
    "http://localhost:2000/notes",
    {
      noteLabel: noteData.noteLabel,
      noteContent: noteData.noteContent,
    }
  );

  console.log(
    `${noteData.noteLabel} + ${noteData.noteContent}`
  );
  return redirect("/");
}
