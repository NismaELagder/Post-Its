import { Post } from "./post";
import classes from "./postList.module.css";
import { useLoaderData } from "react-router-dom";

export function PostsList() {
  const notes = useLoaderData();

  return (
    <>
      <ul
        className={`d-flex flex-wrap justify-content-between col-lg-10 mx-auto ps-0 py-5 ${classes.postsPosition}`}
      >
        {notes.map((note) => (
          <Post
            title={note.noteLabel}
            post={note.noteContent}
          ></Post>
        ))}
      </ul>
    </>
  );
}
