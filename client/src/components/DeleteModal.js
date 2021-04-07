const DeleteModal = ({ isVisible, modalHandler, deleteConfirmation }) => {
  return (
    <div
      className={
        "justify-center items-center absolute inset-0 mb-20" +
        (isVisible ? " flex" : " hidden")
      }
      id="modal"
    >
      <div className="bg-gray-200 w-1/3 px-3 py-2 rounded shadow">
        <div className="flex justify-end items-center">
          <button id="close_modal" onClick={() => modalHandler(false)}>
            <box-icon name="x-circle" color="gray"></box-icon>
          </button>
        </div>
        <div className="flex justify-between items-start">
          <div className="w-3/12 flex justify-center">
            <box-icon name="error" size="lg" color="#dc2626"></box-icon>
          </div>
          <div className="w-9/12">
            <h3 className="text-gray-600 text-lg font-bold">Confirm Delete</h3>
            <p className="my-4">
              All associated data will be removed. Please confirm.
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            className="rounded-lg py-2 px-3 hover:bg-gray-300"
            onClick={() => modalHandler(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 border-2 hover:bg-red-800 text-white rounded-md py-2 px-3 ml-2"
            onClick={() => deleteConfirmation(true)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
