import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Field from "../../components/forms/Field";
import AuthApi from "../../conf/AuthApi";
import AuthContext from "../../context/AuthContext";

const LoginPage = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    try {
      await AuthApi.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      console.log(toast)
      toast.success("Vous êtes connecté 😃");
      history.replace("/beers");
    } catch (error) {
      setError("Aucun compte enregistré avec cette adresse email");

      toast.error("une erreur est survenue 🙄");
    }
  };
  return (
    <>
      <div className="jumbotron  mx-auto mt-4">
        <h1 className="text-center">Connexion </h1>
        <form onSubmit={hanldeSubmit}>
          <Field
            label="Adresse email"
            name="username"
            id="username"
            onChange={handleChange}
            value={credentials.username}
            placeholder="Adresse email de connexion"
            error={error}
          />
          <Field
            label="Mot de passe"
            onChange={handleChange}
            value={credentials.password}
            type="password"
            placeholder="password"
            name="password"
            id="password"
            className="form-control"
            autoComplete="off"
          />

          <div className="form-gr">
            <button className="btn btn-primary">Je me connecte</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
