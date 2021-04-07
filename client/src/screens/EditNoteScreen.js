import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";

const EditNoteScreen = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/notes/${id}`, { title, description });
    } catch (err) {
      setError(true);
    }
    history.push("/");
  };
  useEffect(() => {
    const getNoteById = async () => {
      try {
        setLoading(true);
        const { data: note } = await axios.get(`/api/notes/${id}`);
        setTitle(note.title);
        setDescription(note.description);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    getNoteById();
  }, [id]);
  return (
    <>
      <PageTitle text="Edit Note" />
      {error ? (
        <h2>Error loading data</h2>
      ) : loading ? (
        <Loader />
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
            Save Note
          </button>
        </form>
      )}
    </>
  );
};

export default EditNoteScreen;
