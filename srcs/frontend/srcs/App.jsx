import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './Components/Components_of_site.jsx'
import './index.css';
import Home from './pages/Homepage/Homepage.jsx';
import Test_back_end from './pages/Test_back_end';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import RegisterSuccess from './pages/Register/RegisterSuccess.jsx';
import EditProfile from './pages/EditProfile/EditProfile.jsx';
import Upload from './pages/Upload/Upload.jsx';
import UserSession from './pages/UserSession/UserSession.jsx';
import Chatbot from './pages/Chatbot/Chatbot.jsx';
import WafTest from './pages/WafTest/WafTest.jsx';
import PrivacyPolicy from './pages/TermsAndPolicies/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsAndPolicies/TermsOfService.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me", {
        credentials: "include"
    })
    .then(res => {
      if (!res.ok) {
        return null;
        }
        return res.json();
    })
    .then(data => {
      if (data && data.authenticated) {
            setIsAuthenticated(true);
        setUser(data.user);
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }
    })
    .catch(() => {
    });
  }, []);

	return (
	  <BrowserRouter>
      <title>Fiscolia</title>
		  <div className="page">

        <Header 
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
        />

        <div className="default-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backend" element={<Test_back_end />} />
            <Route path="/login" element={<Login
              setIsAuthenticated={setIsAuthenticated}
            />} />
            <Route path="/register" element={<Register />} />
  	        <Route path="/upload" element={<Upload />} />
  	        <Route path="/session" element={<UserSession 
              setIsAuthenticated={setIsAuthenticated}
            />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/terms_of_service" element={<TermsOfService />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/register-success" element={<RegisterSuccess />} />
            <Route path="/waf-test" element={<WafTest />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
   </BrowserRouter>
	)

}

export default App;
