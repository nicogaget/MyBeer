import React, { useState } from "react";
import { Link } from "react-router-dom";
import Field from "../components/forms/Field";
import UsersApi from "../conf/usersApi";

const RegisterPage = ({ history }) => {
  const [user, setUser] = useState({
    pseudo: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    pseudo: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  //gestion des changement des inputs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  // gestion de la soumission
  const hanldeSubmit = async (event) => {
    event.preventDefault();
    const apiErrors = {};

    if (user.password !== user.passwordConfirm) {
      apiErrors.passwordConfirm = "Confirmation incorrecte";
      setErrors(apiErrors);
      return;
    }

    try {
      await UsersApi.register(user);
      setErrors({});
      history.replace("/login");
    } 

    catch (error) {
      const { violations } = error.response.data;
      if (violations) {
        violations.forEach((v) => {
          apiErrors[v.propertyPath] = v.message;
        });
        setErrors(apiErrors);
      }
    }
  };

  return (
    <>
      <div className="jumbotron w-50 mx-auto mt-4">
        <h1 className="text-center">Inscription</h1>
        <form onSubmit={hanldeSubmit}>
          <Field
            name="pseudo"
            label="Pseudo"
            placeholder="Votre pseudo"
            error={errors.pseudo}
            value={user.pseudo}
            onChange={handleChange}
            type="text"
          />
          <Field
            name="email"
            label="Email"
            placeholder="Votre email"
            error={errors.email}
            value={user.email}
            onChange={handleChange}
          />
          <Field
            name="password"
            label="Mot de passe"
            placeholder="Votre mot de passe"
            error={errors.password}
            value={user.password}
            onChange={handleChange}
            type="password"
          />
          <Field
            name="passwordConfirm"
            label="Confirmation du mot de passe"
            placeholder="Confirmation MDP"
            error={errors.passwordConfirm}
            value={user.passwordConfirm}
            onChange={handleChange}
            type="password"
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Confirmation
            </button>
            <Link to="/login" className="btn btn-link">
              Déja un compte?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
