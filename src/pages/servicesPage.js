import React from "react";
import Header from "../components/Header";
import { useEffect,useState } from "react";
import {ContactCollection } from '../firebase/firebase';
import { getDocs, onSnapshot, query, collection, orderBy, doc } from 'firebase/firestore';

function ServicesPage(props) { 
 const [Data, setData] = useState("")

 useEffect(()=>{
    const getData = async () =>{
        onSnapshot(ContactCollection, (collection)=>{
            const ContactData = collection.docs.map((doc)=>{
                const Data = doc.data();
                Data.blogId = doc.id;
                return Data
            })
            setData(ContactData)
        })
    }
    getData();
 },[])
console.log(Data)
    return (
        <div style={{ backgroundColor: "#F5F6A", backgroundSize: "cover", width: "100%", height: "100vh" }}>
            <Header user={props.user} darkTheme={true} />
        </div>
    );
}

export default ServicesPage;
