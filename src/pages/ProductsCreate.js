import React, { useState } from 'react';
import Modal from 'react-modal';
import { addDoc } from 'firebase/firestore';
import { blogsCollection } from '../firebase/firebase';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

function ProductsCreate(props) {
  const { closeModal, user, openModal } = props;
  const [formValues, setFormValues] = useState({
    title: '',
    text: '',
    Paragraph: '',
    image: '',
  });
  const [submittedData, setSubmittedData] = useState();

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const handleSubmitButton = async () => {
    try {
      const docRef = await addDoc(blogsCollection, {
        title: formValues.title,
        text: formValues.text,
        userImage: user.photoURL,
        blogParagraph: formValues.Paragraph,
        userName: user.displayName,
        userId: user.uid,
        image: formValues.image,
      });
    setFormValues({title: '',
    text: '',
    Paragraph: '',
    image: '',
})
      closeModal();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false}>
      <div style={{    backgroundColor:"#B5DBED", width: '500px', height: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <label>Title</label>
          <input
            placeholder="Please enter blog title"
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <label>Preview Text</label>
          <textarea
            placeholder="Please enter blogs"
            type="text"
            name="text"
            value={formValues.text}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <label>Paragraph</label>
          <textarea
            placeholder="Please enter blog text"
            type="text"
            rows={5}
            name="Paragraph"
            value={formValues.Paragraph}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <label>Image</label>
          <textarea
            placeholder="Please enter blog image URL"
            type="text"
            name="image"
            value={formValues.image}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmitButton} style={{border:"2px solid Black  " ,color:" black",background:"none", fontSize:"20px",borderRadius:"50px"}}>Submit</button>
        {submittedData && (
          <div>
            <h2>Submitted Data</h2>
            <p>Title: {submittedData.title}</p>
            <p>Text: {submittedData.text}</p>
            <p>Image: {submittedData.image}</p>
          </div>
        )}
        <button onClick={closeModal} style={{border:"2px solid Black  " ,color:" black",background:"none", fontSize:"20px",borderRadius:"50px"}}>Close</button>
      </div>
    </Modal>
  );
}


export default ProductsCreate;