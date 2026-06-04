import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import validator from 'validator';
import { Form } from '../../Components/Components_of_site.jsx'
import '../../index.css'

function Login({ setIsAuthenticated }) {

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/me", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        navigate("/session");
      } 
  };
    checkSession();
  }, [navigate]);

  const getValidation = (field, value, data) => {
  
      switch (field) {
        case "email":
          return {
            not_empty: value.trim() !== "",
            valid: validator.isEmail(value),
          };
        case "password":
          return {
            not_empty: value.trim() !== "",
          }
        }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VERIFICATION DATA
    const fieldsToValidate = ["email", "password"];

    for (const fieldName of fieldsToValidate) {
      const value = formData[fieldName];
      const rules = getValidation(fieldName, value, formData);
      
      const isFieldValid = Object.values(rules).every(v => v === true);

      if (!isFieldValid) {
        setMessage(`Invalid email or password`);
        return;
      }
    }

    try {
      const response = await fetch("/api/auth-login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important: send cookies
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.detail || "Email or password incorrect");

        setFormData({
          email: "",
          password: "",
        });

        return;
      }
      setIsAuthenticated(true);
      navigate( "/session" );
      const data = await response.json();
      setMessage(data.message);
      
      // Redirect to UserSession dashboard after successful login
      setTimeout(() => navigate("/session"), 5000);
    } catch (error) {
      setMessage("ERROR: " + error.message);
    }
  };

  return (
    <div style={{ "--form-height": "clamp( 440px, 78vh, 700px )",
                  width: "100%",
                  height: "100%" }}>
      <Form title="Se connecter" handleSubmit={ handleSubmit }>

            <div className="auth-field-container">
              <p>Email</p>
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className="auth-field-container">
              <p>Mot de passe</p>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </div>
            
            <p className="auth-error-message">{message}</p>

		        <div style={{ width: "100%", display: "block"}}>
              <button type="submit">Connexion</button>
            </div>

      </Form>
    </div>

  )
}

export default Login

{/*"--form-padding-top": "clamp( 30px, 7vw, 90px )",
"--form-padding-bottom": "clamp( 50px, 5vw, 100px )",
"--form-margin-top": "clamp( 50px, 15vw, 150px )",*/}