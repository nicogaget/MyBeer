import React, { useState } from "react";
import AuthApi from "../../conf/AuthApi";

const LoginPage = ({onLogin}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    try {
      await AuthApi.authenticate(credentials);
      setError("");
      onLogin(true)
    } catch (error) {
      setError("Aucun compte enregistré avec cette adresse email");
    }
  };
  return (
    <>
      <div className="jumbotron  mx-auto mt-4">
        <h1 className="text-center">Connexion </h1>
        <form onSubmit={hanldeSubmit}>
          <div className="form-group">
            <label htmlFor="username">Adresse email</label>
            <input
              onChange={handleChange}
              value={credentials.username}
              type="email"
              placeholder="Adresse email de connexion"
              name="username"
              id="username"
              className={"form-control " + (error && "is-invalid")}
              autoComplete="off"
            />
            {error && <p className="invalid-feedback">{error}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              onChange={handleChange}
              value={credentials.password}
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-gr">
            <button className="btn btn-primary">Je me connecte</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
