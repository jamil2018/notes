import DeleteModal from "./DeleteModal";
import Overlay from "./Overlay";

const ModalContainer = ({ isVisible, modalHandler, deleteConfirmation }) => {
  return (
    <>
      <Overlay isVisible={isVisible} />
      <DeleteModal
        isVisible={isVisible}
        modalHandler={modalHandler}
        deleteConfirmation={deleteConfirmation}
      />
    </>
  );
};

export default ModalContainer;
