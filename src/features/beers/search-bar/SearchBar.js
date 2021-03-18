import { Formik } from "formik";
import React, { Component } from "react";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    console.log(values);
  };
  render() {
    return (
      <Formik onSubmit={this.submit} initialValues={{ query: "" }}>
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex p-2 m-2 flex-row" onSubmit={handleSubmit}>
            <input
            name="query"
            className="flex-fill form-control mr-2"
              placeholder="recherce ..."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit"  className="btn btn-success" disabled={isSubmitting}>
              Recherche
            </button>
          </form>
        )}
      </Formik>
    );
  }
}
