import React,{useState} from "react"
import { deleteDoc, doc } from "firebase/firestore";
import { CommentsCollection } from "../../firebase/firebase";
import Modal from "react-modal";
import EditComment from "./editComment"; 

function Comment(props) {
  const { Data, userId } = props;
  const [openEditModal, setOpenEditModal] = useState(false);
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
  const closeEditModal =() =>{
    setOpenEditModal(false)
  }

  return (
    <div className="comment-container">
      {Data.map((comment, index) => (
        <div style={{border: "2px solid #33B2FF", color: "#B47E4C", borderRadius:"25px",display:"flex", justifyContent:"spacebetween"}} key={index}>
          {comment.comment}
          {comment.userId === userId && (
            <div>
              <button  style={{ color: "#33B2FF", border: '3px solid #33B2FF', background: "none", height: "20px", width: "50px", fontSize: "10px", borderRadius: "30px" }} onClick={() => handleOpenEditModal(comment)}>Edit</button>
              <button   style={{ color: "#33B2FF", border: '3px solid #33B2FF', background: "none", height: "20px", width: "50px", fontSize: "10px", borderRadius: "30px" }} onClick={() => handleDeleteComment(comment.commentId)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    <EditComment openEditModal = {openEditModal}
    selectedComment = {selectedComment}
    closeEditModal={closeEditModal} />
    </div>
  );
          }
export default Comment;
