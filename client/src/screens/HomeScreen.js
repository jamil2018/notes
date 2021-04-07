import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Card from "../components/Card";
import ModalContainer from "../components/ModalContainer";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteConfirmationState, setDeleteConfirmationState] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState({
    initialLoad: false,
    refreshGrid: false,
  });
  const history = useHistory();
  const editNoteHandler = (id) => {
    history.push(`/notes/${id}`);
  };
  const deleteHandler = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };
  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      const { data } = await axios.get("/api/notes");
      setCardData(data);
      setLoading(false);
    };
    if (refreshFlag.initialLoad === false || refreshFlag.refreshGrid === true) {
      setRefreshFlag({ initialLoad: true, refreshGrid: false });
      getNotes();
    }
  }, [refreshFlag]);
  useEffect(() => {
    const deleteNote = async () => {
      try {
        await axios.delete(`/api/notes/${deleteId}`);
        setRefreshFlag({ initialLoad: true, refreshGrid: true });
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    if (deleteConfirmationState) {
      deleteNote();
      setShowDeleteModal(false);
    }
    setDeleteConfirmationState(false);
  }, [deleteConfirmationState, deleteId, error]);
  return (
    <>
      <PageTitle text="All Notes" />
      <div className="overflow-y-auto max-h-3/4-full pr-8">
        {error ? (
          <h2>Error in operation</h2>
        ) : loading ? (
          <Loader />
        ) : (
          cardData.map((cardInfo) => (
            <Card
              key={cardInfo._id}
              title={cardInfo.title}
              text={cardInfo.description}
              id={cardInfo._id}
              editHandler={editNoteHandler}
              deleteHandler={deleteHandler}
            />
          ))
        )}
      </div>
      <ModalContainer
        isVisible={showDeleteModal}
        modalHandler={setShowDeleteModal}
        deleteConfirmation={setDeleteConfirmationState}
      />
    </>
  );
};

export default HomeScreen;
