import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { blogsCollection, CommentsCollection } from "../../firebase/firebase";
import Header from "../../components/Header";
import styled from 'styled-components';
import DeleteIcon from '../../image/trash.png'
import edit from "../../image/edit2.png"
import EditComment from "./editComment";
import Comment from "./Comments";




const Container = styled.div`
  background-color: white;
  min-width: 360px;
  padding: 30px;
  height: 374px;
  border: 2px solid black;
  color: black;
  border-radius:50px;
`;

const CommentContainer = styled.div`
  border: 1px solid black;
  color: black;
`;

const Product = (props) => {
  const { user } = props;
  const { id } = useParams();
  const selectedBlogId = id;
  

  const [blogData, setBlogData] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getBlogData = async () => {
      setLoading(true);

      const blogs = await getDocs(blogsCollection);
      const blogsData = blogs.docs.map((doc) => {
        const blogId = doc.id;
        const blogData = doc.data();
        blogData.blogId = blogId;
        return blogData;
      });

      const selectedBlog = blogsData.find((blog) => {
        return blog.blogId === selectedBlogId;
      });

      setBlogData(selectedBlog);

      onSnapshot(CommentsCollection, (collection) => {
        const firebaseCommentsData = collection.docs.map((doc) => {
          const commentId = doc.id;
          const commentData = doc.data();
          commentData.commentId = commentId;
          return commentData;
        });

        const blogComments = firebaseCommentsData.filter((comment) => {
          return comment.blogId === selectedBlogId;
        });

        setCommentsData(blogComments);
      });

      setLoading(false);
    };

    getBlogData();
  }, [selectedBlogId]);

  const handleCommentButton = async () => {
    try {
      await addDoc(CommentsCollection, {
        comment: inputValue,
        blogId: blogData.blogId,
        userId: user.uid,
      });

      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(blogsCollection,));
    } catch (error) {
      console.error(error);
    }
  };
  
 
console.log(blogData)
return (
  <div style={{ background: 'white' }}>
    {loading && <div>Loading...</div>}
    {!loading && !blogData ? (
      <div>Blog not found</div>
    ) : (
      <div>
        <Header darkTheme user={user} />
        <div style={{ border: "1px solid black" }}>
          <div style={{ paddingTop: "50px", height: "700px", width: "1000px", display: "flex", paddingLeft: "100px" }}>
            <Container style={{ border: "2px solid #33B2FF", color: "#B47E4C" }}>
              <div>{blogData.title}</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ paddingLeft: "20px" }}>{blogData.text}</span>
                <span style={{ paddingLeft: "20px" }}>{blogData.blogParagraph}</span>
              </div>
            </Container>
            <div>
              <textarea
                style={{ borderRadius: "50px", border: "2px solid #33B2FF", color: "#B47E4C" }}
                placeholder="Leave your comment"
                onChange={handleInputValue}
                value={inputValue}
              />
              <button onClick={handleCommentButton} style={{ color: "#33B2FF", border: '3px solid #33B2FF', background: "none", height: "30px", width: "100px", fontSize: "20px", borderRadius: "30px" }}>Comment</button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Comment userId={user.uid} Data={commentsData} />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default Product;