import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { handleLogout } from '../Utils/Logout.jsx';
import { ChatBot, ChatBotEmoji } from '../../Components/ChatBotEmoji.jsx';
import { NavigateButton } from '../../Components/Components_of_site.jsx'
import './UserSession.css'

export default function UserSession({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const [formData, setProfileData] = useState({
    etat_civil: "",
    quotient_familial: "",
    situation_specifique: "",
    rni: "",
    csp: "",
  });


  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/get-profile", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        console.log("/api/get-profile failed with status:", response.status);
        return;
      }
      const data = await response.json();
      console.log("see response: ", data);
      setProfileData({
        etat_civil: data.etat_civil || "",
        quotient_familial: data.quotient_familial || "",
        situation_specifique: data.situation_specifique || "",
        rni: data.rni || "",
        csp: data.csp || "",
      });
    } catch (error) {
      console.log("Failed to get user descrption", error);
    }
  };

  fetchProfile();
}, []);

  useEffect(() => {
    // Fetch user info if authenticated
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          credentials: "include",
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        });

        console.log("GET /api/me status:", response.status);

        // Handle 304 Not Modified or other non-200/non-401 responses
        if (response.status === 304) {
          // 304 means cached, try again without cache
          console.log("Got 304, retrying without cache...");
          const retryResponse = await fetch("/api/me", {
            method: "GET",
            credentials: "include",
            headers: { 
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache, no-store, must-revalidate'
            }
          });
          if (retryResponse.ok) {
            const userData = await retryResponse.json();
            console.log("Retry user data fetched:", userData);
            setUser(userData);
            setLoading(false);
            return;
          }
        }

        if (!response.ok) {
          console.error("Not authenticated, redirecting to login. Status:", response.status);
          setLoading(false);
          navigate("/login");
          return;
        }

        const responseText = await response.text();
        console.log("Response text:", responseText);
        
        const userData = JSON.parse(responseText);
        console.log("Parsed user data:", userData);
        setUser(userData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err);
        setLoading(false);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);



  const handleUpload = () => {
    navigate("/upload");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  if (loading) {
    return <p className="auth-field-name">Loading...</p>;
  }

  // Only show if user is authenticated
  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="center-body-style">
     
        <BodyHeader user={ user } />
        <div className="session-body">
            <h1 className="session-h1">Mes informations personnelles</h1>
            <h2 className="session-h2">Mon identite</h2>
            <div className="session-separator"></div>
            <div className="key-value">
              <p className="key">Prénom:</p>
              <p className="value">{user.firstname}</p>
            </div>
            <div className="key-value">
              <p className="key">Nom:</p>
              <p className="value">{user.lastname}</p>
            </div>

              <h2 className="session-h2">La description de l'utilisateur</h2>
              <div className="session-separator"></div>
              <div className="key-value">
                <p className="key">Etat civil</p>
                <p className="value">{ formData.etat_civil || "non spécifié" }</p>
              </div>
              <div className="key-value">
                <p className="key">Quotient familial</p>
                <p className="value">{ formData.quotient_familial || "non spécifié" }</p>
              </div>
              <div className="key-value">
                <p className="key">Situation spécifique</p>
                <p className="value">{ formData.situation_specifique || "non spécifié" }</p>
              </div>
              <div className="key-value">
                <p className="key">RNI</p>
                <p className="value">{ formData.rni || "non spécifié" }</p>
              </div>
              <div className="key-value">
                <p className="key">CSP</p>
                <p className="value">{ formData.csp || "non spécifié" }</p>
              </div>

            <h2 className="session-h2">Mon mot de passe</h2>
            <div className="session-separator"></div>
            <p className="key">*********</p>

            <h2 className="session-h2">Mes moyens de contact</h2>
            <div className="session-separator"></div>
            <div className="key-value">
              <p className="key">Adresse électronique:</p>
              <p className="value">{user.email}</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="session-button-position">
              <NavigateButton title="Modifier" destination="/edit-profile" />
            </div>
          </div>
              
          <ChatBot />
    </div>
  );
}

export function BodyHeader ({ user }) {

  return (
    <div className="session-header">
      <h2>{user.firstname} {user.lastname}</h2>
      <p>Numero fiscal: 9334012429019</p>
    </div>
  )
}