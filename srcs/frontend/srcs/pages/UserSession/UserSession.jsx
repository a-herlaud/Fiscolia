import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { handleLogout } from '../Utils/Logout.jsx';
import { ChatBotEmoji } from './ChatBotEmoji.jsx';
import { NavigateButton } from '../../Components/Components_of_site.jsx'
import './UserSession.css'

export default function UserSession({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
              <p class="key">Prénom:</p>
              <p class="value">{user.firstname}</p>
            </div>
            <div className="key-value">
              <p class="key">Nom:</p>
              <p class="value">{user.lastname}</p>
            </div>
            <div className="key-value">
              <p class="key">Date de naissance:</p>
              <p class="value">non spécifié</p>
            </div>
            <div className="key-value">
              <p class="key">Lieu de naissance:</p>
              <p class="value">non spécifié</p>
            </div>

              <h2 className="session-h2">La description de l'utilisateur</h2>
              <div className="session-separator"></div>
              <div className="key-value">
                <p class="key">Etat civil</p>
                <p class="value">non spécifié</p>
              </div>
              <div className="key-value">
                <p class="key">Quotient familial</p>
                <p class="value">non spécifié</p>
              </div>
              <div className="key-value">
                <p class="key">Situation spécifique</p>
                <p class="value">non spécifié</p>
              </div>
              <div className="key-value">
                <p class="key">RNI</p>
                <p class="value">non spécifié</p>
              </div>
              <div className="key-value">
                <p class="key">CSP</p>
                <p class="value">non spécifié</p>
              </div>

            <h2 className="session-h2">Mon mot de passe</h2>
            <div className="session-separator"></div>
            <p class="key">*********</p>

            <h2 className="session-h2">Mes moyens de contact</h2>
            <div className="session-separator"></div>
            <div className="key-value">
              <p class="key">Adresse électronique:</p>
              <p class="value">{user.email}</p>
            </div>

            <div className="session-button-position">
              <NavigateButton title="Modifier" destination="/edit-profile" />
            </div>
          </div>
              
          <div className="chat-box-container">
            <div>
              <ChatBotEmoji />
            </div>
            <div className="text-under-emoji">
              Besoin d'aide?
            </div>
          </div>
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