import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const CreateNoteScreen = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/notes", { title, description });
    } catch (err) {
      setError(true);
    }
    history.push("/");
  };
  return (
    <>
      <PageTitle text="Create a new note" />
      {error ? (
        <h2>Error saving data</h2>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="my-4">
            <input
              className="w-2/3 border-none rounded bg-gray-200 focus:bg-white"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="my-4">
            <textarea
              name="description"
              className="w-2/3 border-none rounded bg-gray-200 focus:bg-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition ease-in-out duration-200 focus:outline-none"
          >
            Create Note
          </button>
        </form>
      )}
    </>
  );
};

export default CreateNoteScreen;
