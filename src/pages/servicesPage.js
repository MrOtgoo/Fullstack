import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { collection, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { ContactCollection } from '../firebase/firebase';

function ServicesPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(ContactCollection, (collection) => {
        const contactData = collection.docs.map((doc) => {
          const contact = doc.data();
          contact.contactId = doc.id;
          return contact;
        });
        setData(contactData);
      });
    };
    getData();
  }, []);

  const handleDeleteContact = async (contactId) => {
    try {
      await deleteDoc(doc(ContactCollection, contactId));
      console.log("Successfully removed");
    } catch (err) {
      console.error(err);
    }
  };

  console.log(data);

  return (
    <div style={{ backgroundColor: "#F5F6A", backgroundSize: "cover", width: "100%", height: "100vh" }}>
      <Header user={props.user} darkTheme={true} />
      <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
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
          {data.map((contact, index) => (
            <div
              key={index}
              style={{
                width: '350px',
                cursor: 'pointer',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                border: "2px solid  #72E00F   ",
                color: "#062727 ",
                borderRadius: "50px",
                alignItems: "center",
                fontSize: "20px",
                justifyContent: "space-evenly",
                background:" #72E00F "
              }}
            >
            <div>
            message</div>
              from:{contact.name}
              <div>
                {contact.message}
              </div>
              <button style={ { border:" 1px solid #133258",backgroundColor:"Transparent" , borderRadius:"20px"}} onClick={() => handleDeleteContact(contact.contactId)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;