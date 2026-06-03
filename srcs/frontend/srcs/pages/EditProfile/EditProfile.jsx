import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from '../Register/Register.module.css';
import '../../index.css'
import './EditProfile.css'

function EditProfile() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
	etat_civil: "",
	quotient_familial: "",
	situation_specifique: "",
	rni: "",
	csp: "",
  });

  const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	try {
		const response = await fetch("/api/edit-profile", {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(formData),
		});
		if (!response.ok) {
			setMessage("Une erreur est survenue");
			return;
		}
		setMessage("Profil modifié avec succès");
	}
	catch (error) {
		setMessage("ERROR");
		console.log("Something went wrong...", error);
	}
};

  return (


	<div className="center-body-style">
	  <form className="modify_form" onSubmit={handleSubmit}>
	  <h1>Je change mon profil</h1>
	  <div className="auth-field-container">
		<p>Etat civil</p>
		<input type="text" name="etat_civil" value={formData.etat_civil} onChange={handleChange} placeholder="Etat civil" />
	  </div>
	  <div className="auth-field-container">
		<p>Quotient familial</p>
		<input type="text" name="quotient_familial" value={formData.quotient_familial} onChange={handleChange} placeholder="Quotient familial" />
	  </div>
	  <div className="auth-field-container">
		<p>Situation spécifique</p>
		<input type="text" name="situation_specifique" value={formData.situation_specifique} onChange={handleChange} placeholder="Situation spécifique" />
	  </div>
	  <div className="auth-field-container">
		<p>RNI</p>
		<input type="text" name="rni" value={formData.rni} onChange={handleChange} placeholder="Revenus nets imposables (par an)" />
	  </div>
	  <div className="auth-field-container">
		<p>CSP</p>
		<input type="text" name="csp" value={formData.csp} onChange={handleChange} placeholder="Catégorie socio professionnelle" />
	  </div>
	  <div>
			<p>{message}</p>
		<button type="submit">Save profile</button>
	  </div>
	  <div>
		<Link to="/">
		  <button>Return to Home page</button>
		</Link>
	  </div>
	  </form>
	</div>
  );
}

export default EditProfile