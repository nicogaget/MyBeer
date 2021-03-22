import { Formik } from "formik";
import React, { Component } from "react";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    this.props.fetchBeers(values)
    .then(()=> actions.setSubmitting(false));
  };

  render() {
    return (
      <>
        <Formik
          onSubmit={this.submit}
          initialValues={{ name: "", country:"" }}
        >
          {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
            <form className="d-flex p-2 m-2 flex-row" onSubmit={handleSubmit}>
              <input
                name="name"
                className="flex-fill form-control "
                placeholder="recherce ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <select
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                className="mx-2"
                defaultValue={"DEFAULT"}
              >
                <option disabled value="DEFAULT">
                  Pays
                </option>
                <option value="france">France</option>
                <option value="belgique">Belgique</option>
                <option value="allemagne">Allemagne</option>
                <option value="angleterre">Angleterre</option>
                <option value="">Tous</option>
              </select>

              <button
                type="submit"
                className="btn btn-success "
                disabled={isSubmitting}
              >
                Recherche
              </button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}
