import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth, blogsCollection } from './firebase/firebase';
import Header from './components/Header';
import ProductsPage from './pages/productsPage';
import ServicesPage from './pages/servicesPage';
import ProfilePage from './pages/profilePage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import Product from './pages/Product/Product';
import { RingLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setUser(user);
      } else {
        setIsUserLoggedIn(false);
      }
      setLoading(false);
    });
  }, [Auth]);

  return (
    <div>
    {loading && <div><RingLoader color={"green"} loading={loading} size={300} cssOverride={override} aria-label={"Loading Spinner"} data-testid={"Loader"}/></div>}
    <BrowserRouter>
      {isUserLoggedIn && (
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/products" element={<ProductsPage user={user} />} />
          <Route path="/products/:id" element={<Product user={user} />} />
          <Route path="/contact" element={<ContactPage user={user} />} />
          <Route path='/ServicesPage' element={<ServicesPage user={user} />} />
        </Routes>
      )}
      {!isUserLoggedIn && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      )}
    </BrowserRouter>
    </div>
  );
}

export default App;

