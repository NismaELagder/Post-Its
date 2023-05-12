import "./App.css";
import { useState } from "react";
import { PostsList } from "./components/posts/postsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  const [visibility, editVisibility] = useState(true);
  const handleVisibility = (e) => {
    editVisibility(false);
  };
  const showNewPosts = (e) => {
    editVisibility(true);
  };
  return (
    <>
      <Outlet />
      <main className="d-flex justify-content-center">
        {" "}
        <PostsList
          checkVisibility={handleVisibility}
          visible={visibility}
        />
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const allNotes = await axios(
    "http://localhost:2000/notes"
  );
  console.log(allNotes.data);
  return allNotes.data;
}
