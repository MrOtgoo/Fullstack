import React, { useEffect } from "react";
import Modal from "react-modal";
import { doc, updateDoc } from "firebase/firestore";
import { CommentsCollection } from "../../firebase/firebase";
import { useState} from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

function EditComment(props) {
  const { openEditModal, selectedComment, closeEditModal } = props;
  const [InputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (selectedComment) {
      setInputValue(selectedComment.comment);
    }
  }, [selectedComment]);

  const handleSaveButton = async () => {
    await updateDoc(doc(CommentsCollection, selectedComment.commentId), {
      ...selectedComment,
      comment: InputValue,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelButton = () => {
    setInputValue(selectedComment.comment);
    closeEditModal(); 
  };
  return (
    <Modal isOpen={openEditModal} ariaHideApp={false} style={customStyles}>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
      <input value={InputValue} onChange={handleInput}/>
      </div>
      <div>
      <button onClick={handleSaveButton}>save</button>
      <button onClick={handleCancelButton}>cancel</button></div>
    </Modal>
  );
}

export default EditComment;
