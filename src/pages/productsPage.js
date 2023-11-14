import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductsCreate from './ProductsCreate';
import { blogsCollection } from '../firebase/firebase';
import { getDocs, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function ProductsPage(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      onSnapshot(blogsCollection, (collection) => {
        const firebaseDocData = collection.docs.map((doc) => {
          const data = doc.data();
          data.blogId = doc.id;
          return data;
        });
        setData(firebaseDocData);
        setLoading(false);
      });
    };

    getData();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleCreateNewPostButton = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleDeleteComment = async (blogId) => {
    try {
      await deleteDoc(doc(blogsCollection, blogId));
      console.log("Successfully removed");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B5DBED",
      }}
    >
      <Header user={props.user} darkTheme={true} />
      <div
        style={{
          width: '1080px',
          background: 'transparent',
          height: '100vh',
        }}
      >
        <button onClick={handleCreateNewPostButton} style={{ color: "#4099C2  ", background: "Transparent", border: "2px solid #4099C2  ", fontSize: "20px", borderRadius: "50px" }}>Create new post</button>
        {loading && <div><RingLoader color={"green"} loading={loading} size={300} cssOverride={override} aria-label={"Loading Spinner"} data-testid={"Loader"} /></div>}
        {!loading && data.length === 0 && <div style={{ color: "black", }}>There are no blogs</div>}
        {!loading && data.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              maxHeight: '80%',
              paddingTop: '16px',
              overflow: 'scroll',
              gap: '30px',
              color: 'Black'
            }}
          >
            {data.map((blog, index) => (
              <div
                key={index}
                onClick={(e) => {
                  handleProductClick(blog.blogId);
                }}
                style={{
                  width: '250px',
                  cursor: 'pointer',
                  height: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: "2px solid #4099C2  ",
                  color: "#B47E4C",
                  borderRadius: "50px",
                  alignItems: "center",
                  fontSize: "20px",
                  justifyContent: "space-evenly",
                }}
              >
                {blog.title}
                <img src={blog.image} alt="" width="77%" height="70%" style={{ borderRadius: "20px" }} />
                {blog.userId === props.user.uid && (
                  <button style={{ color: "#4099C2  ", background: "Transparent", border: "2px solid #4099C2  ", fontSize: "20px", borderRadius: "50px" }} onClick={() => handleDeleteComment(blog.blogId)}>Delete</button>
                )}
              </div>
            ))}
          </div> 
        )}
      </div>
      <ProductsCreate user={props.user} openModal={openModal} closeModal={closeModal} />
    </div>
  );
}

export default ProductsPage;





