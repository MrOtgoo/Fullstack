import React, { useState } from 'react';
import Header from "../components/Header";
import { ContactCollection } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const docRef = await addDoc(ContactCollection, {
        name: name,
        email: email,
        message: message,
      });

      setName("");
      setEmail("");
      setMessage("");
      setLoader(false);

      closeModal(); 
      toast.success("Form submitted successfully!");

    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const closeModal = () => {
    

  };

  return (
    <div style={{ backgroundColor: '#F5F6A', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
      <Header user={props.user} darkTheme={true} />
      <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: 'center', backgroundColor: "#3EA0DF" }}>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              style={{ background: "transparent", fontSize: "20px", border: "2px solid #A4C5DB", borderRadius: "20px", color: "" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;