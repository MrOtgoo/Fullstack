import React,{useState} from "react"
import { deleteDoc, doc } from "firebase/firestore";
import { CommentsCollection } from "../../firebase/firebase";
import Modal from "react-modal";
import EditComment from "./editComment"; 
import Commentcss from "../../comment"

function Comment(props) {
  const { Data, userId } = props;
  const [openEditModal, setOpenEditModal] = useState(true);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(CommentsCollection, commentId));
      console.log("Successfully removed");
    } catch (err) {
      console.error(err);
    }
  }

  const handleOpenEditModal = (comment) => {
    setSelectedComment(comment);
    setOpenEditModal(true);
  };
console.log(handleOpenEditModal)
  const closeEditModal =() =>{
    setOpenEditModal(false)
  }

  return (
    <div className="comment-container">
      {Data.map((comment, index) => (
        <div style={{ border: "1px solid black" }} key={index}>
          {comment.comment}
          {comment.userId === userId && (
            <div>
              <button onClick={() => handleOpenEditModal(comment.commentId)}>Edit</button>
              <button onClick={() => handleDeleteComment(comment)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    <EditComment openEditModal = {openEditModal}
    selectedComment = {selectedComment}
    closeModal={closeEditModal} />
    </div>
  );
          }
export default Comment;
