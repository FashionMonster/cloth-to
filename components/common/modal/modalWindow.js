import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "320px",
    height: "200px",
    padding: "0px",
    display: "grid",
    gridTemplateRows: "repeat(4, minmax(0, 1fr))",
    borderRadius: "10px",
    backgroundColor: "#F3F4F6",
  },
};

const ModalWindow = (props) => {
  return (
    <Modal isOpen={props.modalIsOpen} style={customStyles}>
      <div className="row-start-2 row-end-3 mx-auto my-auto font-medium">
        {props.message}
      </div>
      <button
        onClick={() => props.setIsOpen(false)}
        className="row-start-3 row-end-4 mx-auto my-auto bg-purple-700 w-20 h-8 text-white rounded text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
      >
        閉じる
      </button>
    </Modal>
  );
};

export { ModalWindow };
