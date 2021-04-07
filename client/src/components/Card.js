const Card = ({ title, text, editHandler, deleteHandler, id }) => {
  return (
    <div className="bg-green-500 text-white mb-4 p-3 rounded-md shadow-sm">
      <div className="flex justify-between">
        <h3 className="text-white text-lg mb-4 font-bold">{title}</h3>
        <div>
          <button onClick={() => editHandler(id)} className="mr-2">
            <box-icon
              name="pencil"
              color="white"
              animation="flashing-hover"
            ></box-icon>
          </button>
          <button onClick={() => deleteHandler(id)}>
            <box-icon
              name="trash-alt"
              color="white"
              animation="flashing-hover"
            ></box-icon>
          </button>
        </div>
      </div>
      <p className="leading-6">{text}</p>
    </div>
  );
};

export default Card;
