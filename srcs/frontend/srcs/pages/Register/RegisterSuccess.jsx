import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, SubmitButton, NavigateButton } from '../../Components/Components_of_site.jsx'
import '../../index.css'

function RegisterSuccess() {
 
 return (
  <div style={{ width: "100%", height: "100%" }}>
    <Form title="Inscription reussie">
    
      <div className="auth-field-container">
        <p className="auth-field-name">Vous pouvez vous connecter maintenant</p>
      </div>

      <NavigateButton title="Se connecter" destination="/login" />
  
    </Form>
  </div>

  )
}

export default RegisterSuccess