const Overlay = ({ isVisible }) => {
  return (
    <div
      className={
        "bg-black bg-opacity-50 absolute inset-0 justify-center items-center text-gray-600" +
        (isVisible ? " flex" : " hidden")
      }
      id="overlay"
    ></div>
  );
};

export default Overlay;
